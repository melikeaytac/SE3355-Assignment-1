import { openDb } from '@/lib/db'

export async function GET() {
  const db = await openDb();
  const electronics = await db.all('SELECT * FROM electronics');
  return Response.json(electronics);
}
