import JobTableRow from './JobTableRow';

const JobTable = ({ jobs, onDeleteJob }) => {
    // Style Class Variables untuk Header agar rapi
    const thBaseClass =
        'px-6 py-3 text-left text-xs font-medium uppercase tracking-wider';
    const stickyHeaderClass = 'sticky z-20'; // Z-index lebih tinggi dari row body

    return (
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                            {/* Sticky No - Header */}
                            <th
                                scope="col"
                                className={`sticky left-0 z-20 w-10 border-b bg-lime-50 p-2 text-center text-gray-500 dark:border-gray-700 dark:bg-lime-900/40 dark:text-gray-300`}
                            >
                                No
                            </th>

                            {/* Sticky Company Name - Header (RED SIDE) */}
                            <th
                                scope="col"
                                className={`${thBaseClass} sticky left-10 z-20 w-[250px] border-b border-gray-200 bg-rose-50 text-gray-500 shadow-sm dark:border-gray-700 dark:bg-rose-950 dark:text-gray-300`}
                            >
                                Company Name
                            </th>

                            {/* Standard Headers */}
                            <th
                                scope="col"
                                className={`${thBaseClass} text-gray-500 dark:text-gray-400`}
                            >
                                Position
                            </th>
                            <th
                                scope="col"
                                className={`${thBaseClass} w-full text-gray-500 dark:text-gray-400`}
                            >
                                Application Date
                            </th>
                            <th
                                scope="col"
                                className={`${thBaseClass} text-gray-500 dark:text-gray-400`}
                            >
                                Status
                            </th>
                            <th
                                scope="col"
                                className={`${thBaseClass} text-gray-500 dark:text-gray-400`}
                            >
                                Notes
                            </th>
                            <th
                                scope="col"
                                className={`${thBaseClass} text-gray-500 dark:text-gray-400`}
                            >
                                Last Updated
                            </th>
                            <th
                                scope="col"
                                className={`${thBaseClass} text-gray-500 dark:text-gray-400`}
                            >
                                Action
                            </th>
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
                                    colSpan="8"
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
