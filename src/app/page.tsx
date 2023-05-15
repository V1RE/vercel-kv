/* eslint-disable @typescript-eslint/no-misused-promises */
import { Button } from '@/components/ui/button';
import { Counter } from './viewcounter';
import { incrementCounter, resetCounter } from './actions';
import { PlusIcon, RotateCcwIcon } from 'lucide-react';

export const runtime = 'edge';

import { kv } from '@vercel/kv';
async function getCounter() {
  const count = await kv.get('count');

  if (typeof count === 'number') return count;

  await kv.set('count', 0);

  return 0;
}

export default async function Home() {
  return (
    <main className="py-12">
      <div className="container">
        <div>
          <form className="contents" action={incrementCounter}>
            <Button>
              <PlusIcon size={16} />
            </Button>
          </form>

          <form className="contents" action={resetCounter}>
            <Button>
              <RotateCcwIcon size={16} />
            </Button>
          </form>

          <Counter count={await getCounter()} />
        </div>
      </div>
    </main>
  );
}
