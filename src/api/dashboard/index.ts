import { IDashboardNumbers, INetworkResponse } from '@/@types/appTypes';
import { globalApi } from '@/api/globalApi';
import { GET_DASHBOARD_NUMBERS_API_URL, GET_METHOD } from '@/constant';

const dashboardApi = globalApi.injectEndpoints({
  overrideExisting: true,

  endpoints: (build) => ({
    getDashboardNumbers: build.query<INetworkResponse<IDashboardNumbers>, null>(
      {
        query: () => ({
          url: `${GET_DASHBOARD_NUMBERS_API_URL}`,
          method: GET_METHOD,
        }),
      }
    ),
  }),
});

export const { useGetDashboardNumbersQuery } = dashboardApi;
