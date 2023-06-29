import { INetworkSuccessResponse } from '@/@types';
import { globalApi } from '@/api/globalApi';
import {
  CREATE_NEW_ADMIN,
  DELETE_ADMIN,
  DELETE_METHOD,
  GET_ALL_ADMIN,
  GET_METHOD,
  POST_METHOD,
  PUT_METHOD,
  UPDATE_PASSWORD_ENDPOINT,
} from '@/constant';

import { AllAdminData, ChangePasswordPayload, CreateNewAdmin } from './payload';

const AuthApi = globalApi.injectEndpoints({
  endpoints: (build) => ({
    changePassword: build.mutation<
      INetworkSuccessResponse<null>,
      ChangePasswordPayload
    >({
      query: (data) => ({
        url: UPDATE_PASSWORD_ENDPOINT,
        method: PUT_METHOD,
        data,
      }),
    }),

    getAllAdmin: build.query<INetworkSuccessResponse<AllAdminData[]>, void>({
      query: () => ({
        url: GET_ALL_ADMIN,
        method: GET_METHOD,
      }),
      providesTags: ['Admin'],
    }),
    deleteAdmin: build.mutation<INetworkSuccessResponse<null>, string>({
      query: (id) => ({
        url: `${DELETE_ADMIN}/${id}`,
        method: DELETE_METHOD,
      }),
      invalidatesTags: ['Admin'],
    }),

    createNewAdmin: build.mutation<
      INetworkSuccessResponse<null>,
      CreateNewAdmin
    >({
      query: (data) => ({
        url: CREATE_NEW_ADMIN,
        method: POST_METHOD,
        data,
      }),
      invalidatesTags: ['Admin'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useChangePasswordMutation,
  useCreateNewAdminMutation,
  useGetAllAdminQuery,
  useDeleteAdminMutation,
} = AuthApi;
