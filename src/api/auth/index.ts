import type { LoginUserValuesType } from '@/components/lib/loginForm/validation';

import { UserLoginResponse } from '@/api/auth/types';
import { globalApi } from '@/api/globalApi';
import { LOGIN_USER_PATH, POST_METHOD } from '@/constant';
import { INetworkSuccessResponse } from '@/utils/appTypes';

const AuthApi = globalApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<
      INetworkSuccessResponse<UserLoginResponse>,
      LoginUserValuesType
    >({
      query: (data) => ({
        url: LOGIN_USER_PATH,
        method: POST_METHOD,
        data,
      }),
    }),
  }),
});

export const { useLoginMutation } = AuthApi;
