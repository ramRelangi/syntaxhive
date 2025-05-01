import React from 'react';
import MetricCard from '../components/MetricCard';
import ReportGenerator from '../components/ReportGenerator';

const Dashboard: React.FC = () => {
  const totalEmployees = Math.floor(Math.random() * 100);
  const activeEmployees = Math.floor(Math.random() * totalEmployees);
  const inactiveEmployees = totalEmployees - activeEmployees;

  return (
    <div>
      <h2>Dashboard</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <MetricCard
          title="Total Employees"
          value={totalEmployees}
        />
        <MetricCard title="Active Employees" value={activeEmployees} />
        <MetricCard
          title="Inactive Employees"
          value={inactiveEmployees}
        />
      </div>
      <ReportGenerator />
    </div>
  );
};

export default Dashboard;