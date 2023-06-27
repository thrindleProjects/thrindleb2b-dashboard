import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

import Button from '@/components/buttons/Button';
import AddUserForm from '@/components/lib/addUser/AddUser';
import GenModal from '@/components/shared/modal/Modal';
import Table from '@/components/shared/Table';
import TableBody from '@/components/shared/Table/TableBody';
import TableCell from '@/components/shared/Table/TableCell';
import TableHeader from '@/components/shared/Table/TableHeader';
import TableRow from '@/components/shared/Table/TableRow';
import { WhiteCard } from '@/components/shared/whiteCard';
import Skeleton from '@/components/Skeleton';

import { useDeleteAdminMutation, useGetAllAdminQuery } from '@/api/profile';

const ProfileTable = () => {
  const [addUserModal, setAddUserModal] = useState(false);
  const { data, isLoading } = useGetAllAdminQuery();
  const [deleteAdmin] = useDeleteAdminMutation();

  const deleteAdminHandler = (id: string) => {
    deleteAdmin(id)
      .unwrap()
      .then(() => {
        toast.success('Admin deleted successfully');
      })
      .catch(() => {
        toast.error('An error occurred');
      });
  };

  const toggleModal = () => {
    setAddUserModal((prev) => !prev);
  };

  if (isLoading) {
    return (
      <div>
        <Skeleton className='h-full w-full' />
      </div>
    );
  }
  return (
    <WhiteCard className='mt-6 px-10  py-8'>
      <div className='mb-6 flex items-center justify-between'>
        <h6 className='font-clash-grotesk font-medium text-black/60 lg:text-xs xl:text-sm'>
          Users
        </h6>
        <Button onClick={toggleModal} className='w-[153px]'>
          Add New User
        </Button>
      </div>
      <Table>
        <TableHeader items={['#', 'Name', 'Email Address', 'Role', 'Action']} />
        <TableBody>
          {data &&
            data.data.map((item, index) => (
              <TableRow className='cursor-pointer' key={index}>
                <TableCell>{index + 1}</TableCell>

                <TableCell>
                  {item.firstName} {item.firstName}
                </TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>
                  <div
                    onClick={() => deleteAdminHandler(item.id)}
                    className='flex items-center gap-3 text-black/60'
                  >
                    <div className='flex items-center gap-1'>
                      <Icon
                        icon='clarity:remove-solid'
                        className='text-primary-red text-sm'
                      />
                      <p>Remove</p>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <p className='mt-6 text-right'>Pagination</p>
      <GenModal handleCloseModal={toggleModal} isOpen={addUserModal}>
        <AddUserForm toggleModal={toggleModal} />
      </GenModal>
    </WhiteCard>
  );
};

export default ProfileTable;
