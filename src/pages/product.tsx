import { ProductAPI } from '@api/product';
import { ProductInfo } from '@api/product/info';
import { ProductType } from '@api/product/types';
import Loading from '@components/atoms/Loading';
import SEO from '@components/common/SEO';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { motion } from 'framer-motion';

interface ProductProps {
  product: ProductType;
}

const ProductItem: React.FC<ProductProps> = ({ product }) => {
  const iProduct = new ProductInfo(product);
  return (
    <div style={{ padding: 10, margin: 10, border: '1px solid red' }}>
      <p>
        {iProduct.field('name')} {iProduct.outOfStock()}
      </p>
      <p>{iProduct.field('price')}</p>
      <p>
        {iProduct.field('stock')} {iProduct.isInStock()}
      </p>
    </div>
  );
};

const Product: React.FC = () => {
  const { isLoading, data } = useQuery(['products'], ProductAPI.PRODUCTS);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <SEO />
      {isLoading && <Loading />}
      {data && data.data.map((i) => <ProductItem product={i} key={i.id} />)}
    </motion.div>
  );
};

export default Product;
