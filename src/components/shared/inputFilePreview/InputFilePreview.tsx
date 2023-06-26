import { Icon } from '@iconify/react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { MdClose } from 'react-icons/md';
import Modal from 'react-modal';

import ImageComponent from '@/components/shared/ImageComponent';

import { IMAGE_BASE_URL } from '@/constant';

type InputFilePreviewProps = React.FC<{
  value: (File | string)[];
  onRemove: (file: File | string) => Promise<boolean>;
}>;

const InputFilePreview: InputFilePreviewProps = ({ value, onRemove }) => {
  const [modalDetails, setModalDetails] = useState<{
    isOpen: boolean;
    image: string;
  }>({
    isOpen: false,
    image: '',
  });

  const handleOpenModal = (image: string) => {
    setModalDetails({ isOpen: true, image });
  };

  const handleCloseModal = () => {
    setModalDetails({ isOpen: false, image: '' });
  };

  return (
    <>
      <div className='flex h-20 w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-2'>
        {value.map((file, index) => {
          const isFile = file instanceof File;
          const isImage = isFile && file.type.startsWith('image/');

          return (
            <div
              key={isFile ? file.name : `${file}${index}`}
              className={`relative h-full w-full ${
                value.length >= 2 ? 'max-w-[50%]' : ''
              } flex-shrink-0 snap-start`}
            >
              {isImage ? (
                <ImageComponent
                  alt={file.name}
                  src={URL.createObjectURL(file)}
                />
              ) : (
                <ImageComponent
                  alt='Product Image'
                  src={`${IMAGE_BASE_URL}/${file}`}
                />
              )}
              <button
                className='absolute right-2 top-2'
                type='button'
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();

                  if (file instanceof File) {
                    return onRemove(file);
                  }
                  if (value.length === 1) {
                    return toast.error(
                      'Please upload at least one image before deleting this image'
                    );
                  }
                  handleOpenModal(file);
                }}
              >
                <MdClose />
              </button>
            </div>
          );
        })}
      </div>

      <Modal
        isOpen={modalDetails.isOpen}
        shouldCloseOnEsc
        onRequestClose={handleCloseModal}
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
        className='h-max w-[90%] flex-shrink-0 rounded-md bg-white drop-shadow-2xl md:h-max lg:w-[500px]'
      >
        <section className='relative flex flex-col gap-4 p-8 text-center'>
          <button className='ml-auto block' onClick={handleCloseModal}>
            <Icon
              icon='material-symbols:close-rounded'
              className='cursor-pointer text-xl'
            />
          </button>
          <h5 className='text-lg font-semibold'>
            Are you sure you want to delete this image?
          </h5>
          <div className='relative mx-auto aspect-square w-1/2'>
            <ImageComponent
              alt='Product Image'
              src={`${IMAGE_BASE_URL}/${modalDetails.image}`}
            />
          </div>
          <p className='text-primary-yellow font-medium'>
            <span className='text-primary-black'>Note:</span> This action is
            irreversible
          </p>
          <div className='flex items-center justify-center gap-3'>
            <button
              onClick={handleCloseModal}
              className='border-primary-blue text-primary-blue focus:ring-primary-blue focus:bg-primary-blue rounded-lg border px-5 py-3 focus:text-white focus:outline-none focus:ring-2'
            >
              Cancel
            </button>
            <button
              onClick={async (e) => {
                e.preventDefault();
                e.stopPropagation();

                const isSuccessful = await onRemove(modalDetails.image);

                if (isSuccessful) {
                  handleCloseModal();
                }
              }}
              className='border-primary-red bg-primary-red focus:ring-primary-red/60 focus:bg-primary-red rounded-lg border px-5 py-3 text-white focus:text-white focus:outline-none focus:ring-2'
            >
              Delete
            </button>
          </div>
        </section>
      </Modal>
    </>
  );
};

export default InputFilePreview;
