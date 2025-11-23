import { Job } from '@/types/table';
import JobTableHead from '../atoms/JobTableHead';
import JobTableRow from './JobTableRow';

interface JobTableProps {
    jobs: Job[];
    onDeleteJob: (id: number) => void;
}

const JobTable = ({ jobs, onDeleteJob }: JobTableProps) => {
    return (
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
            <div>
                <search className="bg-white text-black">Ini Pencarian</search>
            </div>

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
    );
};

export default JobTable;
