const DeleteConfirmationModal = ({
    isOpen,
    onClose,
    onConfirm,
    jobTitle,
    companyName,
}: {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    jobTitle: string;
    companyName: string;
}) => {
    if (!isOpen) return null;

    return (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <div className="mx-auto flex max-w-sm flex-col items-center overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-700 dark:bg-gray-800">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Konfirmasi Penghapusan
                </h3>

                <p className="mt-2 text-center text-sm text-wrap text-gray-600 dark:text-gray-300">
                    Apakah kamu yakin ingin menghapus data lamaran{' '}
                    <strong className="text-rose-600 dark:text-rose-400">
                        {jobTitle}
                    </strong>
                    {' di '}
                    <strong className="text-gray-900 dark:text-white">
                        {companyName}
                    </strong>
                    ?
                </p>

                <div className="mt-6 flex w-full justify-end space-x-3">
                    <button
                        type="button"
                        onClick={onClose}
                        className="cursor-pointer rounded-md bg-gray-200 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                    >
                        Batal
                    </button>
                    <button
                        type="button"
                        onClick={onConfirm}
                        className="cursor-pointer rounded-md bg-rose-500 px-4 py-2 text-white transition-colors hover:bg-rose-600 dark:bg-rose-600 dark:hover:bg-rose-700"
                    >
                        Ya, Hapus
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;
