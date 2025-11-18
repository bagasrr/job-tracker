import { useState } from 'react';
import Button from '../atoms/Button';
import DeleteConfirmationModal from '../molecules/DeleteConfirmationModal';
import StatusBadge from '../molecules/StatusBadge';

const formatDate = (dateString) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });
};

const JobTableRow = ({ job, onDelete, rowNumber }) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleDeleteConfirm = () => {
        onDelete(job.id_jobs);
        setShowDeleteModal(false);
    };

    return (
        <tr className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50">
            {/* 1. Sticky No: Background Lime Soft */}
            <td className="sticky left-0 z-10 w-10 border-r border-gray-200 bg-lime-50 text-center text-sm whitespace-nowrap text-gray-500 dark:border-gray-700 dark:bg-lime-900/20 dark:text-gray-400">
                {/* Logic Index Number */}
                {rowNumber}
            </td>

            {/* 2. Sticky Company Name: RED SIDE (Rose Soft) */}
            {/* Menggunakan rose-50 untuk light, dan rose-950 untuk dark agar solid menutupi teks yang scroll di bawahnya */}
            <td className="sticky left-10 z-10 w-[250px] border-r border-gray-200 bg-rose-50 px-6 py-4 whitespace-nowrap shadow-sm dark:border-gray-700 dark:bg-rose-950">
                <div className="text-sm font-medium text-wrap text-gray-900 dark:text-white">
                    {job.companyName}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                    {job.applicationPlatform}
                </div>
            </td>

            {/* Kolom Biasa */}
            <td className="bg-white px-6 whitespace-nowrap dark:bg-gray-800">
                <div className="text-sm text-gray-900 dark:text-gray-200">
                    {job.position}
                </div>
            </td>

            <td className="w-full bg-white px-6 py-4 whitespace-nowrap dark:bg-gray-800">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                    {formatDate(job.applicationDate)}
                </div>
            </td>

            <td className="bg-white px-6 py-4 whitespace-nowrap dark:bg-gray-800">
                <StatusBadge status={job.status} />
            </td>

            <td className="bg-white dark:bg-gray-800">
                <div className="scrollbar-thin max-h-[80px] max-w-[120px] min-w-[100px] overflow-auto text-sm text-wrap text-gray-900 dark:text-gray-300">
                    {job.notes}
                </div>
            </td>

            <td className="bg-white px-6 py-4 whitespace-nowrap dark:bg-gray-800">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                    {formatDate(job.updated_at)}
                </div>
            </td>

            {/* Actions */}
            <td className="flex flex-wrap justify-start gap-3 bg-white px-4 py-4 text-right text-sm font-medium whitespace-nowrap dark:bg-gray-800">
                <Button
                    href={`/jobs/${job.id_jobs}/edit`}
                    className="bg-lime-500 text-white hover:bg-lime-600"
                >
                    ✏️
                </Button>
                <Button
                    href={`/jobs/${job.id_jobs}`}
                    className="bg-indigo-600 text-white hover:bg-indigo-700"
                >
                    📄
                </Button>
                <div className="inline">
                    <Button
                        onClick={() => setShowDeleteModal(true)}
                        className="bg-rose-500 text-white hover:bg-rose-600"
                    >
                        🗑️
                    </Button>
                    <DeleteConfirmationModal
                        isOpen={showDeleteModal}
                        onClose={() => setShowDeleteModal(false)}
                        onConfirm={handleDeleteConfirm}
                        jobTitle={job.position}
                        companyName={job.companyName}
                    />
                </div>
            </td>
        </tr>
    );
};

export default JobTableRow;
