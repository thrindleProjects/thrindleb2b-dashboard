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

import { useGetGraphDataQuery } from '@/api/customers';

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
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
  'January',
  'February',
  'March',
  'April',
];

export function BarChart() {
  const { data: graphData } = useGetGraphDataQuery();

  const data = {
    labels,
    datasets: [
      {
        label: 'May 2033 - April 2024',

        data: graphData?.data.monthCount.map((item) => item.count),
        backgroundColor: '#065DA7',
      },
    ],
  };

  return (
    <WhiteCard className='h-[415px] w-[70%] '>
      <Bar options={options} data={data} />
    </WhiteCard>
  );
}
