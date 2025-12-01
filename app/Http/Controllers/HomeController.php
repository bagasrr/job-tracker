<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JobsApplication;
use Inertia\Inertia;

class HomeController extends Controller
{
     public function index(Request $request)
    {
        $search = $request->input('search');
        // Mengambil semua data dari model JobsApplication, diurutkan dari yang terbaru
        // $jobs = JobsApplication::latest()->get();

        $jobs = JobsApplication::when($search, function ($query, $search) {
            return $query->where('companyName', 'like', '%' . $search . '%')
                         ->orWhere('position', 'like', '%' . $search . '%')
                         ->orWhere('applicationPlatform', 'like', '%' . $search . '%')
                         ->orWhere('status', 'like', '%' . $search . '%');
        })->latest()->paginate(10)->withQueryString();

        // Mengirim data 'jobs' ke view 'home'
        //  return Inertia::render('Home', [
        //     'jobs' => $jobs,
        //     'filters' => [
        //         'search' => $search,
        //     ],
        // ]);


        // 2. Query Data Statistik (BARU - Agregat Total)
        // Kita hitung total berdasarkan status tanpa paginasi
        $statusCounts = JobsApplication::selectRaw('status, COUNT(*) as total')
            ->groupBy('status')
            ->pluck('total', 'status')
            ->toArray();
        
        $chartData = [
            'Applied'   => $statusCounts['Applied'] ?? 0,   // Kalau gak ada, isi 0
            'SkillTest' => $statusCounts['SkillTest'] ?? 0,
            'Interview' => $statusCounts['Interview'] ?? 0,
            'Offered'   => $statusCounts['Offered'] ?? 0,
            'Rejected'  => $statusCounts['Rejected'] ?? 0,
            'Hired'     => $statusCounts['Hired'] ?? 0,
            'Ghosted'   => $statusCounts['Ghosted'] ?? 0
        ];

        return Inertia::render('Home', [
            'jobs'    => $jobs,
            'filters' => $request->only(['search']),
            'stats'   => $chartData,
        ]);

        // return view('home', compact('jobs'));
    }

    public function create_job()
    {
        return view('create_job');
    }
}