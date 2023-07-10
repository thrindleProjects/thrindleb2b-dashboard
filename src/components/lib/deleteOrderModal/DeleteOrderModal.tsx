import Image from 'next/image';
import { toast } from 'react-hot-toast';
import { ImSpinner2 } from 'react-icons/im';
import Modal from 'react-modal';

import logger from '@/lib/logger';

import { GeneralOrderStatus } from '@/@types';
import { useDeleteOrderMutation } from '@/api/orders';

interface DeleteOrderModalProps {
  isOpen: boolean;
  close: () => void;
  id: string;
  refCode: string;
  status: Exclude<GeneralOrderStatus, 'all'>;
}

type DeleteOrderModalType = React.FC<DeleteOrderModalProps>;

const DeleteOrderModal: DeleteOrderModalType = ({
  isOpen,
  close,
  refCode,
  id,
  status,
}) => {
  const [deleteOrder, { isLoading }] = useDeleteOrderMutation();

  const handleDeleteOrder = async () => {
    try {
      await deleteOrder(id).unwrap();
      toast.success('Order deleted successfully');
      close();
    } catch (error) {
      logger(error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={close}
      shouldCloseOnEsc
      style={{
        overlay: {
          backgroundColor: '#00000020',
          zIndex: 100,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'auto',
        },
        content: {
          outline: 'none',
        },
      }}
      shouldCloseOnOverlayClick={true}
      shouldReturnFocusAfterClose={true}
      ariaHideApp={false}
      className='w-11/12 max-w-md overflow-y-auto rounded-lg bg-white px-6 py-10 outline-none'
    >
      <section className='flex flex-col items-center gap-2 text-center'>
        <div className='blue_linear_gradient mx-auto aspect-[6/5] w-3/6 max-w-[5rem] rounded-full'>
          <figure className='relative h-full w-full'>
            <Image
              fill={true}
              src='/assets/svg/red_question_mark.svg'
              alt='Logout'
            />
          </figure>
        </div>
        <h4 className='text-primary-black text-2xl font-semibold'>
          Are you sure you want to delete this{' '}
          <strong className='capitalize'>{status.split('-').join(' ')}</strong>{' '}
          order?
        </h4>

        <p className='text-primary-black/80 text-lg font-medium'>{refCode}</p>

        <p className='text-primary-black/80 text-sm font-medium'>
          Once deleted you won't be able to retrieve order details again and the
          client would be required to create a new recurrent order
        </p>

        <div className='mt-4 grid w-full grid-cols-2 gap-4'>
          <button className='bg-primary-grey/95 border-primary-grey/95 text-primary-black rounded-lg border px-4 py-3 text-base font-semibold'>
            No - Go back
          </button>
          <button
            onClick={handleDeleteOrder}
            className='bg-primary-blue border-primary-blue rounded-lg border px-4 py-3 text-base font-semibold text-white'
          >
            {isLoading ? (
              <ImSpinner2 className='mx-auto animate-spin' />
            ) : (
              'Yes - Delete order'
            )}
          </button>
        </div>
      </section>
    </Modal>
  );
};

export default DeleteOrderModal;
