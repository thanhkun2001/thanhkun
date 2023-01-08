import productApi from '../../services/productApi';
import { ADD_TO_CART_ERROR, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, GET_LIST_PRODUCT_DETAIL_ERROR, GET_LIST_PRODUCT_DETAIL_REQUEST, GET_LIST_PRODUCT_DETAIL_SUCCESS, GET_LIST_PRODUCT_ERROR, GET_LIST_PRODUCT_REQUEST, GET_LIST_PRODUCT_SUCCESS, ORDER_SUCCESS } from '../types';

export const getAllProduct = () => {
  return async (dispatch) => {
    dispatch({ type: GET_LIST_PRODUCT_REQUEST });
    try {
      const res = await productApi.getAllProduct({ _page: 1, _limit: 10 });
      dispatch({
        type: GET_LIST_PRODUCT_SUCCESS,
        payload: res,
      });
    } catch (error) {
      dispatch({ type: GET_LIST_PRODUCT_ERROR });
      console.log(error);
    }
  };
};
export const addToCart = (id,quantity) => {
    return async (dispatch) => {
      dispatch({ type: ADD_TO_CART_REQUEST });
      try {
      
        dispatch({
          type: ADD_TO_CART_SUCCESS,
          payload: {id,quantity} ,
        });
      } catch (error) {
        dispatch({ type: ADD_TO_CART_ERROR });
        console.log(error,'ccc');
      }
    };
  };
  export const order = () => {
   return (dispatch) =>{
    dispatch({
      type : ORDER_SUCCESS
    })
   }
  };
export const getProductDetails = (id) => {
  return async dispatch => {
    dispatch({type:GET_LIST_PRODUCT_DETAIL_REQUEST})
      try {
          const res = await productApi.getDetails(id)
          dispatch({
              type: GET_LIST_PRODUCT_DETAIL_SUCCESS,
              payload: res
          })
      } catch (error) {
        dispatch({type:GET_LIST_PRODUCT_DETAIL_ERROR})
          console.log(error);
      }
  }
}