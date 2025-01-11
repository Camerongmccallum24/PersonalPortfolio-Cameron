
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export default function AnalyticsDashboard() {
  const analyticsData = [
    { month: 'Jan', engagement: 65, satisfaction: 75, retention: 80 },
    { month: 'Feb', engagement: 70, satisfaction: 78, retention: 82 },
    { month: 'Mar', engagement: 75, satisfaction: 82, retention: 85 },
    { month: 'Apr', engagement: 80, satisfaction: 85, retention: 88 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 bg-card rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6">Customer Success Analytics</h2>
      <div className="w-full overflow-x-auto">
        <LineChart width={800} height={400} data={analyticsData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="engagement" stroke="#8884d8" />
          <Line type="monotone" dataKey="satisfaction" stroke="#82ca9d" />
          <Line type="monotone" dataKey="retention" stroke="#ffc658" />
        </LineChart>
      </div>
    </motion.div>
  );
}
