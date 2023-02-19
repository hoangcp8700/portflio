import { renderMoney } from '@utils/functions';

import { ProductType } from './types';

export class ProductInfo {
  public product: ProductType;

  constructor(product: ProductType) {
    this.product = product;
  }

  public field(name: keyof ProductType) {
    switch (name) {
      case 'price':
        return this.formatMoney();
      default:
        return this.product[name];
    }
  }

  public formatMoney(): string {
    return renderMoney(parseInt(this.product.price, 10), '.', 'VND');
  }

  public isInStock(): string {
    return this.product.stock < 10 ? 'Hết hàng' : '';
  }

  public outOfStock(): string {
    return this.product.stock < 30 ? 'Sắp hết hàng' : '';
  }
}
