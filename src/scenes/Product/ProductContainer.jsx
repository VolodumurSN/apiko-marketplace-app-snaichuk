import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { productsOperations } from '../../modules/products';
import Product from './ProductComponent';

const ProductContainer = ({
  productDetails,
  saveProduct,
  unSaveProduct,
  ...props
}) => {
  const { id } = useParams();
  const [isBookmark, setIsBookmark] = useState(productDetails.saved);

  const handleBookmark = () => {
    setIsBookmark(!isBookmark);

    isBookmark ? unSaveProduct(id) : saveProduct(id);
  };

  useEffect(() => {
    props.fetchProduct(id);
  }, [id]);

  return (
    <Product
      {...props}
      productDetails={productDetails}
      isBookmark={isBookmark}
      handleBookmark={handleBookmark}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    productDetails: state.products.fetchProduct.product,
    isProductLoading: state.products.fetchProduct.isLoading,
  };
};

const mapDispatchToProps = {
  fetchProduct: productsOperations.fetchProduct,
  saveProduct: productsOperations.saveProduct,
  unSaveProduct: productsOperations.unSaveProduct,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductContainer);
