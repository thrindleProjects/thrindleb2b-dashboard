import React from 'react';

import { IProfileTab } from './type';
import { profileTab } from '../../../utils/productionData';

const ProfileTab: React.FC<IProfileTab> = ({ active, setActive }) => {
  return (
    <div className='my-6 flex h-[50px] w-[40%] flex-row items-center justify-between rounded-md bg-blue-50 px-5'>
      {profileTab.map((item, index) => (
        <button
          onClick={() => setActive(item)}
          key={index}
          className={`flex-center  flex h-[70%] items-center justify-center rounded-md px-5 text-sm text-gray-500 transition-all duration-500 ease-in-out ${
            active === item &&
            'bg-primary-blue font-clash-grotesk font-medium text-white'
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ProfileTab;
