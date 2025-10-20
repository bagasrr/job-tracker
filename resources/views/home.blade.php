@extends('layouts.app')

@section('content')

<!-- Bagian Greetings -->
<div class="mb-8">
    <h1 class="text-3xl font-bold text-gray-800">Selamat Datang Kembali!</h1>
    <p class="text-gray-600 mt-1">Berikut adalah ringkasan aktivitas lamaran pekerjaan Anda.</p>
</div>

<!-- Bagian untuk Chart (2x2 Grid) -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <!-- Card untuk Chart 1 -->
    <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-lg font-semibold text-gray-700 mb-2">Status Lamaran</h2>
        <div class="h-64 bg-gray-200 rounded-md flex items-center justify-center">
            <span class="text-gray-500">Chart akan ditampilkan di sini</span>
        </div>
    </div>

    <!-- Card untuk Chart 2 -->
    <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-lg font-semibold text-gray-700 mb-2">Lamaran per Bulan</h2>
        <div class="h-64 bg-gray-200 rounded-md flex items-center justify-center">
            <span class="text-gray-500">Chart akan ditampilkan di sini</span>
        </div>
    </div>

    <!-- Card untuk Chart 3 -->
    <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-lg font-semibold text-gray-700 mb-2">Platform Lamaran</h2>
        <div class="h-64 bg-gray-200 rounded-md flex items-center justify-center">
            <span class="text-gray-500">Chart akan ditampilkan di sini</span>
        </div>
    </div>

    <!-- Card untuk Chart 4 -->
    <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-lg font-semibold text-gray-700 mb-2">Statistik Lainnya</h2>
        <div class="h-64 bg-gray-200 rounded-md flex items-center justify-center">
            <span class="text-gray-500">Chart akan ditampilkan di sini</span>
        </div>
    </div>
</div>

<!-- Bagian Tabel Data -->
<div>

    <h2 class="text-2xl font-bold text-gray-800 mb-4">Riwayat Lamaran Pekerjaan</h2>
    <div class="mb-5 w-fit bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
        <a href="{{ route('jobs.create') }}">
            Tambah Data
        </a>
    </div>
    @if (session('message'))
    <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 transition  duration-200"
        role="alert">
        <span class="block sm:inline">
            {{ session('message') }}
        </span>
    </div>
    @endif


    <!-- Memanggil komponen tabel dan mengirimkan data '$jobs' -->
    @include('components.jobs-table', ['jobs' => $jobs])
</div>

@endsection