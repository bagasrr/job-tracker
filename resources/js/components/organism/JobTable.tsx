import { Job } from '@/types/table';
import Button from '../atoms/Button';
import JobTableHead from '../atoms/JobTableHead';
import JobTableRow from './JobTableRow';

interface JobTableProps {
    jobs: Job[];
    onDeleteJob: (id: number) => void;
}

const JobTable = ({ jobs, onDeleteJob }: JobTableProps) => {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:items-center md:justify-between">
                <Button
                    className="text-md flex w-full items-center gap-2 rounded-lg bg-green-600 px-5 py-2 text-white hover:bg-green-700 focus:ring-4 focus:ring-green-300 md:w-auto dark:bg-green-800 dark:hover:bg-green-900 dark:focus:ring-green-900"
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
                <div className="flex items-center gap-5">
                    <div className="relative w-full md:w-[300px]">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
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
                        <input
                            type="text"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
                            placeholder="Cari posisi atau perusahaan..."
                        />
                    </div>

                    {/* Button */}
                    <Button className="w-full rounded-lg bg-indigo-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 focus:outline-none md:w-auto dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
                        Search
                    </Button>
                </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
                <div className="w-full overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                {/* Sticky No - Header */}

                                <JobTableHead className="sticky left-0 z-20">
                                    No
                                </JobTableHead>

                                <JobTableHead className="sticky left-[6.6%] z-20 w-16">
                                    Company Name
                                </JobTableHead>

                                {/* Standard Headers */}
                                <JobTableHead>Position</JobTableHead>
                                <JobTableHead>Application Date</JobTableHead>
                                <JobTableHead>Status</JobTableHead>
                                <JobTableHead>Notes</JobTableHead>
                                <JobTableHead>Last Updated</JobTableHead>
                                <JobTableHead>Action</JobTableHead>
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
