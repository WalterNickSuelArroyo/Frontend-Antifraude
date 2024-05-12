import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'January', FraudulentTrans: 20 },
  { month: 'February', FraudulentTrans: 25 },
  { month: 'March', FraudulentTrans: 18 },
  { month: 'April', FraudulentTrans: 30 }
];

function FraudulentTransactionsChart() {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <h2>Transacciones Fraudulentas (Últimos 4 Meses)</h2>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="FraudulentTrans" fill="#8884d8" name="Transacciones Fraudulentas" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default FraudulentTransactionsChart;
