import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const TimeSeriesGraph = () => {
  const [data, setData] = useState([]);
  const [period, setPeriod] = useState('daily');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api/revenue', { params: { period } });
      setData(response.data);
    };
    fetchData();
  }, [period]);

  return (
    <div>
      <select value={period} onChange={(e) => setPeriod(e.target.value)}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TimeSeriesGraph;