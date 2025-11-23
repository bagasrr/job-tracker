import JobTable from '@/components/organism/JobTable';

interface IndexProps {
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

const HomePage = ({ jobs }: IndexProps) => {
    const navbarItems = [
        { title: 'Dashboard', href: '/dashboard', icon: null },
        { title: 'Jobs', href: '/jobs', icon: null },
        { title: 'Reports', href: '/reports', icon: null },
    ];
    console.log('Ini Jobs yang gw apply', jobs);
    const handleDelete = (id: number) => {
        console.log('Hapus job dengan ID:', id);
        // Logika hit API delete di sini
        // axios.delete(`/jobs/${id}`)...
    };
    return (
        <div className="container mx-auto flex flex-col gap-5 py-10">
            {/* <NavMain items={navbarItems} /> */}
            <h1 className="text-xl font-bold">Selamat Datang ...</h1>
            <JobTable jobs={jobs} onDeleteJob={handleDelete} />
        </div>
    );
};

export default HomePage;
