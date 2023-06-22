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

export const RECURRENT_ORDERS_BASE_PATH = '/admin/recurrent' as const;

export const GET_ALL_RECURRENT_ORDERS_PATH =
  `${RECURRENT_ORDERS_BASE_PATH}/getAllOrders` as const;

export const ADD_PRICE_TO_ITEM_PATH =
  `${ORDERS_BASE_PATH}/addPriceToItem` as const;

export const ADD_SUBSTITUTE_TO_ITEM_PATH = '/order/addSubstitute' as const;

export const DELETE_SUBSTITUTE_ITEM_PATH = '/order/substitute' as const;

export const UPDATE_ITEM_AVAILABILITY_PATH =
  `${ORDERS_BASE_PATH}/updateItemAvailability` as const;

export const UPDATE_SINGLE_SUBSTITUTE_ITEM_PATH =
  '/admin/order/substitute' as const;

export const SEND_ORDER_PRICE_LIST_PATH =
  `${ORDERS_BASE_PATH}/sendPriceList` as const;

export const DELETE_IMAGE_FOR_SUBSTITUTE_ITEM_PATH =
  '/order/deleteSubstituteImage' as const;

export const SEND_RECURRENT_ORDER_PRICE_LIST_PATH =
  `/admin/order/sendRecurrentPriceList` as const;

export const UPDATE_SHIPPING_AND_SERVICE_CHARGE_PATH =
  `${ORDERS_BASE_PATH}/updateShippingFee` as const;
export const UPDATE_RECURRENT_SHIPPING_AND_SERVICE_CHARGE_PATH =
  `${ORDERS_BASE_PATH}/updateRecurrentOrderShippingFee` as const;

// ORDERS API ENDPOINTS END

// CUSTOMERS ENDPOINTS START
export const GET_ALL_CUSTOMERS = '/admin/company/getAllCompanies';
export const GET_GRAPH_DATA = '/admin/company/getOnboardingData';
export const GET_COMPANY_ORDERS = '/admin/order/getCompanyOrders';
export const MAKE_COMPANY_VIP = '/admin/company/updateVIP';
export const GET_COMPANY_DETAILS = '/admin/company';
// CUSTOMERS ENDPOINTS END

// IMAGE BASE URL START
export const IMAGE_BASE_URL =
  `${process.env.NEXT_PUBLIC_DEV_URL}/images` as const;
// IMAGE BASE URL END

// Images
const IMAGES_SUB_LINK = '/images';

export const IMAGE_URL = `${process.env.NEXT_PUBLIC_DEV_URL}${IMAGES_SUB_LINK}`;

// Dashboard API PATHS
export const GET_DASHBOARD_NUMBERS_API_URL = '/admin/order/getDashboardNumbers';
// INPUT TYPES START
export const PASSWORD = 'password';
export const TEXT = 'text';
export const EMAIL = 'email';
export const DATE = 'date';
export const FILE = 'file';
// INPUT TYPES END

// ADD USER FORM KEYS START
export const FULLNAME = 'fullName';
export const EMAIL_ADDRESS = 'emailAddress';
export const PHONE_NUMBER = 'phoneNumber';
export const ROLE = 'role';
// ADD USER FORM KEYS END

// PASSWORD FORM KEYS START
export const NEW_PASSWORD = 'newPassword';
export const CONFIRM_PASSWORD = 'confirmPassword';
// PASSWORD FORM KEYS END

// PROFILE FORM KEYS START
export const FIRST_NAME = 'firstName';
export const LAST_NAME = 'lastName';
export const PHONE = 'phone';
// PROFILE FORM KEYS END

// PROFILE LAYOUT TAB TYPES START
export const GENERAL = 'General';
export const SECURITY = 'Security';
export const USERS = 'Users & Permission';
// PROFILE LAYOUT TAB TYPES END
