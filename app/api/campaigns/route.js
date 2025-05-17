import { openDb } from '@/lib/db';

export async function GET() {
  const db = await openDb();
  const campaigns = await db.all('SELECT * FROM campaigns');
  return Response.json(campaigns);
}
