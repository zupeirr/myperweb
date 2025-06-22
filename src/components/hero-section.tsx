import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative flex h-dvh w-full flex-col items-center justify-center text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
      <div className="relative z-10 p-4">
        <h1 className="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Alex Doe
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl md:text-2xl">
          Creative Full-Stack Developer & UI/UX Enthusiast
        </p>
        <p className="mt-6 max-w-3xl text-base text-foreground/80 md:text-lg">
          I build beautiful, responsive, and user-friendly web applications that solve real-world problems.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="font-bold">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-bold">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
       <div className="absolute bottom-10 z-10">
        <Link href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-8 w-8 animate-bounce text-primary" />
        </Link>
      </div>
    </section>
  );
}
