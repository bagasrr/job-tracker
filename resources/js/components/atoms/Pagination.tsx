import { Link } from '@inertiajs/react';

interface PaginationProps {
    links: {
        active: boolean;
        label: string;
        url: string | null;
    }[];
}

export default function Pagination({ links }: PaginationProps) {
    if (links.length === 3) return null;

    return (
        <div className="flex flex-wrap justify-center gap-1 py-6">
            {links.map((link, key) => {
                // 1. Cek apakah ini tombol Prev/Next? (Laravel pake simbol HTML entity)
                const isPrevOrNext =
                    link.label.includes('&laquo;') ||
                    link.label.includes('&raquo;') ||
                    link.label.includes('Previous') ||
                    link.label.includes('Next');

                // const space = link.label.includes('...');

                // 2. Logic Responsive:
                // Kalau bukan Prev/Next DAN bukan halaman aktif -> Sembunyikan di Mobile (hidden), Munculkan di Desktop (md:inline-flex)
                // Kalau halaman aktif atau Prev/Next -> Selalu muncul (inline-flex)

                // Di Component Pagination.tsx
                // const firstPage = links.at(1);
                // const lastPage = links.at(-2);
                // const isFirstOrLastPage =
                //     link === firstPage || link === lastPage;

                const responsiveClass =
                    !link.active && !isPrevOrNext
                        ? // &&
                          // !isFirstOrLastPage &&
                          // !space
                          'hidden md:inline-flex'
                        : 'inline-flex';

                return link.url === null ? (
                    <div
                        key={key}
                        className={`items-center rounded border px-4 py-2 text-sm text-gray-400 ${responsiveClass}`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ) : (
                    <Link
                        key={key}
                        className={`items-center rounded border px-4 py-2 text-sm hover:bg-white focus:text-indigo-500 ${
                            link.active
                                ? 'border-indigo-600 bg-indigo-600 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-50'
                        } ${responsiveClass}`} // <--- Pasang Class Responsive Disini
                        href={link.url}
                        preserveScroll
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                );
            })}
        </div>
    );
}
