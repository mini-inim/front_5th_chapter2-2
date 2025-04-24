import { Coupon, Product } from '../../types.ts';
import { TotalPrice } from '../components/Customer/Amount/TotalAmount.tsx';
import { CartList } from '../components/Customer/Cart/CartList.tsx';
import { CouponList } from '../components/Customer/Coupon/CouponList.tsx';
import { ProductList } from '../components/Customer/Product/ProductList.tsx';
import { useCart } from "../hooks/index.ts";

interface Props {
  products: Product[];
  coupons: Coupon[];
}

export const CartPage = ({ products, coupons }: Props) => {
  const { cart } = useCart();

  

  const getMaxDiscount = (discounts: { quantity: number; rate: number }[]) => {
    return discounts.reduce((max, discount) => Math.max(max, discount.rate), 0);
  };

  const getRemainingStock = (product: Product) => {
    const cartItem = cart.find(item => item.product.id === product.id);
    return product.stock - (cartItem?.quantity || 0);
  };

  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">장바구니</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProductList products = {products} cart = {cart}/>

          <CartList cart = {cart} />

          <CouponList coupons = { coupons } />
  
          <TotalPrice />
      </div>
    </div>
  );
};
