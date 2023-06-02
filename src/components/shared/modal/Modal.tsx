import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import Modal from 'react-modal';

import { ModalProps } from '@/components/shared/modal/type';

const GenModal: React.FC<ModalProps> = ({
  handleCloseModal,
  isOpen,
  children,
  hideCloseIcon,
  className,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      shouldCloseOnEsc
      style={{
        overlay: {
          backgroundColor: '#00000020',
          zIndex: 100,

          overflow: 'auto',
        },
        content: {
          outline: 'none',
        },
      }}
      shouldCloseOnOverlayClick={true}
      shouldReturnFocusAfterClose={true}
      ariaHideApp={false}
      className={`ml-auto  h-max flex-shrink-0 bg-transparent  drop-shadow-2xl md:h-max lg:w-[485px] ${className}`}
    >
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: '100vw' }}
        exit={{ x: '100vw' }}
        transition={{
          duration: 1,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
        className='ml-auto  h-screen overflow-y-auto bg-white px-10 py-10'
      >
        {!hideCloseIcon && (
          <div className='flex w-full flex-row justify-end'>
            <button onClick={handleCloseModal}>
              <FaTimes className='text-xl text-gray-800' />
            </button>
          </div>
        )}

        {children}
      </motion.div>
    </Modal>
  );
};

export default GenModal;
