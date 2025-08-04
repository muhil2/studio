'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export function FlipCard({
  problem,
  imageUrl,
}: {
  problem: string;
  imageUrl: string;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group w-full h-56 cursor-pointer [perspective:1000px]"
      onClick={() => setIsFlipped(!isFlipped)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsFlipped(!isFlipped)}
      aria-label="Click to flip card and see details"
    >
      <div
        className={cn(
          'relative w-full h-full rounded-lg shadow-md transition-transform duration-700 [transform-style:preserve-3d]',
          { '[transform:rotateY(180deg)]': isFlipped }
        )}
      >
        {/* Front */}
        <div className="absolute w-full h-full [backface-visibility:hidden]">
          <Card className="w-full h-full overflow-hidden">
            <Image
              src={imageUrl}
              alt="Card Background"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              data-ai-hint="work student"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
             <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-lg bg-black/30 p-2 rounded">Click to Reveal</span>
            </div>
          </Card>
        </div>
        {/* Back */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <Card className="w-full h-full flex items-center justify-center bg-primary text-primary-foreground">
            <CardContent className="p-4 text-center">
              <p className="font-semibold">{problem}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
