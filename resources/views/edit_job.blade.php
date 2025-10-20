@extends('layouts.app')

@section('content')

<div class="mb-8">
    <h1 class="text-3xl font-bold text-gray-800">Edit Lowongan</h1>
    <p class="text-gray-600 mt-1">Silahkan ganti form dibawah ini untuk mengubah lowongan.</p>
</div>

<div class="bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-lg font-semibold text-gray-700 mb-4">Form Lamaran</h2>
    <form action="{{ route('jobs.update', $job->id_jobs) }}" method="POST">
        @method('PATCH')
        @csrf
        <input type="number" name="user_id" value="1" hidden>
        <div class="mb-4">
            <label for="companyName" class="block text-gray-700 font-medium mb-1">Nama Perusahaan</label>
            <input type="text" id="companyName" name="companyName" class="w-full p-2 border rounded-md"
                value="{{ $job->companyName }}">
            @error('companyName')
            <div class="text-red-500 text-sm mt-1">{{ $message }}</div>
            @enderror
        </div>
        <div class="mb-4">
            <label for="position" class="block text-gray-700 font-medium mb-1">Posisi</label>
            <input type="text" id="position" name="position" class="w-full p-2 border rounded-md"
                value="{{ $job->position }}">
            @error('position')
            <div class="text-red-500 text-sm mt-1">{{ $message }}</div>
            @enderror
        </div>
        <div class="flex items-center gap-5">

            <div class="mb-4 w-1/3">
                <label for="applicationDate" class="block text-gray-700 font-medium mb-1">Tanggal Lamaran</label>
                <input type="date" id="applicationDate" name="applicationDate" class="w-full p-2 border rounded-md"
                    value="{{ $job->applicationDate }}">
                @error('applicationDate')
                <div class="text-red-500 text-sm mt-1">{{ $message }}</div>
                @enderror
            </div>
            <div class="mb-4 w-1/3">
                <label for="applicationPlatform" class="block text-gray-700 font-medium mb-1">Platform Lamaran</label>
                <input type="text" id="applicationPlatform" name="applicationPlatform"
                    class="w-full p-2 border rounded-md" value="{{ $job->applicationPlatform }}">
                @error('applicationPlatform')
                <div class="text-red-500 text-sm mt-1">{{ $message }}</div>
                @enderror
            </div>
        </div>
        <div class="mb-4">
            <label for="notes" class="block text-gray-700 font-medium mb-1">Catatan</label>
            <textarea id="notes" name="notes" rows="4" class="w-full p-2 border rounded-md"
                value="{{ $job->notes }}"></textarea>
        </div>

        <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Simpan</button>
    </form>
</div>

@endsection