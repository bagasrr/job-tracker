<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JobsApplication; 

class HomeController extends Controller
{
     public function index()
    {
        // Mengambil semua data dari model JobsApplication, diurutkan dari yang terbaru
        $jobs = JobsApplication::latest()->get();

        // Mengirim data 'jobs' ke view 'home'
        return view('home', compact('jobs'));
    }

    public function create_job()
    {
        return view('create_job');
    }
}