import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {name: 'Jan', TotalTrans: 80, FraudulentTrans: 20},
  {name: 'Feb', TotalTrans: 120, FraudulentTrans: 25},
  {name: 'Mar', TotalTrans: 50, FraudulentTrans: 18},
  {name: 'Apr', TotalTrans: 78, FraudulentTrans: 30},
  // Añade más datos aquí
];

function MonthlyTransactionsChart() {
  return (
    <div>
      <h2>Número de Transacciones Por Mes</h2>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="TotalTrans" stroke="#8884d8" name="Transacciones Totales" />
        <Line type="monotone" dataKey="FraudulentTrans" stroke="#82ca9d" name="Transacciones Fraudulentas" />
      </LineChart>
    </div>
  );
}

export default MonthlyTransactionsChart;
