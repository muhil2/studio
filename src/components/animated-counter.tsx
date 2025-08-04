'use client';
import { useEffect, useState, useRef } from 'react';

function useInView(ref: React.RefObject<Element>, options?: IntersectionObserverInit) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, options);
    
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if(ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isInView;
}

export function AnimatedCounter({
  targetValue,
  duration = 2000,
  className,
}: {
  targetValue: number;
  duration?: number;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { rootMargin: '0px 0px -100px 0px' });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = targetValue;
      if (start === end) return;

      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (!startTime) {
          startTime = timestamp;
        }
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const newCount = Math.floor(progress * (end - start) + start);
        setCount(newCount);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setCount(end); // Ensure it ends exactly on the target value
        }
      };

      requestAnimationFrame(step);
    }
  }, [targetValue, duration, isInView]);

  return <span ref={ref} className={className}>{count.toLocaleString()}</span>;
}
