import Image from 'next/image';
import Link from 'next/link';
import {
  Award,
  BookOpen,
  BrainCircuit,
  Briefcase,
  CheckCircle,
  Clock,
  Code,
  Facebook,
  FileText,
  Globe,
  GraduationCap,
  HeartHandshake,
  Lock,
  Mail,
  MapPin,
  MessageSquare,
  Moon,
  PenTool,
  Phone,
  Rocket,
  ShieldCheck,
  Smile,
  Star,
  Target,
  TrendingDown,
  Users,
  Zap,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react';

import { AnimatedCounter } from '@/components/animated-counter';
import { ContactForm } from '@/components/contact-form';
import { FlipCard } from '@/components/flip-card';
import { TestimonialSlider } from '@/components/testimonial-slider';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const heroStats = [
  { value: 790, label: 'Projects completed', suffix: '+' },
  { value: 300, label: 'Active Clients', suffix: '+' },
  { value: 4, label: 'Years of Experience' },
  { value: 6, label: 'Countries Served', suffix: '+' },
];

const problems = [
  {
    title: 'Problem 1',
    iconName: 'TrendingDown',
    color: 'hsl(var(--neon-red))',
    frontText: 'Insufficient Time for Assignments',
    backText:
      'International students often work part-time (20–30 hrs/week) besides full-time studies. 63% say they barely get 2–3 hours a day for academic work. | Result: last-minute submissions & lower grades.',
  },
  {
    title: 'Problem 2',
    iconName: 'BrainCircuit',
    color: 'hsl(var(--neon-purple))',
    frontText: 'Academic Stress & Mental Fatigue',
    backText:
      'Balancing studies, jobs, and living abroad causes high mental strain. 7 out of 10 international students report burnout due to assignment pressure. | Result: anxiety, poor focus, lack of motivation.',
  },
  {
    title: 'Problem 3',
    iconName: 'Moon',
    color: 'hsl(var(--neon-blue))',
    frontText: 'Sleepless & Exhausting Routines',
    backText:
      'Many survive on <5 hrs of sleep due to tight deadlines and multiple tasks. 54% admit pulling all-nighters before submission dates. | Result: low-quality rushed assignments.',
  },
  {
    title: 'Problem 4',
    iconName: 'AlertTriangle',
    color: 'hsl(var(--primary))',
    frontText: 'Strict Formatting & Referencing Rules',
    backText:
      'Universities abroad are very strict about APA/Harvard/IEEE formats. 47% students lose marks only because of formatting errors. | Result: dissatisfied students despite hard work.',
  },
  {
    title: 'Problem 5',
    iconName: 'Clock',
    color: 'hsl(var(--neon-green))',
    frontText: 'Overlapping Deadlines Every Month',
    backText:
      'Multiple courseworks are often due within the same week. 72% submit assignments just 1–2 hours before the deadline. | Result: stress, panic & compromised quality.',
  },
];

const majorBenefits = [
    {
      icon: Lock,
      title: 'Total Privacy & Confidentiality',
      description: 'Your identity and work stay 100% anonymous — we never reveal your assignments to universities, friends, or anyone else.',
      color: 'hsl(var(--neon-cyan))',
    },
    {
      icon: BrainCircuit,
      title: '76+ Subject-Specialist Writers',
      description: 'A powerful team of experienced writers from different academic majors to handle any type of assignment with expertise.',
      color: 'hsl(var(--neon-purple))',
    },
    {
      icon: BookOpen,
      title: 'One-Stop Academic Support Hub',
      description: 'From essays to theses — get every kind of academic work done under one roof, fast and professionally.',
      color: 'hsl(var(--neon-blue))',
    },
  ];

  const keyBenefits = [
    { icon: ShieldCheck, text: 'Free Turnitin Reports Guaranteeing 0% AI & Plagiarism Detection', color: 'hsl(var(--neon-green))' },
    { icon: Target, text: 'In-depth Research & Data-Driven Analytics for Authentic, High-Quality Content', color: 'hsl(var(--neon-red))' },
    { icon: Clock, text: 'Always On-Time — Your Deadlines Are My Priority', color: 'hsl(var(--neon-blue))' },
    { icon: HeartHandshake, text: '24/7 Friendly Support Designed Especially for Students', color: 'hsl(var(--neon-purple))' },
    { icon: Star, text: 'Top Grades Delivered at a Price Every Student Can Afford', color: 'hsl(var(--primary))' },
  ];

const impactData = [
    {
        icon: Rocket,
        title: '40% Faster Completion',
        description: 'Complete assignments in less than 24 hours...',
        color: 'hsl(var(--neon-cyan))',
    },
    {
        icon: Smile,
        title: 'Up to 30% Less Stress',
        description: 'Outsourcing assignments...',
        color: 'hsl(var(--neon-green))',
    },
    {
        icon: TrendingDown,
        title: '1.5x Higher Grade Improvement',
        description: 'Higher-quality, professionally completed...',
        color: 'hsl(var(--neon-pink))',
    },
    {
        icon: Lock,
        title: '100% Secure and Anonymous',
        description: 'Full confidentiality...',
        color: 'hsl(var(--neon-blue))',
    },
];

const services = [
  {
    title: 'Academic Writing',
    description: 'Expertly written essays, reports, and papers on any subject.',
    icon: PenTool,
    href: '#contact',
  },
  {
    title: 'Thesis & Research Paper',
    description: 'Comprehensive support for your thesis and research projects.',
    icon: BookOpen,
    href: 'https://wa.me/8801627145339?text=Hi%20Muhil,%20I%27d%20like%20to%20inquire%20about%20your%20Thesis%20writing%20services.',
  },
  {
    title: 'Software Development',
    description: 'Custom software solutions and coding assignments.',
    icon: Code,
    href: '#contact',
  },
  {
    title: 'Technical Services',
    description: 'Specialized technical writing and documentation.',
    icon: FileText,
    href: '#contact',
  },
  {
    title: 'Proofreading & Editing',
    description: 'Meticulous proofreading to perfect your documents.',
    icon: Award,
    href: '#contact',
  },
  {
    title: 'Presentation Design',
    description: 'Visually stunning presentations for academic and professional needs.',
    icon: GraduationCap,
    href: '#contact',
  },
];

const testimonials = [
  { name: 'Rifat Imtiaz', university: 'University of Toronto (Canada)', quote: "I can't thank you enough! … Forever grateful bhai..", initials: 'RI' },
  { name: 'Rumana Tabassum', university: 'NUS (Singapore)', quote: 'I was struggling … Thanks again!', initials: 'RT' },
  { name: 'Mona Hossain', university: 'Oxford (UK)', quote: "I was so stressed … Couldn’t have done it without you.", initials: 'MH' },
  { name: 'Ahmed Khan', university: 'Aga Khan University (Pakistan)', quote: 'Assamualikum brother … truly appreciate your help.', initials: 'AK' },
  { name: 'Faruq Islam Taj', university: 'University of Sydney (Australia)', quote: "I was about to give up … you’re nothing but an angel bro", initials: 'FT' },
  { name: 'Mia Harris', university: 'UBC (Canada)', quote: 'I was struggling … so thankful for your support!', initials: 'MH' },
  { name: 'Rakesh Gupta', university: 'Stanford (USA)', quote: 'You took a huge burden off… I recommend everyone.', initials: 'RG' },
  { name: 'Sophia Lee', university: 'University of Melbourne (Australia)', quote: 'Your service was exactly what I needed … I’m so grateful.', initials: 'SL' },
  { name: 'Chitrokor Rahman', university: 'University of Manchester (UK)', quote: "Never thought … I couldn't ask for more!", initials: 'CR' },
  { name: 'Abrar Masum', university: 'University of Melbourne', quote: 'Thanks bhaiya … thanks a lot!!', initials: 'AM' },
];

const socialLinks = [
  { icon: MessageSquare, href: 'https://wa.me/qr/S4BGHXIR6WOKN1', 'aria-label': 'WhatsApp' },
  { icon: Facebook, href: 'https://www.facebook.com/muhil.hadi.2024', 'aria-label': 'Facebook' },
  { icon: Mail, href: 'mailto:assignmentyess@gmail.com', 'aria-label': 'Gmail' },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        <section id="home" className="relative bg-sky-100 text-black py-16 md:py-24 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 p-4 text-center z-10">
            <p className="font-headline text-2xl md:text-3xl font-bold text-primary">
              “While You Progress in Life, I’ll Progress Your Assignments”
            </p>
          </div>
          <div className="container mx-auto px-4 relative z-0 mt-16">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="font-headline text-6xl md:text-8xl font-extrabold text-black">
                  Muhil Hadi
                </h1>
                <p className="mt-2 text-2xl md:text-3xl text-gray-600 font-semibold">
                  Professional Assignment Writer
                </p>
                <div className="mt-6 bg-primary/10 border-l-4 border-primary text-primary-foreground p-6 rounded-lg shadow-md">
                  <p className="text-sm md:text-base text-black">
                    I'm a dedicated professional living in Bangladesh with expertise in academic writing, software development, and technical services. With a keen eye for detail and commitment to excellence, I deliver high-quality solutions tailored to meet your specific needs and requirements. I also don't take any advance payments — I will let you see the overall quality of the work first. And of course I’m from Bangladesh, so the charge will be very less! Thank you!!!!!
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="flex items-center gap-3">
                      <div className="text-4xl font-bold text-primary">
                        <AnimatedCounter targetValue={stat.value} />
                        {stat.suffix}
                      </div>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
                 <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
                  <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#1EBE57] text-white font-bold shadow-lg transition-transform transform hover:scale-105 glow-border" style={{'--glow-color': 'rgba(0,0,0,0.3)'} as React.CSSProperties}>
                    <Link href="https://wa.me/qr/S4BGHXIR6WOKN1" target="_blank">
                      Hire Me Through Whatsapp
                    </Link>
                  </Button>
                  <Button asChild size="lg" className="bg-[#1877F2] hover:bg-[#166FE5] text-white font-bold shadow-lg transition-transform transform hover:scale-105 glow-border" style={{'--glow-color': 'rgba(0,0,0,0.3)'} as React.CSSProperties}>
                    <Link href="https://www.facebook.com/muhil.hadi.2024" target="_blank">
                      Hire Me Through Facebook
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end">
                <div className="relative w-60 h-60 md:w-80 md:h-80">
                  <div
                    className="relative w-full h-full rounded-full border-8 border-primary"
                  >
                    <Image
                      src="https://i.imgur.com/QllfG6k.jpeg"
                      alt="Muhil Hadi"
                      width={320}
                      height={320}
                      className="rounded-full object-cover w-full h-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="problems" className="py-16 md:py-24 bg-white text-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center font-headline text-foreground">
              The Problem With Submitting Assignments No One Talks About
            </h2>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {problems.map((problem, index) => (
                <FlipCard
                  key={index}
                  title={problem.title}
                  iconName={problem.iconName as keyof typeof import('lucide-react')}
                  color={problem.color}
                  frontText={problem.frontText}
                  backText={problem.backText}
                  imageUrl="https://placehold.co/400x400.png"
                />
              ))}
            </div>
          </div>
        </section>
        
        <section id="services" className="py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center font-headline text-white">
              My Services
            </h2>
            <p className="mt-4 text-center text-gray-400 max-w-2xl mx-auto">
              Offering a range of professional services to help you succeed academically and professionally.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link href={service.href} key={service.title} target={service.href.startsWith('http') ? '_blank' : '_self'} className="group">
                  <Card className="h-full text-center bg-gray-900 border-gray-800 text-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        <div className="p-4 bg-primary/20 rounded-full">
                          <service.icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <CardTitle className="font-headline text-white">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400">{service.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="solution" className="py-16 md:py-24 bg-white text-blue-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center font-headline text-black">
              Our Solution
            </h2>
            <p className="mt-2 text-center text-muted-foreground italic">
              Revolutionary Assignment Writing Platform
            </p>
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 flex flex-col gap-6">
                {majorBenefits.map((benefit) => (
                  <Card key={benefit.title} className="group p-6 border-2 bg-blue-950 text-white border-transparent hover:border-[var(--glow-color)] hover:shadow-lg transition-all" style={{ '--glow-color': benefit.color } as React.CSSProperties}>
                      <div className="flex items-center gap-4 mb-3">
                          <benefit.icon className="w-8 h-8" style={{ color: benefit.color }}/>
                          <h3 className="text-xl font-bold font-headline">{benefit.title}</h3>
                      </div>
                      <p className="text-gray-300">{benefit.description}</p>
                  </Card>
                ))}
              </div>
              <div className="lg:col-span-2">
                <div className="text-center">
                  <h3 className="inline-block text-2xl font-bold font-headline text-black border-b-4 border-primary pb-2">
                    Key Benefits
                  </h3>
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  {keyBenefits.map((benefit) => (
                    <Card key={benefit.text} className="group flex items-center p-4 border-2 border-transparent hover:border-[var(--glow-color)] hover:shadow-md transition-all" style={{'--glow-color': benefit.color} as React.CSSProperties}>
                        <benefit.icon className="w-10 h-10 mr-4 flex-shrink-0" style={{color: benefit.color}} />
                        <p className="font-semibold text-black">{benefit.text}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="impact" className="py-16 md:py-24 bg-black">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white font-headline">Service Impact</h2>
                <p className="mt-2 text-center text-gray-400 italic">Your Assignments—Handled Like Magic, Delivered Overnight</p>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {impactData.map((item, index) => (
                        <div key={index} className="group relative p-6 rounded-lg bg-gray-900 border border-gray-700 text-center transition-all duration-300 hover:bg-gray-800"
                            style={{ '--glow-color': item.color } as React.CSSProperties}>
                            <div className="absolute -inset-px rounded-lg bg-[var(--glow-color)] opacity-0 group-hover:opacity-75 blur transition-opacity duration-300"></div>
                            <div className="relative">
                                <div className="flex justify-center mb-4">
                                    <div className="p-3 rounded-full bg-gray-800 group-hover:bg-gray-700 transition-colors">
                                        <item.icon className="w-8 h-8" style={{ color: item.color }} />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="testimonials" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center font-headline text-foreground">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-center text-muted-foreground italic max-w-2xl mx-auto">
              Success Stories from Students Using Our Service
            </p>
            <div className="mt-12">
              <TestimonialSlider testimonials={testimonials} />
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center font-headline text-foreground">
              Get In Touch
            </h2>
            <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
              Ready to start? Have a question? Reach out to me, and I'll get back to you promptly.
            </p>
            <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Email</h3>
                    <a href="mailto:assignmentyess@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      assignmentyess@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                   <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Phone / WhatsApp</h3>
                    <a href="tel:+8801627145339" className="text-muted-foreground hover:text-primary transition-colors">
                      +8801627145339
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Location</h3>
                    <p className="text-muted-foreground">Bangladesh</p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-4">Connect With Me</h3>
                   <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <Link href={social.href} key={social.href} target="_blank" aria-label={social['aria-label']}>
                         <Button variant="outline" size="icon" className="h-12 w-12 rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                            <social.icon className="h-6 w-6" />
                          </Button>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-accent text-accent-foreground py-6">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Muhil Hadi. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
