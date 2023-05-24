import { NextPage } from 'next';

import PaddedContainer from '@/components/shared/PaddedContainer/PaddedContainer';

import ProfileLayout from '@/layouts/profile/ProfileLayout';

const Profile: NextPage = () => {
  return (
    <PaddedContainer>
      <ProfileLayout />
    </PaddedContainer>
  );
};

export default Profile;
