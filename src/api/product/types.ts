export enum ProductStatus {
  'Public' = 0,
  'Limit' = 1,
  'Private' = 2,
}

export type ProductType = {
  id: string;
  name: string;
  description: string;
  price: string;
  stock: number;
  thumbnail: string;
  status: ProductStatus;
};
