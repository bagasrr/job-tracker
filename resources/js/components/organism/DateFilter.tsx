import { router } from '@inertiajs/react';
import { memo, useState } from 'react';
import FilterButton from '../atoms/FilterButton';

const DateFilter = ({
    filters,
}: {
    filters?: { search?: string; range?: string };
}) => {
    const [activeFilter, setActiveFilter] = useState('All');
    const handleFilterChange = (value: string) => {
        setActiveFilter(value);
        console.log('Filter berubah ke:', value);

        router.get(
            '/',
            {
                search: filters?.search,
                range: value,
            },
            {
                preserveState: true, // Biar state komponen lain gak hilang
                preserveScroll: true, // Biar scroll gak loncat ke atas
                replace: true, // Biar gak menuhin history browser
                only: ['jobs', 'stats', 'filters'], // Partial reload biar ringan
            },
        );
    };

    return (
        <div className="flex gap-2">
            {/* TOMBOL 1: 7 Hari */}
            <FilterButton
                label="7D"
                title="7 Hari Terakhir"
                // Cek: Apakah aku yang dipilih?
                isActive={activeFilter === '7D'}
                // Kalau diklik, set activeFilter jadi '7D'
                onClick={() => handleFilterChange('7D')}
            />

            {/* TOMBOL 2: 30 Hari */}
            <FilterButton
                label="30D"
                title="30 Hari Terakhir"
                isActive={activeFilter === '30D'}
                onClick={() => handleFilterChange('30D')}
            />

            {/* TOMBOL 3: 6 Bulan */}
            <FilterButton
                label="6M"
                title="6 Bulan Terakhir"
                isActive={activeFilter === '6M'}
                onClick={() => handleFilterChange('6M')}
            />

            {/* TOMBOL 4: 1 Tahun */}
            <FilterButton
                label="1Y"
                title="1 Tahun Terakhir"
                isActive={activeFilter === '1Y'}
                onClick={() => handleFilterChange('1Y')}
            />
            <FilterButton
                label="All"
                title="All Time"
                isActive={activeFilter === 'All'}
                onClick={() => handleFilterChange('All')}
            />
        </div>
    );
};

export default memo(DateFilter);
