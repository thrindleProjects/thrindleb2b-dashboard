import { Icon } from '@iconify/react';
import { toast } from 'react-hot-toast';
import { ImSpinner2 } from 'react-icons/im';

import clsxm from '@/lib/clsxm';
import logger from '@/lib/logger';
import { useDisclosure } from '@/hooks';

import SingleOrderEditSuggestedItemModal from '@/components/lib/singleOrderEditSuggestedItemModal';
import ImageComponent from '@/components/shared/ImageComponent/ImageComponent';

import { useDeleteSubstituteMutation } from '@/api/orders';
import { SubstituteItemType } from '@/api/orders/types';
import { IMAGE_BASE_URL } from '@/constant';

type SingleOrderSuggestedItemProps = SubstituteItemType;

type SingleOrderSuggestedItemType = React.FC<SingleOrderSuggestedItemProps>;

const SingleOrderSuggestedItem: SingleOrderSuggestedItemType = (props) => {
  const { id, name, images, description, price } = props;

  const { toggle, isOpen: seeMore } = useDisclosure();

  const {
    isOpen: isEditModalOpen,
    close: closeEditModal,
    open: openEditModal,
  } = useDisclosure();

  const [deleteItem, { isLoading }] = useDeleteSubstituteMutation();

  const handleDelete = async () => {
    try {
      await deleteItem(id).unwrap();
      toast.success('Substitute deleted successfully');
    } catch (error) {
      logger(error);
    }
  };

  return (
    <div
      key={id}
      className='border-primary-black/10 grid grid-cols-[30%_1fr_auto] grid-rows-1 gap-2 rounded-lg border p-4'
    >
      <div className='bg-primary-black/10 relative aspect-square w-full'>
        <ImageComponent alt={name} src={`${IMAGE_BASE_URL}/${images[0]}`} />
      </div>
      <section className='flex flex-col justify-between gap-2'>
        <h6 className='text-primary/60 text-sm font-semibold xl:text-base'>
          {name}
        </h6>
        <p className='text-primary-black/60 text-xs font-medium xl:text-sm'>
          {seeMore || description.length < 100
            ? description
            : `${description.substring(0, 100)}...`}{' '}
          {description.length > 150 && (
            <button
              className={clsxm(
                'text-primary-blue px-1 text-[0.85em] font-bold',
                [seeMore && 'block']
              )}
              onClick={toggle}
              type='button'
            >
              {seeMore ? 'See less' : 'See more'}
            </button>
          )}
        </p>
        <p className='text-primary/60 text-sm font-semibold xl:text-base'>
          &#8358;{price?.toLocaleString()}
        </p>
      </section>
      <div className='flex h-full flex-col items-center gap-8'>
        <button
          className='text-primary-red h-max text-lg'
          type='button'
          onClick={handleDelete}
        >
          {isLoading ? (
            <ImSpinner2 className='animate-spin' />
          ) : (
            <Icon icon='ph:x' />
          )}
        </button>

        <button
          className='text-primary-blue text-base font-medium xl:text-lg'
          onClick={openEditModal}
        >
          <Icon icon='ph:pencil' />
        </button>
      </div>

      <SingleOrderEditSuggestedItemModal
        {...props}
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
      />
    </div>
  );
};

export default SingleOrderSuggestedItem;
