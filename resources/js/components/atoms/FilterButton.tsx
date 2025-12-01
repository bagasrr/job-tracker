interface FilterButtonProps {
    label: string;
    title: string;
    isActive: boolean; // <--- Props baru: Status ditentukan Parent
    onClick: () => void; // <--- Props baru: Lapor ke Parent kalau diklik
}

const FilterButton = ({
    label,
    title,
    isActive,
    onClick,
}: FilterButtonProps) => {
    return (
        <button
            type="button"
            onClick={onClick} // Jalankan fungsi dari parent
            className={` ${
                isActive
                    ? 'w-14 border-indigo-500 bg-gray-700 text-white ring-2 ring-indigo-500'
                    : 'w-10 border-gray-600 bg-gray-800 text-gray-300'
            } flex h-10 items-center justify-center rounded-full border text-[10px] font-bold whitespace-nowrap shadow-sm transition-all duration-300 ease-in-out hover:border-gray-400 hover:bg-gray-700 hover:text-white`}
            title={title}
        >
            {label}
        </button>
    );
};

export default FilterButton;
