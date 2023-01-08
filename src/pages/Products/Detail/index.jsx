import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductListLoading from '../../../components/ProductComp';
import { addToCart, getProductDetails } from '../../../redux/actions/productAction';

const ProductDetail = () => {
  const [defaultNumber,setDefaultNumber] =useState(0)
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
  const handleClick = () => {
    // if(defaultNumber === 0){
    //   alert('vui long chon so luong')
    // }else{
    //   localStorage.setItem('noidung',
    //   JSON.stringify({
    //     name:   productDetail.name,
    //     amount: defaultNumber,
    //     price :new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(productDetail.originalPrice * defaultNumber)
    //   })
    //   )
    //   setDefaultNumber(0)
    // }
   dispatch(addToCart(productDetail.id,defaultNumber))
  }
  return (
    loading ? 
      <ProductListLoading />
     : 
      <div>
        {productDetail && (
          <ul>
            <li>{productDetail.name}</li>
            <li>{productDetail.salePrice}</li>
            <li>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(productDetail.originalPrice)}</li>
            <li>{productDetail.isFreeShip === false ? 'No' : 'Yes'}</li>
            <li>{productDetail.isPromotion === false ? 'No' : 'Yes'}</li>
          </ul>
        )}
        <input type="number" onChange={(e) => setDefaultNumber(e.target.value)} value={defaultNumber} min={0} max={20} />
        <button onClick={handleClick}>Mua</button>
      </div>
    );
  
};

export default ProductDetail;
