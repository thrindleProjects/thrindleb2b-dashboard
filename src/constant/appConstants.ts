export const AXIOS_TIMEOUT_TIME = 30000;
export const REFETCH_TIME = 43200000;
export const AXIOS_TIMEOUT_MSG = 'Request Timeout';
export const TOKEN_EXPIRED_MSG = 'session expired. please login again';

// REST METHODS START
export const POST_METHOD = 'POST' as const;
export const GET_METHOD = 'GET' as const;
export const PUT_METHOD = 'PUT' as const;
export const DELETE_METHOD = 'DELETE' as const;
export const PATCH_METHOD = 'PATCH' as const;
// REST METHODS END

// AUTH API ENDPOINTS START
export const LOGIN_USER_PATH = '/user/signin' as const;
// AUTH API ENDPOINTS END

// GLOBAL API REDUCER PATH START
export const GLOBAL_API_REDUCER_PATH = 'globalApi';
// GLOBAL API REDUCER PATH END

// ORDERS API ENDPOINTS START
export const ORDERS_PER_PAGE = 10;

export const ORDERS_BASE_PATH = '/admin/order' as const;

export const GET_ALL_ORDERS_PATH = `${ORDERS_BASE_PATH}/getAllOrders` as const;

export const GET_RECURRENT_ORDERS_BASE_PATH = '/admin/recurrent' as const;

export const GET_ALL_RECURRENT_ORDERS_PATH =
  `${GET_RECURRENT_ORDERS_BASE_PATH}/getAllOrders` as const;

export const ADD_PRICE_TO_ITEM_PATH =
  `${ORDERS_BASE_PATH}/addPriceToItem` as const;

// ORDERS API ENDPOINTS END

// IMAGE BASE URL START
export const IMAGE_BASE_URL = `${process.env.NEXT_PUBLIC_DEV_URL}/images`;
// IMAGE BASE URL END
