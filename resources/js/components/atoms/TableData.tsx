const TableData = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <td
            className={`${className} max-w-[250px] bg-white p-5 text-sm whitespace-nowrap text-gray-500 transition-colors duration-200 group-hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:group-hover:bg-gray-700`}
        >
            {children}
        </td>
    );
};

export default TableData;
