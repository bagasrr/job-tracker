import { ReactNode } from 'react';

const Button = ({
    children,
    onClick,
    href,
    className,
    type = 'button',
}: {
    children: ReactNode;
    onClick?: () => void;
    href?: string;
    className?: string;
    type?: 'button' | 'submit';
}) => {
    const baseClass = 'px-4 py-2 rounded-md transition-colors duration-200';

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
