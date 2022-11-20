import productApi from '../../services/productApi';
import { GET_LIST_PRODUCT_DETAIL_ERROR, GET_LIST_PRODUCT_DETAIL_REQUEST, GET_LIST_PRODUCT_DETAIL_SUCCESS, GET_LIST_PRODUCT_ERROR, GET_LIST_PRODUCT_REQUEST, GET_LIST_PRODUCT_SUCCESS } from '../types';

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
// export const getProductDetails = (id) => {
//     return async (dispatch) => {
//       dispatch({ type: GET_LIST_PRODUCT_DETAIL_REQUEST });
//       try {
//         const res = await productApi.getProductDetail(id)
//         dispatch({
//           type: GET_LIST_PRODUCT_DETAIL_SUCCESS,
//           payload: res,
//         });
//       } catch (error) {
//         dispatch({ type: GET_LIST_PRODUCT_DETAIL_ERROR });
//         console.log(error,'ccc');
//       }
//     };
//   };
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