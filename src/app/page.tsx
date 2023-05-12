import { Button } from '@/components/ui/button';
import { ViewCounter } from './viewcounter';

export default function Home() {
  return (
    <main className="py-12">
      <div className="container">
        <Button>Hello</Button>

        <ViewCounter />
      </div>
    </main>
  );
}