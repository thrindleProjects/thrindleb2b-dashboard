import React, { useState } from 'react';

import PasswordForm from '@/components/lib/passwordForm/PasswordForm';
import ProfileForm from '@/components/lib/profileForm/ProfileForm';
import ProfileTab from '@/components/lib/profileTab/ProfileTab';
import ProfileTable from '@/components/pagesComponent/profile/ProfileTable';

import { GENERAL, USERS } from '@/utils/constants';

import { SECURITY } from '../../utils/constants';

const ProfileLayout = () => {
  const [active, setActive] = useState('General');

  return (
    <div>
      <p className='text-[24px] font-[600]'>Profile</p>
      <ProfileTab active={active} setActive={setActive} />
      {active === GENERAL && <ProfileForm />}
      {active === SECURITY && <PasswordForm />}
      {active === USERS && <ProfileTable />}
    </div>
  );
};

export default ProfileLayout;
