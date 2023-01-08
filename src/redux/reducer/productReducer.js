import {
  ADD_TO_CART_ERROR,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  GET_LIST_PRODUCT_DETAIL_ERROR,
  GET_LIST_PRODUCT_DETAIL_REQUEST,
  GET_LIST_PRODUCT_DETAIL_SUCCESS,
  GET_LIST_PRODUCT_ERROR,
  GET_LIST_PRODUCT_REQUEST,
  GET_LIST_PRODUCT_SUCCESS,
  ORDER_ERROR,
  ORDER_REQUEST,
  ORDER_SUCCESS,
  PAGINATION,
} from '../types';

const INITIAL_VALUE = {
  isLoading: false,
  listProduct: {
    data: [],
    pagination: {},
  },
  carts: [],
  listProductDetails: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
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
    case ADD_TO_CART_REQUEST:
      return {
        ...state,
      };
    case ADD_TO_CART_SUCCESS:
      let newArrays = state.carts;
      const hasCheck = state.carts.find((x) => x.id === action.payload.id);

      if (hasCheck) {
        newArrays = newArrays.map((x) => {
          if (x.id === action.payload.id) {
            return {
              quantity: Number(x.quantity) + Number(action.payload.quantity),
              id: x.id,
            };
          }
          return x;
        });
      } else {
        newArrays = [...newArrays, action.payload];
      }
      console.log(newArrays);
      return {
        ...state,
        carts: newArrays,
      };
    case ADD_TO_CART_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case ORDER_REQUEST:
      return {
        ...state,
      };
    case ORDER_SUCCESS:
      return {
        ...state,
        carts: [],
      };
    case ORDER_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};
