import React from 'react';

import { orderStatus } from '@/@types';

const SingleStatusTab = ({
  status,
  slug,
  activeTab,
  changeTab,
}: {
  status: string;
  slug: string;
  activeTab: orderStatus;
  changeTab: () => void;
}) => {
  return (
    <button
      onClick={changeTab}
      className={`flex-center  flex h-[70%] items-center justify-center rounded-md px-2  text-gray-500 transition-all duration-500 ease-in-out md:text-xs xl:text-sm ${
        activeTab === slug &&
        'bg-primary-blue font-clash-grotesk font-medium text-white'
      }`}
    >
      {status}
    </button>
  );
};

export default SingleStatusTab;
