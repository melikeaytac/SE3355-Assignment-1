import { openDb } from '@/lib/db';

export async function GET() {
  try {
    const db = await openDb();
    const slides = await db.all('SELECT * FROM slider');
    console.log('Slides from DB:', slides);
    return Response.json(slides);
  } catch (err) {
    console.error('Slider API error:', err); 
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
