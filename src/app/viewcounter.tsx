'use client';

import { Button } from '@/components/ui/button';
import { PlusIcon, RotateCcwIcon } from 'lucide-react';
import { experimental_useOptimistic as useOptimistic } from 'react';
import { cn } from 'tailwind-variants';
import { incrementCounter, resetCounter } from './actions';

export function Counter({ className, count }: { className?: string; count: number }) {
  const [optimisticCount, setOptimisticCount] = useOptimistic(
    { count, loading: false },
    (_, newCount: number) => ({ count: newCount, loading: true }),
  );

  return (
    <>
      <Button
        variant="destructive"
        onClick={() => {
          setOptimisticCount(optimisticCount.count + 1);
          void incrementCounter();
        }}>
        <PlusIcon size={16} />
      </Button>

      <Button
        variant="destructive"
        onClick={() => {
          setOptimisticCount(0);
          void resetCounter();
        }}>
        <RotateCcwIcon size={16} />
      </Button>

      <div
        className={cn(
          'bg-green-800 text-xl',
          className,
          optimisticCount.loading ? 'animate-pulse' : undefined,
        )()}>
        {optimisticCount.count}
      </div>
    </>
  );
}
