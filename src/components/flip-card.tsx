'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import * as LucideIcons from 'lucide-react';

type IconName = keyof typeof LucideIcons;

export function FlipCard({
  title,
  iconName,
  color,
  frontText,
  backText,
  imageUrl,
  cardClassName,
}: {
  title: string;
  iconName: IconName;
  color: string;
  frontText: string;
  backText: string;
  imageUrl: string;
  cardClassName?: string;
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = LucideIcons[iconName] as LucideIcons.LucideIcon;

  return (
    <div
      className="group w-full h-64 cursor-pointer [perspective:1000px]"
      onClick={() => setIsFlipped(!isFlipped)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsFlipped(!isFlipped)}
      aria-label={`Click to flip card and see details for ${title}`}
    >
      <div
        className={cn(
          'relative w-full h-full rounded-lg shadow-md transition-transform duration-700 [transform-style:preserve-3d]',
          { '[transform:rotateY(180deg)]': isFlipped }
        )}
      >
        {/* Front */}
        <div className="absolute w-full h-full [backface-visibility:hidden] overflow-hidden rounded-lg">
          <Card className={cn("w-full h-full border-2 border-transparent group-hover:border-[var(--glow-color)] transition-all", cardClassName)} style={{ '--glow-color': color } as React.CSSProperties}>
            <Image
              src={imageUrl}
              alt={frontText}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
             <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <span className="text-white text-center font-semibold mt-2 bg-black/40 p-2 rounded">{frontText}</span>
            </div>
          </Card>
        </div>
        {/* Back */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden rounded-lg">
          <Card className={cn("w-full h-full flex flex-col items-center justify-center p-4", cardClassName)} style={{ backgroundColor: color }}>
             <Icon className="w-12 h-12 text-white mb-4" />
            <CardContent className="p-0 text-center">
              <p className="font-semibold text-white">{backText}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
