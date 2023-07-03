import { GeneralOrderStatus, INetworkSuccessResponse } from '@/@types';
import { globalApi } from '@/api/globalApi';
import type {
  GetOrdersResponse,
  OrdersType,
  RecurrentOrderType,
  SingleOrder,
  SingleRecurrentOrder,
} from '@/api/orders/types';
import {
  ADD_PRICE_TO_ITEM_PATH,
  ADD_SUBSTITUTE_TO_ITEM_PATH,
  DELETE_IMAGE_FOR_SUBSTITUTE_ITEM_PATH,
  DELETE_METHOD,
  DELETE_SUBSTITUTE_ITEM_PATH,
  GET_ALL_ORDERS_PATH,
  GET_ALL_RECURRENT_ORDERS_PATH,
  GET_METHOD,
  ORDERS_BASE_PATH,
  ORDERS_PER_PAGE,
  POST_METHOD,
  PUT_METHOD,
  RECURRENT_ORDERS_BASE_PATH,
  SEND_ORDER_PRICE_LIST_PATH,
  SEND_RECURRENT_ORDER_PRICE_LIST_PATH,
  UPDATE_ITEM_AVAILABILITY_PATH,
  UPDATE_RECURRENT_SHIPPING_AND_SERVICE_CHARGE_PATH,
  UPDATE_SHIPPING_AND_SERVICE_CHARGE_PATH,
  UPDATE_SINGLE_SUBSTITUTE_ITEM_PATH,
} from '@/constant';

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
      providesTags: ['Order'],
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

    getRecurrentOrderById: build.query<
      INetworkSuccessResponse<SingleRecurrentOrder>,
      string
    >({
      query: (id) => ({
        url: `${RECURRENT_ORDERS_BASE_PATH}/${id}`,
        method: GET_METHOD,
      }),
      providesTags: ['SingleRecurrentOrder'],
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
      invalidatesTags: ['SingleOrder', 'Order'],
    }),

    addPriceToRecurrentItem: build.mutation<
      INetworkSuccessResponse<unknown>,
      { id: string; payload: { pricePerItem: number } }
    >({
      query: ({ id, payload }) => ({
        url: `${ADD_PRICE_TO_ITEM_PATH}/${id}`,
        method: PUT_METHOD,
        data: payload,
      }),
      invalidatesTags: ['SingleRecurrentOrder'],
    }),

    addSubstitutesToItem: build.mutation<
      INetworkSuccessResponse<unknown>,
      { id: string; payload: FormData }
    >({
      query: ({ id, payload }) => ({
        url: `${ADD_SUBSTITUTE_TO_ITEM_PATH}/${id}`,
        method: POST_METHOD,
        data: payload,
      }),
      invalidatesTags: ['SingleOrder', 'SingleRecurrentOrder'],
    }),

    deleteSubstitute: build.mutation<INetworkSuccessResponse<null>, string>({
      query: (id) => ({
        url: `${DELETE_SUBSTITUTE_ITEM_PATH}/${id}`,
        method: DELETE_METHOD,
      }),
      invalidatesTags: ['SingleOrder', 'SingleRecurrentOrder'],
    }),

    updateItemAvailability: build.mutation<
      INetworkSuccessResponse<unknown>,
      { id: string; payload: { isAvailable: boolean } }
    >({
      query: ({ id, payload }) => ({
        url: `${UPDATE_ITEM_AVAILABILITY_PATH}/${id}`,
        method: PUT_METHOD,
        data: payload,
      }),
      invalidatesTags: ['SingleOrder', 'SingleRecurrentOrder'],
    }),

    updateSingleSubstitute: build.mutation<
      INetworkSuccessResponse<unknown>,
      { id: string; payload: FormData }
    >({
      query: ({ id, payload }) => ({
        url: `${UPDATE_SINGLE_SUBSTITUTE_ITEM_PATH}/${id}`,
        method: PUT_METHOD,
        data: payload,
      }),
      invalidatesTags: ['SingleOrder', 'SingleRecurrentOrder'],
    }),

    sendOrderPriceList: build.mutation<
      INetworkSuccessResponse<unknown>,
      string
    >({
      query: (id) => ({
        url: `${SEND_ORDER_PRICE_LIST_PATH}/${id}`,
        method: GET_METHOD,
      }),
      invalidatesTags: ['SingleOrder', 'Order'],
    }),

    sendRecurrentOrderPriceList: build.mutation<
      INetworkSuccessResponse<unknown>,
      string
    >({
      query: (id) => ({
        url: `${SEND_RECURRENT_ORDER_PRICE_LIST_PATH}/${id}`,
        method: GET_METHOD,
      }),
      invalidatesTags: ['SingleRecurrentOrder'],
    }),

    deleteImageForSubstituteItem: build.mutation<
      INetworkSuccessResponse<unknown>,
      { id: string; payload: { imageKey: string } }
    >({
      query: ({ id, payload }) => ({
        url: `${DELETE_IMAGE_FOR_SUBSTITUTE_ITEM_PATH}/${id}`,
        method: PUT_METHOD,
        data: payload,
      }),
      invalidatesTags: ['SingleOrder'],
    }),

    updateShippingAndServiceCharge: build.mutation<
      INetworkSuccessResponse<null>,
      { id: string; payload: { shippingFee: number; serviceCharge: number } }
    >({
      query: ({ id, payload }) => ({
        url: `${UPDATE_SHIPPING_AND_SERVICE_CHARGE_PATH}/${id}`,
        method: PUT_METHOD,
        data: payload,
      }),
      invalidatesTags: ['SingleOrder'],
    }),
    updateRecurrentShippingAndServiceCharge: build.mutation<
      INetworkSuccessResponse<null>,
      { id: string; payload: { shippingFee: number; serviceCharge: number } }
    >({
      query: ({ id, payload }) => ({
        url: `${UPDATE_RECURRENT_SHIPPING_AND_SERVICE_CHARGE_PATH}/${id}`,
        method: PUT_METHOD,
        data: payload,
      }),
      invalidatesTags: ['SingleRecurrentOrder'],
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useGetRecurrentOrdersQuery,
  useGetOrderByIdQuery,
  useAddPriceToItemMutation,
  useAddPriceToRecurrentItemMutation,
  useAddSubstitutesToItemMutation,
  useDeleteSubstituteMutation,
  useGetRecurrentOrderByIdQuery,
  useUpdateItemAvailabilityMutation,
  useUpdateSingleSubstituteMutation,
  useSendOrderPriceListMutation,
  useDeleteImageForSubstituteItemMutation,
  useSendRecurrentOrderPriceListMutation,
  useUpdateShippingAndServiceChargeMutation,
  useUpdateRecurrentShippingAndServiceChargeMutation,
} = OrdersApi;
