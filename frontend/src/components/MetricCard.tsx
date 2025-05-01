import React from 'react';

interface MetricCardProps {
  title: string;
  value: string | number;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default MetricCard;