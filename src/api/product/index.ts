import { promiseDelay } from '@api/authentication';

import { ProductStatus, ProductType } from './types';

const fakeProduct = () => {
  const data = (id: number) => ({
    id: `i-${id}`,
    name: `Product Name ${id}`,
    description: 'Lorem',
    price: '200000',
    status: ProductStatus.Public,
    stock: Math.floor(Math.random() * 50),
    thumbnail: '',
  });
  const products = new Array(10).fill(true).map(() => data(Math.floor(Math.random() * 10000)));
  return { data: products };
};
export const ProductAPI = {
  PRODUCTS: async (): Promise<ResponseAPIType<ProductType[]>> => {
    await promiseDelay(2000);
    const data = fakeProduct();
    return data;
  },
};
