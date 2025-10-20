@extends('layouts.app')

@section('content')
<div>

    <h1 class="text-3xl font-bold text-gray-800 mb-4">Job Application Details</h1>
    <div class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">

        <div class="flex items-center gap-10 justify-evenly">
            <div>
                <h2 class="text-lg font-semibold text-gray-700 mb-2">Job Details</h2>
                <div class="mb-4">
                    <strong class="text-gray-600">Company Name:</strong>
                    <p class="text-gray-800">{{ $job->companyName }}</p>
                </div>
                <div class="mb-4">
                    <strong class="text-gray-600">Position:</strong>
                    <p class="text-gray-800">{{ $job->position }}</p>
                </div>
                <div class="mb-4">
                    <strong class="text-gray-600">Application Platform:</strong>
                    <p class="text-gray-800">{{ $job->applicationPlatform }}</p>
                </div>
            </div>
            <div>
                <div class="mb-4">
                    <strong class="text-gray-600">Application Date:</strong>
                    <p class="text-gray-800">{{ \Carbon\Carbon::parse($job->applicationDate)->format('d M Y') }}</p>
                </div>
                <div class="mb-4">
                    <strong class="text-gray-600">Status:</strong>
                    <p class="text-gray-800">{{ $job->status }}</p>
                </div>
                <div class="mb-4">
                    <strong class="text-gray-600">Notes:</strong>
                    <p class="text-gray-800">{{ $job->notes ?? 'No additional notes.' }}</p>
                </div>
            </div>
        </div>
        <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            <a href="{{route('home')}}">Kembali</a>
        </button>
    </div>
</div>

@endsection