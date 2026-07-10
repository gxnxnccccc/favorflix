import { NextResponse } from 'next/server';
import { getConnection } from '@/lib/db';

export async function GET() {
  try {
    const conn = await getConnection();
    const [rows] = await conn.execute('SELECT * FROM ztransaction LIMIT 5');

    return NextResponse.json(rows);
  } catch (error) {
    console.error('Failed to fetch MySQL data:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}