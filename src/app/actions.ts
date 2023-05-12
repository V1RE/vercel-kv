'use server';

import { kv } from '@vercel/kv';
import { revalidatePath } from 'next/cache';

export async function incrementCounter() {
  const count = await kv.incr('count');

  console.log(count);

  revalidatePath('/');
}

export async function resetCounter() {
  await kv.set('count', 0);

  revalidatePath('/');
}
