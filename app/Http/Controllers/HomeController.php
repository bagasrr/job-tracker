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
         return Inertia::render('Home', [
            'jobs' => $jobs,
            'filters' => [
                'search' => $search,
            ],
        ]);
        // return view('home', compact('jobs'));
    }

    public function create_job()
    {
        return view('create_job');
    }
}