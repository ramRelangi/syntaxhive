import React, { useState } from 'react';

const ReportGenerator: React.FC = () => {
  const [reportType, setReportType] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Selected report type:', reportType);
  };

  return (
    <div>
      <h2>Report Generator</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="reportType">Report Type:</label>
          <select
            id="reportType"
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            required
          >
            <option value="">Select a report type</option>
            <option value="Employee List">Employee List</option>
            <option value="Active Employees">Active Employees</option>
            <option value="Inactive Employees">Inactive Employees</option>
          </select>
        </div>
        <button type="submit">Generate Report</button>
      </form>
    </div>
  );
};

export default ReportGenerator;
