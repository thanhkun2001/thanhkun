import { Box, Button, Container, Grid, Pagination, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import ProductListLoading from '../../components/ProductComp';
import { getAllProduct } from '../../redux/actions/productAction';

const ProductPage = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const listProduct = useSelector((state) => state.product.listProduct);
  const navigate = useNavigate();
  const handleView = (e, id) => {
    if (e) e.preventDefault();
    navigate(`/products/${id}`);
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(getAllProduct({ _page: 1, _limit: 10 }));
    }, 1000);
  }, []);
  useEffect(() => {}, [listProduct]);
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Paper elevation={0}>
            {loading ? (
              <ProductListLoading />
            ) : (
              <div>
                {listProduct &&
                  listProduct.data?.map((item) => (
                    <div key={item.id}>
                      <p>{item.name}</p>
                      <span>
                        {item.salePrice} {item.promotionPercent > 0 ? ` -${item.promotionPercent}%` : ''}
                      </span>
                      <Button
                        color="primary"
                        onClick={(e) => {
                          handleView(e, item.id);
                        }}
                      >
                        View
                      </Button>
                    </div>
                  ))}
              </div>
            )}
            <Pagination count={10} color="primary" />
          </Paper>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductPage;
