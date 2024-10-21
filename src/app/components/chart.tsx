import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';

const data = [
  { subject: 'Communication', A: 120, B: 110, fullMark: 150 },
  { subject: 'Teamwork', A: 98, B: 130, fullMark: 150 },
  { subject: 'Problem Solving', A: 86, B: 130, fullMark: 150 },
  { subject: 'Leadership', A: 99, B: 100, fullMark: 150 },
  { subject: 'Technical Skills', A: 85, B: 90, fullMark: 150 },
  { subject: 'Productivity', A: 65, B: 85, fullMark: 150 },
];

export default function EvaluationChart() {
  return (
    <RadarChart outerRadius={90} width={730} height={250} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar name="Employee" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <Radar name="Peer Average" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
      <Legend />
    </RadarChart>
  );
}