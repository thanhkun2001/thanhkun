import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { order } from '../../redux/actions/productAction';

const Profile = () => {
  const [cart,setCart] = useState(null)
  const data = useSelector(state => state.product.carts)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(order())
  }
  return (
    <>
      
      {data.length > 0 ? data.map(item => (
        <div>
          {item.quantity}
        </div>
      )) : <div>
        <p>No Data</p>
        </div>
        }
    <button onClick={handleClick}>Dat hang</button>
    </>
  )
};

export default Profile;
