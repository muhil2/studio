'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import * as LucideIcons from 'lucide-react';

type IconName = keyof typeof LucideIcons;

export function ProblemCard({
  title,
  iconName,
  iconColor,
  text,
  imageUrl,
  cardClassName,
}: {
  title: string;
  iconName: IconName;
  iconColor: string;
  text: string;
  imageUrl: string;
  cardClassName?: string;
}) {
  const Icon = LucideIcons[iconName] as LucideIcons.LucideIcon;

  return (
    <div className="group h-80 w-full [transform-style:preserve-3d] [transition:transform_0.8s]">
        <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden] group-hover:[transform:rotateY(180deg)]">
            <Card className={cn("w-full h-full overflow-hidden", cardClassName)}>
                <div className="relative h-full">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                        <span className="text-white text-center font-semibold bg-black/40 p-2 rounded">{title}</span>
                    </div>
                </div>
            </Card>
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden] [transform:rotateY(180deg)] group-hover:[transform:rotateY(0deg)]">
            <Card className={cn("w-full h-full overflow-hidden", cardClassName)}>
                <CardContent className="p-4 bg-white h-full flex flex-col justify-center">
                    <div className="flex items-center justify-center mb-4">
                        <div className="p-3 rounded-full border-2" style={{ borderColor: iconColor }}>
                            <Icon className="w-10 h-10" style={{ color: iconColor }} />
                        </div>
                    </div>
                    <p className="font-semibold text-black text-sm text-left" dangerouslySetInnerHTML={{ __html: text }}></p>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
