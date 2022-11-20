import { API_URL } from '../constants';
import globalAxios from './API';

const productApi = {
  async getAllProduct(params) {
    const newParams = { ...params };
    newParams._start = !params._page || params._page <= 1 ? 0 : (params._page - 1) * (params._limit || 50);
    delete newParams._page;
    const url = API_URL.PRODUCT;
    const result = await globalAxios.get(url, { params: newParams });
    const count = await globalAxios.get(url + '/count', { params: newParams });
    return {
      data: result,
      pagination: {
        page: params._page,
        limit: params._limit,
        total: count,
      },
    };
  },
  async getDetails(id) {
    const url = API_URL.PRODUCT + '/' + id;
    const result = await globalAxios.get(url);
    return result;
  },
  // async getProductDetail(id){
  //   const url = API_URL.PRODUCT + '/' + id
  //   const result = await globalAxios.get(url)
  //   return result
  // }
};

export default productApi;
