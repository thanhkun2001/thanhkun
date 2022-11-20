import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductListLoading from '../../../components/ProductComp';
import { getProductDetails } from '../../../redux/actions/productAction';

const ProductDetail = () => {
  const [loading, setLoading] = useState(false);
  let { id } = useParams();
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.product.listProductDetails);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      dispatch(getProductDetails(id));
      setLoading(false)
    },1000)
  }, [id]);

  return loading ? (
    <ProductListLoading />
  ) : (
    <div>
      {productDetail && (
        <ul>
          <li>{productDetail.name}</li>
          <li>{productDetail.salePrice}</li>
          <li>{productDetail.promotionPercent}</li>
          <li>{productDetail.isFreeShip === false ? 'No' : 'Yes'}</li>
          <li>{productDetail.isPromotion === false ? 'No' : 'Yes'}</li>
        </ul>
      )}
    </div>
  );
};

export default ProductDetail;
