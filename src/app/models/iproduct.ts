export interface Iproduct {
  productId: number;
  productName: string;
  productImgUrl: string;
  productQuantity: number;
  productPrice: number;
  categoryId: number;
  productDetails?: string;
  toggleImg: boolean;
}
