'use client';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addVisitedProduct } from '@/redux/visitedSlice';

export default function ProductClient({ product }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addVisitedProduct(product));
  }, [product, dispatch]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p className="fs-4 text-success">{product.price}₺</p>
          <p>Puan: {product.rating} ⭐</p>
          <p>Ürün Hakkında ...</p>
        </div>
      </div>
    </div>
  );
}
