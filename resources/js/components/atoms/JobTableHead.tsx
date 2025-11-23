const JobTableHead = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const thBaseClass =
        'px-6 py-3 text-left text-xs font-medium uppercase tracking-wider';

    return (
        <th
            scope="col"
            className={`${thBaseClass} ${className} w-full bg-slate-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400`}
        >
            {children}
        </th>
    );
};

export default JobTableHead;
