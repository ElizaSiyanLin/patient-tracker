
import React from 'react';
import { Bar } from 'react-chartjs-2';
import patientData from '../../data/patient_age_data.json';

import {
  BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title,
  Tooltip
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Summary() {

  const getAgeDistribution = (patients) => {
    const ageDistribution = {};
    patients.forEach((patient) => {
      const age = patient.age;
      ageDistribution[age] = (ageDistribution[age] || 0) + 1;
    });
    return ageDistribution;
  };

 
  const ageDistribution = getAgeDistribution(patientData);


  const data = {
    labels: Object.keys(ageDistribution).sort((a, b) => a - b),
    datasets: [
      {
        label: 'Age Distribution',
        data: Object.values(ageDistribution),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div>
      <h2>Age Distribution of Patients</h2>
      <div style={{ width: '100%', height: '400px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default Summary;
