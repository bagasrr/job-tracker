import { Job } from '@/types/table';
import { router } from '@inertiajs/react';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Button from '../atoms/Button';
import JobTableHead from '../atoms/JobTableHead';
import Toast from '../atoms/Toast';
import JobTableRow from './JobTableRow';

interface JobTableProps {
    jobs: Job[];
    onDeleteJob: (id: number) => void;
    filters?: {
        search: string;
    };
}

const JobTable = ({ jobs, filters, onDeleteJob }: JobTableProps) => {
    const [search, setSearch] = useState(filters?.search || '');
    useEffect(() => {
        const currentSearch = search || '';
        const serverSeacrh = filters?.search || '';
        if (currentSearch === serverSeacrh) return;

        const delayDebouncefn = setTimeout(() => {
            router.get(
                '/',
                { search: search || undefined },
                {
                    preserveState: true,
                    replace: true,
                    only: ['jobs', 'filters'],
                },
            );
        }, 500);

        return () => clearTimeout(delayDebouncefn);
    }, [search, filters]);

    return (
        <div className="flex flex-col gap-5">
            <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:items-center md:justify-between">
                <Button
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 focus:outline-none md:w-auto dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                    href="/add-job"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-plus-circle"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg>
                    Tambah Lamaran Baru
                </Button>
                <div className="relative w-full md:w-[300px]">
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center justify-between pl-3">
                        <svg
                            className="h-4 w-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
                            placeholder="Cari posisi atau perusahaan..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <X
                            className={`${search ? 'cursor-pointer hover:text-slate-200' : 'cursor-not-allowed'} absolute top-2 right-2 text-slate-400`}
                            onClick={() => setSearch('')}
                        />
                    </div>
                </div>
            </div>
            <Toast />
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
                <div className="max-h-[75dvh] w-full overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="sticky top-0 z-10 bg-gray-50 dark:bg-gray-700">
                            <tr>
                                {/* Sticky No - Header */}

                                <th className="sticky top-0 left-0 z-30 w-14 bg-slate-200 px-2 text-center font-medium tracking-wider text-gray-500 uppercase shadow-sm dark:bg-gray-700 dark:text-gray-400">
                                    #
                                </th>

                                <JobTableHead className="left-0 z-30 w-16 md:left-[40px]">
                                    Company Name
                                </JobTableHead>

                                {/* Standard Headers */}
                                <JobTableHead className="z-10">
                                    Position
                                </JobTableHead>
                                <JobTableHead className="z-10">
                                    Application Date
                                </JobTableHead>
                                <JobTableHead className="z-10">
                                    Status
                                </JobTableHead>
                                <JobTableHead className="z-10">
                                    Notes
                                </JobTableHead>
                                <JobTableHead className="z-10">
                                    Last Updated
                                </JobTableHead>
                                <JobTableHead className="z-10">
                                    Action
                                </JobTableHead>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                            {jobs.length > 0 ? (
                                jobs.map((job, index) => {
                                    // LOGIKA PENOMORAN DISINI:
                                    // Cara 1 (Simple): Reset jadi 1 tiap halaman
                                    const number = index + 1;

                                    // Cara 2 (Pagination Aware): Lanjut (misal hal 2 mulai dr 11)
                                    // const number = (currentPage - 1) * itemsPerPage + index + 1;

                                    return (
                                        <JobTableRow
                                            key={job.id_jobs || index}
                                            job={job}
                                            rowNumber={number} // <--- Kirim nomor ke anak
                                            onDelete={onDeleteJob}
                                            searchKeyword={search}
                                        />
                                    );
                                })
                            ) : (
                                <tr>
                                    <td
                                        colSpan={8}
                                        className="px-6 py-10 text-center text-sm text-gray-500 dark:text-gray-400"
                                    >
                                        <div className="flex flex-col items-center justify-center">
                                            <span className="mb-2 text-2xl">
                                                📂
                                            </span>
                                            Belum ada data lamaran pekerjaan.
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default JobTable;
