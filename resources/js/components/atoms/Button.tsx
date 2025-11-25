import { ReactNode } from 'react';

const Button = ({
    children,
    onClick,
    href,
    className = 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',
    type = 'button',
}: {
    children: ReactNode;
    onClick?: () => void;
    href?: string;
    className?: string;
    type?: 'button' | 'submit';
}) => {
    const baseClass =
        'p-2 rounded-md transition-colors duration-200 cursor-pointer';

    if (href) {
        return (
            <a href={href} className={`${baseClass} ${className}`}>
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseClass} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
