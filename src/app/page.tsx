import Image from 'next/image';
import Link from 'next/link';
import {
  Award,
  BookOpen,
  Briefcase,
  Code,
  Facebook,
  FileText,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  MessageSquare,
  PenTool,
  Phone,
  Star,
  Users,
} from 'lucide-react';

import { AnimatedCounter } from '@/components/animated-counter';
import { ContactForm } from '@/components/contact-form';
import { FlipCard } from '@/components/flip-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const stats = [
  { value: 790, label: 'Projects Completed', icon: Briefcase },
  { value: 300, label: 'Active Clients', icon: Users },
  { value: 98, label: 'Customer Satisfaction', icon: Star, suffix: '%' },
  { value: 6, label: 'Countries Served', icon: Globe },
];

const problems = [
  'A study shows after every 8hr work time a person needs at least 5 hours of break to focus again, whereas a lot of students have their work pressure and cannot get enough time to sleep let alone rest',
  'Deadlines are very near and lecture has not been completed',
  'Not getting good marks',
  'Cannot focus on other productive works rather than study & job',
  'Cannot get the time to hangout with buddies',
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
    href: 'https://drive.google.com/drive/folders/1-13R5GwFeLGlZhCNAiE3SKGJ1UU0yaBW?usp=sharing',
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

const portfolio = [
  {
    title: 'Thesis & Research Paper',
    description: 'A collection of high-quality academic research work.',
    href: 'https://drive.google.com/drive/folders/1-13R5GwFeLGlZhCNAiE3SKGJ1UU0yaBW?usp=sharing',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'research paper',
  },
  {
    title: 'Web App Development',
    description: 'Custom web application for a small business.',
    href: '#',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'web application',
  },
  {
    title: 'Case Study Analysis',
    description: 'In-depth analysis for a business management course.',
    href: '#',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'business analysis',
  },
];

const testimonials = [
  {
    name: 'Ariyan Hossain',
    role: 'MBA student at Kings Own Institute',
    quote: 'Thanks Bhaiya I have completed all of my course without getting any academic pressure',
    avatar: 'AH',
  },
  {
    name: 'Anamul Hauque',
    role: '8th semester student at Kings Own Institute',
    quote: 'I could not do assignments after returning home from my job, thank you soo much for handling all of my courses',
    avatar: 'AH',
  },
];

const socialLinks = [
  { icon: MessageSquare, href: 'https://wa.me/qr/S4BGHXIR6WOKN1', 'aria-label': 'WhatsApp' },
  { icon: Facebook, href: 'https://www.facebook.com/muhil.hadi.2024', 'aria-label': 'Facebook' },
  { icon: Mail, href: 'mailto:assignmentyess@gmail.com', 'aria-label': 'Gmail' },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground text-center p-3 font-bold text-sm md:text-base sticky top-0 z-50 shadow-md">
        Completing Your Toughest Assignments Within a Day
      </header>

      <main className="flex-grow">
        <section id="home" className="py-16 md:py-24 text-center">
          <div className="container mx-auto px-4">
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-foreground">
              Muhil Hadi
            </h1>
            <p className="mt-2 text-xl md:text-2xl text-muted-foreground font-semibold">
              Professional Assignment Writer
            </p>
            <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-foreground/80">
              I'm a dedicated professional living in Bangladesh with expertise in academic writing, software development, and technical services. With a keen eye for detail and commitment to excellence, I deliver high-quality solutions tailored to meet your specific needs and requirements. I also don’t take any advance payments — I will let you see the overall quality of the work first. And of course I’m from Bangladesh, so the charge will be very less! Thank you!!!!!
            </p>

            <div className="mt-12 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center">
                  <stat.icon className="w-10 h-10 text-primary mb-2" />
                  <div className="text-4xl font-bold text-foreground">
                    <AnimatedCounter targetValue={stat.value} />
                    {stat.suffix}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#1EBE57] text-white font-bold shadow-lg transition-transform transform hover:scale-105">
                <Link href="https://wa.me/qr/S4BGHXIR6WOKN1" target="_blank">
                  Hire Me
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="font-bold shadow-lg transition-transform transform hover:scale-105">
                <Link href="https://www.facebook.com/muhil.hadi.2024" target="_blank">
                  Hire Me Through Facebook
                </Link>
              </Button>
            </div>
            
            <p className="mt-8 font-headline text-lg font-bold text-foreground/90">
              4 Years of Experience Completing Assignments All Over the World
            </p>

            <div className="mt-12 flex justify-center">
              <div className="relative w-60 h-60 md:w-72 md:h-72">
                <Image
                  src="https://i.imgur.com/QllfG6k.jpeg"
                  alt="Muhil Hadi"
                  width={288}
                  height={288}
                  className="rounded-full object-cover border-4 border-primary shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="problems" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center font-headline text-foreground">
              Facing These Challenges?
            </h2>
            <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
              Students often juggle multiple responsibilities, leading to common struggles. See if any of these sound familiar.
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {problems.map((problem, index) => (
                <FlipCard
                  key={index}
                  problem={problem}
                  imageUrl="https://i.imgur.com/LIjORL2.jpeg"
                />
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center font-headline text-foreground">
              My Services
            </h2>
            <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
              Offering a range of professional services to help you succeed academically and professionally.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link href={service.href} key={service.title} target={service.href.startsWith('http') ? '_blank' : '_self'} className="group">
                  <Card className="h-full text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        <div className="p-4 bg-primary/10 rounded-full">
                          <service.icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <CardTitle className="font-headline">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center font-headline text-foreground">
              My Portfolio
            </h2>
            <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
              A glimpse into the quality and variety of work I deliver.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolio.map((item) => (
                <Link href={item.href} key={item.title} target="_blank" className="group">
                  <Card className="overflow-hidden h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="relative h-48">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        data-ai-hint={item.dataAiHint}
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="font-headline">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center font-headline text-foreground">
              Client Testimonials
            </h2>
            <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
              Hear what my clients have to say about my services.
            </p>
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarFallback className="bg-primary text-primary-foreground font-bold">{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-foreground/80 italic border-l-4 border-primary pl-4">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-8">
              <Image
                src="https://i.imgur.com/5qIpd8i.png"
                alt="Testimonial screenshot 1"
                width={300}
                height={600}
                className="rounded-lg shadow-lg border-2 border-border object-contain"
                data-ai-hint="mobile screenshot"
              />
              <Image
                src="https://i.imgur.com/3pjx9eC.png"
                alt="Testimonial screenshot 2"
                width={300}
                height={600}
                className="rounded-lg shadow-lg border-2 border-border object-contain"
                data-ai-hint="chat message"
              />
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
