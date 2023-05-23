import { faker } from '@faker-js/faker';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

import { WhiteCard } from '@/components/shared/whiteCard';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Customer Onboarding Stat',
    },
  },
};

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const data = {
  labels,
  datasets: [
    {
      label: ' Jan - Dec',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: '#065DA7',
    },
  ],
};

export function BarChart() {
  return (
    <WhiteCard className='h-full w-[70%] '>
      <Bar options={options} data={data} />
    </WhiteCard>
  );
}
