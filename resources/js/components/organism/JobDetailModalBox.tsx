import { formatDate } from '@/lib/utils';
import { Job } from '@/types/table';
import { X } from 'lucide-react';
import StatusBadge from '../molecules/StatusBadge';

const JobDetailModalBox = ({
    onClose,
    isVisible,
    data,
}: {
    onClose: () => void;
    isVisible: boolean;
    data: Job;
}) => {
    console.log(data);
    return (
        <div
            className={`${isVisible ? 'fixed' : 'hidden'} inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm`}
        >
            <X
                className="fixed top-10 right-10 z-50 cursor-pointer"
                onClick={onClose}
            />
            <div className="min-h-xl mx-auto flex min-w-xl flex-col items-center overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-700 dark:bg-gray-800">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    {data.companyName}
                </h1>
                <h2 className="mt-5 text-xl font-semibold text-gray-600 dark:text-slate-300">
                    {data.position}
                </h2>
                <div className="mt-6 flex w-full justify-evenly text-left">
                    <div>
                        <p className="mt-4 text-gray-600 dark:text-slate-300">
                            Applied on
                        </p>
                        <p className="mt-4 text-gray-600 dark:text-slate-300">
                            Applied Date
                        </p>
                        <p className="mt-4 text-gray-600 dark:text-slate-300">
                            Current Status
                        </p>
                        <p className="mt-4 text-gray-600 dark:text-slate-300">
                            Last Updated
                        </p>

                        <p className="mt-4 text-gray-600 dark:text-slate-300">
                            Notes
                        </p>
                    </div>
                    <div>
                        <p className="mt-4 text-gray-600 dark:text-slate-300">
                            : {data.applicationPlatform}
                        </p>
                        <p className="mt-4 text-gray-600 dark:text-slate-300">
                            : {formatDate(data.applicationDate)}
                        </p>
                        <p className="mt-4 text-gray-600 dark:text-slate-300">
                            : <StatusBadge status={data.status} />
                        </p>
                        <p className="mt-4 text-gray-600 dark:text-slate-300">
                            : {formatDate(data.updated_at)}
                        </p>
                        <p className="mt-4 text-gray-600 dark:text-slate-300">
                            : {data.notes ? data.notes : '-'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetailModalBox;
