import {
  GET_LIST_PRODUCT_DETAIL_ERROR,
  GET_LIST_PRODUCT_DETAIL_REQUEST,
  GET_LIST_PRODUCT_DETAIL_SUCCESS,
  GET_LIST_PRODUCT_ERROR,
  GET_LIST_PRODUCT_REQUEST,
  GET_LIST_PRODUCT_SUCCESS,
  PAGINATION,
} from '../types';

const INITIAL_VALUE = {
  isLoading: false,
  listProduct: {
    data: [],
    pagination: {},
  },
  listProductDetails:null
};

export default (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case GET_LIST_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        listProduct: null,
      };
    case GET_LIST_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listProduct: action.payload,
      };
    case GET_LIST_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        listProduct: null,
      };
    case GET_LIST_PRODUCT_DETAIL_REQUEST:
      return {
        ...state,
        listProductDetails: null,
      };
    case GET_LIST_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        listProductDetails: action.payload,
      };
    case GET_LIST_PRODUCT_DETAIL_ERROR:
      return {
        ...state,
        isLoading: false,
        listProductDetails: null,
      };

    default:
      return state;
  }
};
