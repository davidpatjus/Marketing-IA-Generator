import { NextResponse } from 'next/server';
import { db } from '@/utils/db';
import { eq } from 'drizzle-orm';
import { users } from '@/utils/schema';

export async function POST(request: Request) {
    try {
      const { user } = await request.json(); // Extraer el usuario desde el body
  
      if (!user) {
        return NextResponse.json({ error: 'User parameter is required' }, { status: 400 });
      }
        
      // Buscar si el usuario existe
      const existingUser = await db
        .select()
        .from(users)
        .where(eq(users.user, user as string));
  
      if (existingUser.length === 0) {
        // Si no existe, crear el nuevo usuario
        const newUser = await db
          .insert(users)
          .values({
            user,
            credits: 0,
            maxCreditUsage: 30000,
          })
          .returning({ user: users.user, credits: users.credits, maxCreditUsage: users.maxCreditUsage });
  
        return NextResponse.json(newUser[0], { status: 201 });
      }
  
      // Si el usuario ya existe, devolverlo
      return NextResponse.json(existingUser[0], { status: 200 });
  
    } catch (error: any) {
      console.error('Error en la operación:', error);
      return NextResponse.json({ error: 'Error obteniendo/creando usuario: ' + error.message }, { status: 500 });
    }
  }  