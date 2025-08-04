'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export function ContactForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const phoneNumber = '8801627145339'; // The number from the prompt
    const text = `Hello Muhil, my name is ${values.name}. My email is ${values.email}. \n\nMessage: ${values.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Redirecting to WhatsApp",
      description: "Your message is ready to be sent!",
    });

    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Your Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Your Email</FormLabel>
              <FormControl>
                <Input placeholder="john.doe@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Your Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell me how I can help you..." {...field} rows={4} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full font-bold bg-green-500 hover:bg-green-600 text-white" size="lg">
          <Send className="mr-2 h-4 w-4" />
          Send Message via WhatsApp
        </Button>
      </form>
    </Form>
  );
}
