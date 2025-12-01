import { memo } from 'react';
import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    LabelList,
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
        { name: 'SkillTest', value: data.SkillTest, color: '#F87171' },
        { name: 'Interview', value: data.Interview, color: '#10B981' },
        { name: 'Offered', value: data.Offered, color: '#F59E0B' },
        { name: 'Rejected', value: data.Rejected, color: '#EF4444' },
        { name: 'Ghosted', value: data.Ghosted, color: '#3B82F6' },
        { name: 'Hired', value: data.Hired, color: '#22C55E' },
    ];
    return (
        <div className="h-64 w-full rounded-lg border border-gray-200 bg-white py-4 shadow-sm md:p-4 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-4 text-center text-lg font-semibold text-gray-800 md:text-left dark:text-white">
                Statistik Lamaran
            </h3>

            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={chartData}
                    margin={{
                        top: 20,
                        left: -25,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                    <XAxis
                        dataKey="name"
                        tick={false}
                        // tick={{ fill: '#FFFFFF', fontSize: 12 }}
                        // angle={-45}
                        // textAnchor="end"
                        // dy={0}
                        // height={60}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        tick={{ fill: '#6b7280', fontSize: 10 }}
                        axisLine={true}
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
                        <LabelList
                            dataKey="name"
                            position="insideBottom" // Posisi di dasar batang
                            angle={-90} // Putar vertikal biar muat
                            fill="#FFFFFF" // Warna text PUTIH biar kontras
                            style={{ fontWeight: 'bold', fontSize: '10px' }}
                            offset={50} // Jarak dari bawah
                        />
                        <LabelList
                            dataKey="value"
                            position="top"
                            fill="#FFFFFF"
                            fontSize={10}
                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default memo(JobStatsChart);
