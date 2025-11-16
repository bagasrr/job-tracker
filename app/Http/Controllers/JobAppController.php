<?php

namespace App\Http\Controllers;

use App\Models\JobsApplication;
use Illuminate\Http\Request;

class JobAppController extends Controller
{
    public function create()
    {
        return view('create_job');
    }
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required|integer',
            'companyName' => 'required|string|max:255',
            'applicationPlatform' => 'required|string|max:255',
            'applicationDate' => 'required|date',
            'position' => 'required|string|max:255',
            'notes' => 'nullable|string',
        ],[
            'user_id.required' => 'User ID is required.',
            'companyName.required' => 'Company Name is required.',
            'applicationPlatform.required' => 'Application Platform is required.',
            'applicationDate.required' => 'Application Date is required.',
            'position.required' => 'Position is required.',
        ]);

        // dd($validatedData, 'Form submission received. Validation passed.');

        // // Simpan data ke database
        JobsApplication::create($validatedData);

        return redirect()->route('home')->with('message', 'Job application added successfully.');
    }

    public function details ($id)
    {
        $job = JobsApplication::findOrFail($id);
        // dd($job);
        return view('job_details', compact('job'));
    }

    public function edit_details($id)
    {
        $job = JobsApplication::findOrFail($id);
        return view('edit_job', compact('job'));
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'companyName' => 'required|string|max:255',
            'applicationPlatform' => 'required|string|max:255',
            'applicationDate' => 'required|date',
            'status' => 'required|string|max:50',
            'position' => 'required|string|max:255',
            'notes' => 'nullable|string',
        ],[
            'companyName.required' => 'Company Name is required.',
            'applicationPlatform.required' => 'Application Platform is required.',
            'applicationDate.required' => 'Application Date is required.',
            'position.required' => 'Position is required.',
        ]);

        $job = JobsApplication::findOrFail($id);
        // dd($validatedData, $job);
        $job->update($validatedData);

        return redirect()->route('home')->with('message', 'Job application updated successfully.');
    }

    public function delete($id)
    {
        $job = JobsApplication::findOrFail($id);
        // dd($job);
        $job->delete();
        return redirect()->route('home')->with('message', 'Job application deleted successfully.');
    }
}