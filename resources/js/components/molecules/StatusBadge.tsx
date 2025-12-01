import Badge from '../atoms/Badge';

const StatusBadge = ({ status }: { status: string }) => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Applied':
                return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
            case 'SkillTest':
                return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
            case 'Interview':
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
            case 'Offered':
                return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
            case 'Rejected':
                return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
            case 'Hired':
                return 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200';
            default:
                // Fallback / Rejected
                return 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200';
        }
    };

    return <Badge colorClass={getStatusColor(status)}>{status}</Badge>;
};

export default StatusBadge;
