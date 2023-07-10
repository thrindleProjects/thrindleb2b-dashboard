import { Icon } from '@iconify/react';
import { Menu, MenuButton, MenuDivider, MenuItem } from '@szhsin/react-menu';
import { useMemo } from 'react';
import { ImSpinner2 } from 'react-icons/im';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import { useDisclosure, useDownloadOrder } from '@/hooks';

import CancelOrderModal from '@/components/lib/cancelOrderModal';
import DeleteOrderModal from '@/components/lib/deleteOrderModal';

import { OrdersType, SingleOrder } from '@/api/orders/types';

type OrderTableMenuProps = OrdersType | SingleOrder;

type OrderTableRowMenuType = React.FC<OrderTableMenuProps>;

const OrderTableRowMenu: OrderTableRowMenuType = ({ ...order }) => {
  const {
    isOpen: isCancelOrderModalOpen,
    open: openCancelOrderModal,
    close: closeCancelOrderModal,
  } = useDisclosure();

  const {
    isOpen: isDeleteOrderModalOpen,
    open: openDeleteOrderModal,
    close: closeDeleteOrderModal,
  } = useDisclosure();

  // const [downloadPdf] = useLazyDownloadOrderInvoiceQuery();
  const [downloadPdf, { isLoading: isDownloadingPdf }] = useDownloadOrder({
    id: order.id,
  });

  const {
    isCancellable,
    isDeletable,
    isDownloadable,
  }: {
    isCancellable: boolean;
    isDeletable: boolean;
    isDownloadable: boolean;
  } = useMemo(() => {
    return {
      isCancellable:
        order.orderStatus === 'requested' ||
        order.orderStatus === 'in-progress',
      isDeletable:
        order.orderStatus === 'requested' ||
        order.orderStatus === 'in-progress',
      isDownloadable:
        order.orderStatus === 'completed' ||
        order.orderStatus === 'in-progress' ||
        order.orderStatus === 'owing' ||
        order.orderStatus === 'pending',
    };
  }, [order.orderStatus]);

  if (!isCancellable && !isDeletable && !isDownloadable) {
    return <></>;
  }

  return (
    <>
      <Menu
        menuButton={
          <MenuButton disabled={isDownloadingPdf}>
            {isDownloadingPdf && (
              <ImSpinner2 className='animate-spin text-2xl' />
            )}
            {!isDownloadingPdf && (
              <Icon
                icon='ph:dots-three-outline-vertical-fill'
                className='text-2xl'
              />
            )}
          </MenuButton>
        }
        transition
        gap={10}
        align='end'
        role='tooltip'
        viewScroll='auto'
        className='font-medium'
      >
        {isDownloadable && (
          <MenuItem className='text-primary-blue' onClick={downloadPdf}>
            <span>
              <Icon icon='ph:cloud-arrow-down' className='text-2xl' />
            </span>
            &nbsp;<span>Download Order Details</span>
          </MenuItem>
        )}
        {isDownloadable && (isCancellable || isDeletable) && <MenuDivider />}

        {isCancellable && (
          <MenuItem onClick={openCancelOrderModal}>
            <span className='text-primary-red'>
              <Icon icon='ph:calendar-x' className='text-2xl' />
            </span>
            &nbsp;<span>Cancel Order</span>
          </MenuItem>
        )}
        {isDeletable && (
          <MenuItem onClick={openDeleteOrderModal}>
            <span className='text-primary-red'>
              <Icon icon='ph:trash' className='text-2xl' />
            </span>
            &nbsp;<span>Delete Order</span>
          </MenuItem>
        )}
      </Menu>

      <CancelOrderModal
        isOpen={isCancelOrderModalOpen}
        close={closeCancelOrderModal}
        id={order.id}
        refCode={order.orderRefCode}
        status={order.orderStatus}
      />

      <DeleteOrderModal
        isOpen={isDeleteOrderModalOpen}
        close={closeDeleteOrderModal}
        id={order.id}
        status={order.orderStatus}
        refCode={order.orderRefCode}
      />
    </>
  );
};

export default OrderTableRowMenu;
