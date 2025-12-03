<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JobsApplication;
use Inertia\Inertia;

class HomeController extends Controller
{
 
public function index(Request $request)
{
    // 1. Mulai dengan Base Query (Query Kosong)
    $query = JobsApplication::query();

    // 2. Logic SEARCH (Kode kamu, tapi kita bungkus dalam closure)
    // PENTING: Kita pakai where(function($q)...) agar logika OR tidak bocor keluar
    if ($request->filled('search')) {
        $search = $request->search;
        $query->where(function ($q) use ($search) {
            $q->where('companyName', 'like', '%' . $search . '%')
              ->orWhere('position', 'like', '%' . $search . '%')
              ->orWhere('applicationPlatform', 'like', '%' . $search . '%')
              ->orWhere('status', 'like', '%' . $search . '%');
        });
    }

    // 3. Logic FILTER TANGGAL (Baru)
    if ($request->filled('dateFilter') && $request->dateFilter !== 'ALL') {
        $dateFilter = $request->dateFilter;
        // Tentukan mau filter berdasarkan 'applicationDate' atau 'created_at'
        $dateColumn = 'applicationDate'; 

        switch ($dateFilter) {
            case '7D':
                $query->where($dateColumn, '>=', now()->subDays(7));
                break;
            case '30D':
                $query->where($dateColumn, '>=', now()->subDays(30));
                break;
            case '6M':
                $query->where($dateColumn, '>=', now()->subMonths(6));
                break;
            case '1Y':
                $query->where($dateColumn, '>=', now()->subYear());
                break;
        }
    }

    // 4. Eksekusi Data untuk TABEL
    // Kita clone query-nya supaya pengaturan search & filter di atas terbawa
    $jobs = (clone $query)
        ->latest()
        ->paginate(10)
        ->withQueryString();

    // 5. Eksekusi Data untuk CHART (Opsional tapi bagus)
    // Chart otomatis ikut terfilter (misal cuma nampilin chart 7 hari terakhir)
    $statsRaw = (clone $query)
        ->selectRaw('status, COUNT(*) as total')
        ->groupBy('status')
        ->pluck('total', 'status')
        ->toArray();
    
    // Mapping agar data chart aman (tidak undefined)
    $chartData = [
        'Applied'   => $statsRaw['Applied'] ?? 0,
        'Interview' => $statsRaw['Interview'] ?? 0,
        'Offered'   => $statsRaw['Offered'] ?? 0,
        'Rejected'  => $statsRaw['Rejected'] ?? 0,
        'Ghosted'   => $statsRaw['Ghosted'] ?? 0,
        'Hired'     => $statsRaw['Hired'] ?? 0,
        'SkillTest'=> $statsRaw['SkillTest'] ?? 0,
        'Total'     => $jobs->total(),
    ];

    return Inertia::render('Home', [
        'jobs'    => $jobs,
        'stats'   => $chartData,
        // Kirim balik state filter & search biar UI gak reset
        'filters' => $request->only(['search', 'dateFilter']),
    ]);
}

    public function create_job()
    {
        return view('create_job');
    }
}