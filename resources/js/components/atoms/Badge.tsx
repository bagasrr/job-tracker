import { ReactNode } from 'react';

const Badge = ({
    children,
    colorClass,
}: {
    children: ReactNode;
    colorClass: string;
}) => {
    return (
        <span
            className={`inline-flex rounded-full px-2 text-xs leading-5 font-semibold ${colorClass}`}
        >
            {children}
        </span>
    );
};

export default Badge;
