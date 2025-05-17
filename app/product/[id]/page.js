import { openDb } from '@/lib/db';
import ProductClient from './ProductClient';

export async function generateStaticParams() {
  const db = await openDb();
  const products = await db.all('SELECT id FROM recommendations');
  return products.map((p) => ({ id: p.id.toString() }));
}

export default async function ProductPage({ params }) {
const id = params.id;
  const db = await openDb();
  const product = await db.get('SELECT * FROM recommendations WHERE id = ?', id);


  if (!product) {
    return <div className="container mt-5">Ürün bulunamadı :( </div>;
  }

  return <ProductClient product={product} />;
}
