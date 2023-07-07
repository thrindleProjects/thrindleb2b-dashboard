import axios from 'axios';
import { useCallback } from 'react';
import { toast } from 'react-hot-toast';

import logger from '@/lib/logger';
import useDisclosure from '@/hooks/useDisclosure';

import { useLazyGetOrderByIdQuery } from '@/api/orders';

const useDownloadOrder = ({
  id,
}: {
  id: string;
}): [() => Promise<string | undefined>, { isLoading: boolean }] => {
  const {
    isOpen: isLoading,
    open: setLoadingTrue,
    close: setLoadingFalse,
  } = useDisclosure();

  const [getOrderDetails] = useLazyGetOrderByIdQuery();

  const downloadPDF = useCallback(async () => {
    try {
      setLoadingTrue();
      const order = await getOrderDetails(id, true).unwrap();

      if (!(order && order.data))
        return toast.error('Please refresh your browser');

      const listTotalPrice: number = order.data.listItems.reduce(
        (acc, curr) => {
          const priceOfItem = (curr.price || 0) * (curr.quantity || 0);

          return (acc += priceOfItem);
        },
        0
      );

      const totalAmount =
        listTotalPrice +
        (order.data.deliveryFee || 0) +
        (order.data.serviceCharge || 0);

      const result = await axios.post(
        '/api/getOrderReciept',
        {
          companyName: order.data.company.companyName,
          orderRefCode: order.data.orderRefCode,
          dateCreated: order.data.createdAt,
          listItems: order.data.listItems,
          listTotalPrice,
          deliveryFee: order.data.deliveryFee || '0.0',
          serviceCharge: order.data.serviceCharge || '0.0',
          totalAmount: totalAmount || '0.0',
          paymentDate: order.data.paymentDate,
        },
        { responseType: 'arraybuffer' }
      );

      const date = new Date();
      const month = date.getMonth();

      const year = date.getFullYear();

      const blob = new Blob([result.data]);
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `ThrindleServicesLimited-Invoice-${year}-${month}-${order.data.orderRefCode}-${order.data.company.companyName}.pdf`;
      link.click();
      URL.revokeObjectURL(link.href);
    } catch (error) {
      logger(error);
    } finally {
      setLoadingFalse();
    }
  }, [id, getOrderDetails, setLoadingFalse, setLoadingTrue]);

  return [downloadPDF, { isLoading }];
};

export default useDownloadOrder;
