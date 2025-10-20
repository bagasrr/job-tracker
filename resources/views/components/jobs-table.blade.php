<!-- Komponen ini menerima variabel $jobs dari view yang memanggilnya -->
<div class="bg-white rounded-lg shadow-md overflow-hidden">
    <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        No
                    </th>
                    <th scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Company Name
                    </th>
                    <th scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Position
                    </th>
                    <th scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Application Date
                    </th>
                    <th scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                    </th>
                    <th scope="col"
                        class="x-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">

                @forelse ($jobs as $job)
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {{ $loop->iteration }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm font-medium text-gray-900">{{ $job->companyName }}</div>
                        <div class="text-sm text-gray-500">{{ $job->applicationPlatform }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">{{ $job->position }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-500">
                            {{ \Carbon\Carbon::parse($job->applicationDate)->format('d M Y') }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        {{-- Memberi warna pada status --}}
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                @if($job->status == 'Applied') bg-blue-100 text-blue-800 
                                @elseif($job->status == 'Interview') bg-yellow-100 text-yellow-800
                                @elseif($job->status == 'Offered') bg-green-100 text-green-800
                                @else bg-red-100 text-red-800 @endif">
                            {{ $job->status }}
                        </span>
                    </td>
                    <td
                        class=" py-4 whitespace-nowrap text-right text-sm font-medium gap-3 flex flex-wrap justify-start">
                        <a href="{{ route('jobs.edit', $job->id_jobs) }}"
                            class="bg-lime-500 hover:bg-lime-600 text-white px-4 py-2 rounded-md  hover:text-lime-900">Edit</a>
                        <a href="{{ route('jobs.details', $job->id_jobs) }}"
                            class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:text-indigo-900">Details</a>
                        <a href="#"
                            class="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-800 hover:text-rose-300">Delete</a>


                    </td>
                </tr>
                @empty
                {{-- Tampilan jika tidak ada data sama sekali --}}
                <tr>
                    <td colspan="5" class="px-6 py-4 text-center text-sm text-gray-500">
                        Belum ada data lamaran pekerjaan.
                    </td>
                </tr>
                @endforelse
            </tbody>
        </table>


    </div>
</div>