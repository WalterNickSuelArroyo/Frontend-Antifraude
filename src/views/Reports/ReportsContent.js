import React from 'react';
import FraudulentTransactionsChart from './FraudulentTransactionsChart';
import MonthlyTransactionsChart from './MonthlyTransactionsChart';
import './ReportsContent.css';

function ReportsContent() {
  return (
    <div className="reports-content">
      <FraudulentTransactionsChart />
      <MonthlyTransactionsChart />
    </div>
  );
}

export default ReportsContent;
