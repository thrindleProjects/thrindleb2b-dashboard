import { GeneralOrderStatus } from '@/@types/appTypes';
import { globalApi } from '@/api/globalApi';
import type {
  GetOrdersResponse,
  OrdersType,
  RecurrentOrderType,
  SingleOrder,
} from '@/api/orders/types';
import {
  ADD_PRICE_TO_ITEM_PATH,
  GET_ALL_ORDERS_PATH,
  GET_ALL_RECURRENT_ORDERS_PATH,
  GET_METHOD,
  ORDERS_BASE_PATH,
  ORDERS_PER_PAGE,
  PUT_METHOD,
} from '@/constant';
import { INetworkSuccessResponse } from '@/utils/appTypes';
const OrdersApi = globalApi.injectEndpoints({
  endpoints: (build) => ({
    getOrders: build.query<
      INetworkSuccessResponse<GetOrdersResponse<OrdersType>>,
      {
        page: number;
        limit?: number;
        status: GeneralOrderStatus;
      }
    >({
      query: ({ page, limit, status }) => ({
        url: `${GET_ALL_ORDERS_PATH}?limit=${limit || ORDERS_PER_PAGE}&page=${
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
        status: GeneralOrderStatus;
      }
    >({
      query: ({ page, limit, status }) => ({
        url: `${GET_ALL_RECURRENT_ORDERS_PATH}?limit=${
          limit || ORDERS_PER_PAGE
        }&page=${page || 1}&status=${status}`,
        method: GET_METHOD,
      }),
    }),

    getOrderById: build.query<INetworkSuccessResponse<SingleOrder>, string>({
      query: (id) => ({
        url: `${ORDERS_BASE_PATH}/${id}`,
        method: GET_METHOD,
      }),
      providesTags: ['SingleOrder'],
    }),

    addPriceToItem: build.mutation<
      INetworkSuccessResponse<unknown>,
      { id: string; payload: { pricePerItem: number } }
    >({
      query: ({ id, payload }) => ({
        url: `${ADD_PRICE_TO_ITEM_PATH}/${id}`,
        method: PUT_METHOD,
        data: payload,
      }),
      invalidatesTags: ['SingleOrder'],
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useGetRecurrentOrdersQuery,
  useGetOrderByIdQuery,
  useAddPriceToItemMutation,
} = OrdersApi;
