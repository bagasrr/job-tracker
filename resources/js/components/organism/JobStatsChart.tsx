import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

interface Props {
    data: {
        Applied: number;
        Interview: number;
        Offered: number;
        Rejected: number;
        Ghosted: number;
        Hired: number;
        SkillTest: number;
    };
}
const JobStatsChart = ({ data }: Props) => {
    const chartData = [
        { name: 'Applied', value: data.Applied, color: '#6366F1' },
        { name: 'Skill Test', value: data.SkillTest, color: '#F87171' },
        { name: 'Interview', value: data.Interview, color: '#10B981' },
        { name: 'Offered', value: data.Offered, color: '#F59E0B' },
        { name: 'Rejected', value: data.Rejected, color: '#EF4444' },
        { name: 'Ghosted', value: data.Ghosted, color: '#3B82F6' },
        { name: 'Hired', value: data.Hired, color: '#22C55E' },
    ];
    return (
        <div className="h-64 w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
                Statistik Lamaran
            </h3>

            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                    <XAxis
                        dataKey="name"
                        tick={{ fill: '#6b7280', fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        tick={{ fill: '#6b7280', fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                        allowDecimals={false} // Agar tidak ada angka koma (1.5 orang)
                    />
                    <Tooltip
                        contentStyle={{
                            borderRadius: '8px',
                            border: 'none',
                            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                        }}
                        cursor={{ fill: 'transparent' }}
                    />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default JobStatsChart;
