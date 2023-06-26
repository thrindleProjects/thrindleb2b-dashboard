import { Icon } from '@iconify/react';
import Modal from 'react-modal';

import Button from '@/components/buttons/Button';
import SingleOrderSuggestedItemForm from '@/components/lib/singleOrderSuggestedItemForm';
import SingleOrderSuggestedItemList from '@/components/lib/singleOrderSuggestedItemList';

interface SingleOrderSuggestedItemMoalProps {
  isOpen: boolean;
  close: () => void;
}

type SingleOrderSuggestedItemModalType =
  React.FC<SingleOrderSuggestedItemMoalProps>;

const SingleOrderSuggestedItemModal: SingleOrderSuggestedItemModalType = ({
  isOpen,
  close,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={close}
      shouldCloseOnEsc
      style={{
        overlay: {
          backgroundColor: '#00000020',
          zIndex: 100,
          display: 'grid',
          placeItems: 'center',
          overflowY: 'auto',
          overflowX: 'hidden',
        },
        content: {
          outline: 'none',
        },
      }}
      shouldCloseOnOverlayClick={true}
      shouldReturnFocusAfterClose={true}
      ariaHideApp={false}
      className='no-scrollbar h-[calc(100vh-2rem)] max-h-[70rem] min-h-[20rem] w-11/12 resize-y overflow-hidden rounded-lg bg-white xl:w-10/12 2xl:max-w-7xl'
    >
      <div className='grid h-full grid-rows-[auto_1fr] gap-8 pb-8'>
        <div className='flex items-center justify-between px-8 pt-8'>
          <div className='text-primary-black flex items-center gap-2 text-sm font-semibold xl:text-base'>
            <button
              type='button'
              className='text-xl xl:text-2xl'
              onClick={close}
            >
              <Icon icon='ph:arrow-left' />
            </button>
            <span>Suggested Options</span>
          </div>
          <Button type='button' className='px-6 font-semibold' onClick={close}>
            Complete
          </Button>
        </div>
        <div className='grid h-full grid-cols-2 overflow-hidden px-8'>
          <div className='bg-primary-grey no-scrollbar h-full w-full overflow-y-auto px-4 py-5'>
            <p className='text-primary-black mb-5 text-base font-medium xl:text-lg'>
              Add Suggested Options
            </p>
            <SingleOrderSuggestedItemForm />
          </div>
          <div className='no-scrollbar h-full w-full overflow-y-auto pl-10'>
            <SingleOrderSuggestedItemList />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SingleOrderSuggestedItemModal;
