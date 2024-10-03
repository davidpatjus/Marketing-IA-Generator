import { NextResponse } from 'next/server';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { eq } from 'drizzle-orm';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const createdBy = searchParams.get('createdBy');

  if (!createdBy) {
    return NextResponse.json({ error: 'createdBy is required' }, { status: 400 });
  }

  try {
    const data = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, createdBy as string));
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Error obteniendo datos ' + error }, { status: 500 });
  }
}
