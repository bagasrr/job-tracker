import DateFilter from '@/components/organism/DateFilter';
import JobStatsChart from '@/components/organism/JobStatsChart';
import JobTable from '@/components/organism/JobTable';

interface IndexProps {
    // 1. Tambahkan definisi tipe data untuk filters disini
    filters: {
        search: string;
    };
    jobs: {
        companyName: string;
        position: string;
        description: string;
        applicationPlatform: string;
        applicationDate: string;
        status: string;
        id_jobs: number;
        notes: string;
        created_at: Date;
        updated_at: Date;
        statusUpdateDate: Date | null;
        deleted_at: Date | null;
        user_id: number;
    };
    stats: {
        Applied: number;
        Interview: number;
        Offered: number;
        Rejected: number;
        Ghosted: number;
        Hired: number;
        SkillTest: number;
    };
}

// 2. Tangkap 'filters' di dalam parameter fungsi (destructuring)
const HomePage = ({ jobs, filters, stats }: IndexProps) => {
    // Cek di console apakah filters masuk
    // console.log('Jobs Gwh :', jobs);
    // console.log('Filters dari Laravel:', filters);
    // console.info('Stats dari Laravel:', stats);

    const handleDelete = (id: number) => {
        console.log('Hapus job dengan ID:', id);
        // Logika hit API delete di sini
    };

    return (
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-10 sm:px-6 lg:px-8">
            {/* <NavMain items={navbarItems} /> */}
            <h1 className="text-xl font-bold">Selamat Datang ...</h1>

            {/* BAGIAN CHART */}
            <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Chart ditaruh disini */}
                <JobStatsChart data={stats} />

                {/* Kamu bisa tambah widget lain disebelahnya, misal: Target Bulanan */}
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <div className="flex flex-col items-center gap-5 md:flex-row">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                            Total Lamaran
                        </h3>
                        <DateFilter />
                    </div>

                    <p className="mx-auto mt-4 text-3xl font-semibold text-slate-200">
                        {stats.Applied +
                            stats.Interview +
                            stats.Offered +
                            stats.Rejected +
                            stats.Ghosted +
                            stats.Hired +
                            stats.SkillTest}
                    </p>
                </div>
            </div>

            {/* 3. Sekarang 'filters' sudah ada isinya, aman untuk dikirim ke anak */}
            <JobTable
                jobs={jobs.data}
                onDeleteJob={handleDelete}
                filters={filters}
            />
        </div>
    );
};

export default HomePage;
