import { Company, INetworkSuccessResponse } from '@/@types';
import { globalApi } from '@/api/globalApi';
import {
  GET_ALL_CUSTOMERS,
  GET_COMPANY_DETAILS,
  GET_COMPANY_ORDERS,
  GET_GRAPH_DATA,
  GET_METHOD,
  MAKE_COMPANY_VIP,
  ORDERS_PER_PAGE,
  PUT_METHOD,
} from '@/constant';

import { IGraphData } from './type';
import { GetOrdersResponse, SingleOrder } from '../orders/types';

const OrdersApi = globalApi.injectEndpoints({
  overrideExisting: true,

  endpoints: (build) => ({
    getAllCustomers: build.query<
      INetworkSuccessResponse<GetOrdersResponse<Company>>,
      {
        page: number;
        limit?: number;
      }
    >({
      query: ({ page, limit }) => ({
        url: `${GET_ALL_CUSTOMERS}?limit=${limit || ORDERS_PER_PAGE}&page=${
          page || 1
        }`,
        method: GET_METHOD,
      }),
    }),
    getGraphData: build.query<INetworkSuccessResponse<IGraphData>, void>({
      query: () => ({
        url: GET_GRAPH_DATA,
        method: GET_METHOD,
      }),
    }),
    getCompanyDetails: build.query<
      INetworkSuccessResponse<Company>,
      string | string[] | undefined
    >({
      query: (id) => ({
        url: `${GET_COMPANY_DETAILS}/${id}`,
        method: GET_METHOD,
      }),
      providesTags: ['Company'],
    }),
    makeCompanyVip: build.mutation<
      INetworkSuccessResponse<null>,
      { isVIP: boolean; id: string | string[] | undefined }
    >({
      query: (data) => ({
        url: `${MAKE_COMPANY_VIP}/${data.id}`,
        method: PUT_METHOD,
        data: {
          isVIP: data.isVIP,
        },
      }),
      invalidatesTags: ['Company'],
    }),
    getCompanyOrders: build.query<
      INetworkSuccessResponse<SingleOrder[]>,
      string | string[] | undefined
    >({
      query: (id: string | string[] | undefined) => ({
        url: `${GET_COMPANY_ORDERS}/${id}`,
        method: GET_METHOD,
      }),
    }),
  }),
});

export const {
  useGetAllCustomersQuery,
  useGetGraphDataQuery,
  useGetCompanyOrdersQuery,
  useMakeCompanyVipMutation,
  useGetCompanyDetailsQuery,
} = OrdersApi;
