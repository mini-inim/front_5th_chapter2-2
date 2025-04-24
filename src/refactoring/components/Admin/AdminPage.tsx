import { useState } from 'react';
import { Coupon, Discount, Product } from '../../../types';
import { AdminCouponList } from './Coupon/AdminCouponList';
import { AddCouponForm } from './Coupon/AddCoupon';
import { ProductList } from './Product/ProductList';
import { AddProductForm } from './Product/AddNewProduct';

interface Props{
  products: Product[],
  coupons: Coupon[];
  onProductUpdate: (updatedProduct: Product) => void;
  onProductAdd: (newProduct: Product) => void;
  onCouponAdd: (newCoupon: Coupon) => void;
}

export const AdminPage = ({ products, coupons, onProductUpdate, onProductAdd, onCouponAdd }: Props) => {
  const [newCoupon, setNewCoupon] = useState<Coupon>({
    name: '',
    code: '',
    discountType: 'percentage',
    discountValue: 0
  });
  const [showNewProductForm, setShowNewProductForm] = useState(false);
  const [newProduct, setNewProduct] = useState<Omit<Product, 'id'>>({
    name: '',
    price: 0,
    stock: 0,
    discounts: []
  });


  const handleAddNewProduct = () => {
    const productWithId = { ...newProduct, id: Date.now().toString() };
    onProductAdd(productWithId);
    setNewProduct({
      name: '',
      price: 0,
      stock: 0,
      discounts: []
    });
    setShowNewProductForm(false);
  };

  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">관리자 페이지</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">상품 관리</h2>
          <button
            onClick={() => setShowNewProductForm(!showNewProductForm)}
            className="bg-green-500 text-white px-4 py-2 rounded mb-4 hover:bg-green-600"
          >
            {showNewProductForm ? '취소' : '새 상품 추가'}
          </button>

          {showNewProductForm && (
            <AddProductForm 
              newProduct = {newProduct}
              setNewProduct = {setNewProduct}
              handleAddNewProduct = {handleAddNewProduct}/>
          )}

          <ProductList 
            onProductUpdate = {onProductUpdate}
            products = {products}
          />

        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">쿠폰 관리</h2>
          <div className="bg-white p-4 rounded shadow">
            <AddCouponForm />
            <div>
              <h3 className="text-lg font-semibold mb-2">현재 쿠폰 목록</h3>
              <AdminCouponList coupons = {coupons}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
