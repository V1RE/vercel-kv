/* eslint-disable @typescript-eslint/no-misused-promises */
import { Button } from '@/components/ui/button';
import { Counter } from './viewcounter';
import { incrementCounter, resetCounter } from './actions';
import { PlusIcon, RotateCcwIcon } from 'lucide-react';

export const runtime = 'edge';

export default function Home() {
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

          {/* @ts-expect-error Server components */}
          <Counter />
        </div>
      </div>
    </main>
  );
}
