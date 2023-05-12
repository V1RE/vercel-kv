import { kv } from '@vercel/kv';
import { cn } from 'tailwind-variants';

async function getCounter() {
  const count = await kv.get('count');

  if (typeof count === 'number') return count;

  await kv.set('count', 0);

  return 0;
}

export async function Counter({ className }: { className?: string }) {
  const count = await getCounter();

  return <div className={cn('text-xl', className)()}>{count}</div>;
}
