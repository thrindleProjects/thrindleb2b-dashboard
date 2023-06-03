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