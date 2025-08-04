'use client';
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  university: string;
  quote: string;
  initials: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  const startAnimation = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scroll = () => {
      slider.scrollLeft += 0.5;
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
      animationFrameRef.current = requestAnimationFrame(scroll);
    };
    animationFrameRef.current = requestAnimationFrame(scroll);
  };

  const stopAnimation = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    startAnimation();
    slider.addEventListener('mouseenter', stopAnimation);
    slider.addEventListener('mouseleave', startAnimation);

    return () => {
      stopAnimation();
      if (slider) {
        slider.removeEventListener('mouseenter', stopAnimation);
        slider.removeEventListener('mouseleave', startAnimation);
      }
    };
  }, [testimonials]);

  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative w-full overflow-hidden">
        <div 
            ref={sliderRef}
            className="flex w-max"
        >
        {allTestimonials.map((testimonial, index) => (
          <Card key={index} className="w-80 mx-4 flex-shrink-0 p-6 shadow-lg rounded-xl">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <Avatar className="h-14 w-14 mr-4 border-2 border-primary">
                  <AvatarFallback className="bg-primary/20 text-primary font-bold text-xl">{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold text-lg text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.university}</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-foreground/80 italic text-sm">
                "{testimonial.quote}"
              </blockquote>
            </CardContent>
          </Card>
        ))}
      </div>
       <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </div>
  );
}
