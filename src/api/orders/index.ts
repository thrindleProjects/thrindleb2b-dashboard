import { globalApi } from '@/api/globalApi';
import type {
  GetOrdersResponse,
  OrdersType,
  RecurrentOrderType,
} from '@/api/orders/types';
import {
  GET_METHOD,
  GET_ORDERS_BASE_PATH,
  GET_RECURRENT_ORDERS_PATH,
  ORDERS_PER_PAGE,
} from '@/constant';
import { INetworkSuccessResponse } from '@/utils/appTypes';
const OrdersApi = globalApi.injectEndpoints({
  endpoints: (build) => ({
    getOrders: build.query<
      INetworkSuccessResponse<GetOrdersResponse<OrdersType>>,
      {
        page: number;
        limit?: number;
        status: 'in-progress' | 'requested' | 'pending' | 'completed';
      }
    >({
      query: ({ page, limit, status }) => ({
        url: `${GET_ORDERS_BASE_PATH}?limit=${limit || ORDERS_PER_PAGE}&page=${
          page || 1
        }&status=${status}`,
        method: GET_METHOD,
      }),
    }),

    getRecurrentOrders: build.query<
      INetworkSuccessResponse<GetOrdersResponse<RecurrentOrderType>>,
      {
        page: number;
        limit?: number;
        status: 'in-progress' | 'requested' | 'pending' | 'completed';
      }
    >({
      query: ({ page, limit, status }) => ({
        url: `${GET_RECURRENT_ORDERS_PATH}?limit=${
          limit || ORDERS_PER_PAGE
        }&page=${page || 1}&status=${status}`,
        method: GET_METHOD,
      }),
    }),

    getOrderById: build.query<INetworkSuccessResponse<unknown>, string>({
      query: () => ({
        url: '',
        method: GET_METHOD,
      }),
    }),
  }),
});

export const { useGetOrdersQuery, useGetRecurrentOrdersQuery } = OrdersApi;
