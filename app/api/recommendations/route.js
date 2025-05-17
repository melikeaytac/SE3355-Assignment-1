import { openDb } from '@/lib/db';

export async function GET() {
  try {
    const db = await openDb();
    const products = await db.all('SELECT * FROM recommendations');
    return Response.json(products);
  } catch (err) {
    console.error('Recommendations API error:', err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
