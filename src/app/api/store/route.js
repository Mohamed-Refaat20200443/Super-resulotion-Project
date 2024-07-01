// src/app/api/hello/route.js
import { NextResponse } from 'next/server';
import { query } from '../../../../lib/db';

export async function POST(request) {
  const { _id, url, size , type} = await request.json();

  try {
    const token = request.cookies.get('token').value;
    const userResult = await query('SELECT * FROM users WHERE token = ?', [token]);
    if (userResult.length === 0) {
      return NextResponse.json({ error: 'Utilisateur non trouvé' }, { status: 404 });
    }
    const userId = userResult[0].id;
    
    await query('UPDATE users SET storage = storage + ? WHERE id = ?', [size, userId]);
    
    await query('INSERT INTO bucket (image_url, user_id, size, type) VALUES (?, ?, ?, ?)', [url, userId, size, type]);

    return NextResponse.json({ data: { _id, url, size } }, { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}

