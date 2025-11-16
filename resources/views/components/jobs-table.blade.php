<!-- Komponen ini menerima variabel $jobs dari view yang memanggilnya -->
<div class="bg-white rounded-lg shadow-md overflow-hidden">
    <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 overflow-auto">
            <thead class="bg-gray-50">
                <tr>
                    <!-- ini tai -->
                    <th scope="col"
                        class="w-10 overflow-hidden text-center text-xs font-medium text-gray-500 uppercase tracking-wider sticky left-0 z-10 bg-indigo-50 p-2">
                        No
                    </th>
                    <th scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky left-5 z-10 w-[250px] bg-red-50">
                        Company Name
                    </th>
                    <th scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Position
                    </th>
                    <th scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-full">
                        Application Date
                    </th>
                    <th scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                    </th>
                    <th scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Notes
                    </th>
                    <th scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Updated
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
                    <!-- ini tai -->
                    <td class="whitespace-nowrap text-sm text-center text-gray-500 sticky left-0 z-10 bg-lime-50 w-10">
                        {{ $loop->iteration }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap sticky left-5 z-10 bg-red-50 w-[250px]">
                        <div class="text-sm font-medium text-gray-900  text-wrap ">
                            {{ $job->companyName }}
                        </div>
                        <div class="text-sm text-gray-500">{{ $job->applicationPlatform }}</div>
                    </td>
                    <td class="px-6 whitespace-nowrap">
                        <div class=" text-sm text-gray-900">{{ $job->position }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap w-full">
                        <div class="text-sm text-gray-500">
                            {{ \Carbon\Carbon::parse($job->applicationDate)->format('d M Y') }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        {{-- Memberi warna pada status --}}
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                @if($job->status == 'Applied') bg-blue-100 text-blue-800 
                                @elseif($job->status == 'Skilltest') bg-purple-100 text-purple-800
                                @elseif($job->status == 'Interview') bg-yellow-100 text-yellow-800
                                @elseif($job->status == 'Offered') bg-green-100 text-green-800
                                @else bg-red-100 text-red-800 @endif">
                            {{ $job->status }}
                        </span>
                    </td>
                    <td>
                        <div
                            class="text-sm  text-gray-900 min-w-[100px] max-w-[120px] text-wrap max-h-[80px] overflow-auto">
                            {{$job->notes}} </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-500">
                            {{ \Carbon\Carbon::parse($job->updated_at)->format('d M Y') }}</div>
                    </td>
                    <td
                        class=" py-4 whitespace-nowrap text-right text-sm font-medium gap-3 flex flex-wrap justify-start">
                        <a href="{{ route('jobs.edit', $job->id_jobs) }}"
                            class="bg-lime-500 hover:bg-lime-600 text-white px-4 py-2 rounded-md  hover:text-lime-900"><svg
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path
                                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fill-rule="evenodd"
                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                            </svg></a>
                        <a href="{{ route('jobs.details', $job->id_jobs) }}"
                            class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:text-indigo-900"><svg
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-card-list" viewBox="0 0 16 16">
                                <path
                                    d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                                <path
                                    d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
                            </svg></a>
                        <div x-data="{ showModal: false }" class="inline">

                            <button type="button" @click.prevent="showModal = true"
                                class="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-800 hover:text-rose-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-trash" viewBox="0 0 16 16">
                                    <path
                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                    <path
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                </svg>
                            </button>

                            <form x-ref="deleteForm" action="{{ route('jobs.delete', $job->id_jobs) }}" method="POST"
                                class="hidden">
                                @csrf
                                @method('DELETE')
                            </form>

                            <div x-show="showModal"
                                class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                                style="display: none;">
                                <div
                                    class="flex flex-col items-center bg-white p-6 rounded-lg shadow-xl max-w-sm mx-auto overflow-hidden">

                                    <h3 class="text-lg font-medium text-gray-900">Konfirmasi Penghapusan</h3>

                                    <p class="mt-2 text-sm text-gray-600 whitespace-normal break-words text-center">
                                        Apakah kamu yakin ingin menghapus data lamaran {{ $job->position }} di
                                        {{ $job->companyName }}?
                                    </p>

                                    <div class="mt-6 flex justify-end space-x-3 w-full"> <button type="button"
                                            @click="showModal = false"
                                            class="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
                                            Batal
                                        </button>

                                        <button type="button" @click="$refs.deleteForm.submit()"
                                            class="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-800">
                                            Ya, Hapus
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
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