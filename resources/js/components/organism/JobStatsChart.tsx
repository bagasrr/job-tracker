import { memo } from 'react';
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

const CustomBar = (props: any) => {
    const { fill, x, y, width, height, name, value } = props;

    // Tentukan batas minimal tinggi agar text muat di dalam
    const MIN_HEIGHT_FOR_TEXT = 50;

    // Cek: Apakah batang ini cukup tinggi?
    const isTall = height >= MIN_HEIGHT_FOR_TEXT;

    return (
        <g>
            {/* 1. Batang Original (Tanpa manipulasi tinggi palsu) */}
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                fill={fill}
                rx={4}
                ry={4}
            />

            {/* 2. Logika Text Label (Nama Status) */}
            <text
                // Jika Tinggi: Taruh di dalam (bawah batang)
                // Jika Pendek: Taruh di atas batang
                x={x + width / 2}
                y={isTall ? y + height - 10 : y - 10}
                // Jika Tinggi: Putih, Jika Pendek: Abu-abu (biar kebaca di background gelap)
                fill={isTall ? '#fff' : '#9ca3af'}
                textAnchor={isTall ? 'start' : 'start'}
                dominantBaseline="middle"
                style={{
                    fontSize: '10px',
                    fontWeight: 'bold',
                }}
                // Rotasi tetap -90 derajat
                transform={`rotate(-90, ${x + width / 2}, ${isTall ? y + height - 10 : y - 10})`}
            >
                {name}
            </text>

            {/* 3. Logika Angka Value */}
            {/* Kalau batang pendek, angkanya kita geser lebih ke atas lagi biar gak numpuk sama text label */}
            <text
                x={x + width / 2}
                y={isTall ? y - 5 : y - name.length * 6 - 15} // Kalkulasi kasar panjang text biar gak numpuk
                fill="#6b7280"
                textAnchor="middle"
                style={{ fontSize: '10px' }}
            >
                {value}
            </text>
        </g>
    );
};

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
                        tickMargin={16}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        tick={{ fill: '#6b7280', fontSize: 10 }}
                        axisLine={true}
                        tickLine={false}
                        allowDecimals={false} // Agar tidak ada angka koma (1.5 orang)
                        domain={[0, 'dataMax']} // Beri jarak atas 2 unit
                    />
                    <Tooltip
                        contentStyle={{
                            borderRadius: '8px',
                            border: 'none',
                            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                        }}
                        cursor={{ fill: 'transparent' }}
                    />
                    <Bar
                        dataKey="value"
                        radius={[4, 4, 0, 0]}
                        shape={<CustomBar />}
                    >
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                        {/* <LabelList
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
                        /> */}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default memo(JobStatsChart);
