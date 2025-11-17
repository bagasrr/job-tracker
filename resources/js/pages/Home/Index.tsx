applicationDate: '2025-11-08';
applicationPlatform: 'MagangHub Kemnaker';
companyName: 'PT United Tractors Pandu Engineering Tbk (PATRIA)';
created_at: '2025-11-15T11:12:38.000000Z';
deleted_at: null;
id_jobs: 10;
notes: 'Baru kirim ulang CV kemaren tanggal 13';
position: 'Fullstack Dev Intern';
status: 'Applied';
statusUpdateDate: null;
updated_at: '2025-11-15T11:15:05.000000Z';
user_id: 1;
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

const Index = ({ jobs }: IndexProps) => {
    console.log('Ini Jobs yang gw apply', jobs);
    return (
        <div>
            <h1>Job Yang gw apply</h1>
            <ul>
                {jobs.map((job) => (
                    <li key={job.id_jobs} className="mb-4 text-white">
                        <h2>{job.companyName}</h2>

                        <p>Position: {job.position}</p>
                        <p>Description: {job.description}</p>
                        <p>Platform: {job.applicationPlatform}</p>
                        <p>Application Date: {job.applicationDate}</p>
                        <p>Status: {job.status}</p>
                        <p>Notes: {job.notes}</p>
                        <p>
                            Created At:{' '}
                            {new Date(job.created_at).toLocaleDateString()}
                        </p>
                        <p>
                            Updated At:{' '}
                            {new Date(job.updated_at).toLocaleDateString()}
                        </p>
                        {job.statusUpdateDate && (
                            <p>
                                Status Update Date:{' '}
                                {new Date(
                                    job.statusUpdateDate,
                                ).toLocaleDateString()}
                            </p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Index;
