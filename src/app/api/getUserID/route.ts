import { NextResponse } from 'next/server';
import { db } from '@/utils/db';
import { users } from '@/utils/schema';
import { eq } from 'drizzle-orm';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const user = searchParams.get('user');

  if (!user) {
    return NextResponse.json({ error: 'user is required' }, { status: 400 });
  }

  try {
    const data = await db.select().from(users).where(eq(users.user, user as string));
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Error obteniendo datos ' + error }, { status: 500 });
  }
}
