import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { getSession, signOut } from 'next-auth/react';
import { toast } from 'react-hot-toast';

// import { getSession, signOut } from 'next-auth/react';
import {
  AXIOS_TIMEOUT_MSG,
  AXIOS_TIMEOUT_TIME,
  GLOBAL_API_REDUCER_PATH,
} from '@/constant';

// initialize an empty api service that we'll inject endpoints into later as needed
axios.defaults.timeout = AXIOS_TIMEOUT_TIME;
axios.defaults.timeoutErrorMessage = AXIOS_TIMEOUT_MSG;

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    const session = await getSession();
    const token = session && session.token;
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        timeout: AXIOS_TIMEOUT_TIME,
        timeoutErrorMessage: AXIOS_TIMEOUT_MSG,
      });

      return { data: result?.data ? result.data : null };
    } catch (axiosError) {
      const err = axiosError as AxiosError;

      if (err?.response?.status === 401) {
        toast.error('Session expired. Please login again.');
        signOut();
      }
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
export const globalApi = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: String(process.env.NEXT_PUBLIC_DEV_URL),
  }),
  reducerPath: GLOBAL_API_REDUCER_PATH,
  endpoints: () => ({}),
  tagTypes: ['SingleOrder', 'Company', 'SingleRecurrentOrder'],
});
