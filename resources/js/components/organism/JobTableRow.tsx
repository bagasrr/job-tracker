import { Job } from '@/types/table';
import { useState } from 'react';
import Button from '../atoms/Button';
import HighlightText from '../atoms/HighlightText';
import TableData from '../atoms/TableData';
import DeleteConfirmationModal from '../molecules/DeleteConfirmationModal';
import StatusBadge from '../molecules/StatusBadge';

const formatDate = (dateString: string | Date | null | undefined) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });
};
// const formattedDate = formatDate({ dateString: new Date(job.applicationDate) });

const JobTableRow = ({
    job,
    onDelete,
    rowNumber,
    searchKeyword,
}: {
    job: Job;
    onDelete: (id: number) => void;
    rowNumber: number;
    searchKeyword: string;
}) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleDeleteConfirm = () => {
        onDelete(job.id_jobs);
        setShowDeleteModal(false);
    };

    return (
        <tr className="group">
            <TableData className="sticky left-0 z-10 w-10">
                {rowNumber}
            </TableData>
            <TableData className="sticky left-[6.6%] z-10 max-w-[200px] min-w-[200px] !text-left !whitespace-normal">
                <div className="font-medium text-gray-900 dark:text-white">
                    <HighlightText
                        text={job.companyName}
                        highlight={searchKeyword}
                    />
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                    {job.applicationPlatform}
                </div>
            </TableData>
            <TableData>
                <HighlightText text={job.position} highlight={searchKeyword} />
            </TableData>
            <TableData>{formatDate(job.applicationDate)}</TableData>
            <TableData>
                <StatusBadge status={job.status} />
            </TableData>
            <TableData>
                <div className="scrollbar-thin max-h-[80px] max-w-[120px] min-w-[100px] overflow-auto text-sm text-wrap text-gray-900 dark:text-gray-300">
                    {job.notes ? job.notes : '-'}
                </div>
            </TableData>
            <TableData>{formatDate(job.updated_at)}</TableData>
            <TableData className="flex flex-col items-center justify-evenly gap-2">
                <Button
                    href={`/jobs/${job.id_jobs}/edit`}
                    className="border border-green-800 bg-green-700 text-green-100 hover:bg-green-500 dark:bg-green-100/0 dark:text-green-300 dark:hover:bg-green-600 dark:hover:text-green-200"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pen"
                        viewBox="0 0 16 16"
                    >
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                    </svg>
                </Button>
                <Button
                    href={`/jobs/${job.id_jobs}`}
                    className="border border-indigo-800 bg-indigo-700 text-indigo-200 hover:bg-indigo-500 hover:text-white dark:border-indigo-400 dark:bg-indigo-50/0 dark:text-indigo-400 dark:hover:bg-indigo-600 dark:hover:text-white"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-card-text"
                        viewBox="0 0 16 16"
                    >
                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                        <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
                    </svg>
                </Button>
                <div className="inline">
                    <Button
                        onClick={() => setShowDeleteModal(true)}
                        className="cursor-pointer border border-rose-600 bg-rose-700 text-rose-100 hover:bg-rose-500 dark:border-rose-600 dark:bg-rose-50/0 dark:text-rose-400 dark:hover:bg-rose-600 dark:hover:text-rose-200"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash"
                            viewBox="0 0 16 16"
                        >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                        </svg>
                    </Button>
                    <DeleteConfirmationModal
                        isOpen={showDeleteModal}
                        onClose={() => setShowDeleteModal(false)}
                        onConfirm={handleDeleteConfirm}
                        jobTitle={job.position}
                        companyName={job.companyName}
                    />
                </div>
            </TableData>
        </tr>
    );
};

export default JobTableRow;
