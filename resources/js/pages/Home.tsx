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
    }[];
}

// 2. Tangkap 'filters' di dalam parameter fungsi (destructuring)
const HomePage = ({ jobs, filters }: IndexProps) => {
    const navbarItems = [
        { title: 'Dashboard', href: '/dashboard', icon: null },
        { title: 'Jobs', href: '/jobs', icon: null },
        { title: 'Reports', href: '/reports', icon: null },
    ];

    // Cek di console apakah filters masuk
    console.log('Jobs Gwh :', jobs);
    console.log('Filters dari Laravel:', filters);

    const handleDelete = (id: number) => {
        console.log('Hapus job dengan ID:', id);
        // Logika hit API delete di sini
    };

    return (
        <div className="container mx-auto flex flex-col gap-5 py-10">
            {/* <NavMain items={navbarItems} /> */}
            <h1 className="text-xl font-bold">Selamat Datang ...</h1>

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
