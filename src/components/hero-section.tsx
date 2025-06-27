import Image from 'next/image';
import Link from 'next/link';
import { Github, Send, Linkedin, Code, Server, Database } from 'lucide-react';
import { Playfair_Display as Playfair, PT_Sans } from 'next/font/google';

const playfair = Playfair({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

const socialLinks = [
  { icon: Github, href: 'https://github.com/zupeirr', label: 'GitHub' },
  { icon: Send, href: 'https://t.me/thezupeirr', label: 'Telegram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/suber-sulub-147897317/', label: 'LinkedIn' },
];

export function HeroSection() {
  return (
    <section id="home" className="w-full min-h-dvh flex items-center bg-background text-foreground">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4 md:px-6 py-24">
        <div className="space-y-12">
          <div>
            <p className={`${ptSans.className} text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4`}>
              WELCOME TO MY WORLD
            </p>
            <h1 className={`${playfair.className} text-5xl md:text-6xl font-bold tracking-tight`}>
              Hi, I'm <span className="text-primary">Suber Sulub</span>
              <br />a Professional Creative Full-Stack Developer.
            </h1>
            <p className={`${ptSans.className} mt-6 text-muted-foreground text-lg`}>
              I'm a passionate and creative full-stack developer with a knack for building beautiful and functional web applications from the ground up.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
            <div>
              <h2 className={`${ptSans.className} text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4`}>
                Find with me
              </h2>
              <div className="flex gap-4">
                {socialLinks.map(link => (
                  <Link href={link.href} key={link.label} target="_blank" rel="noopener noreferrer"
                    className="h-14 w-14 rounded-lg bg-card shadow-md hover:shadow-lg transition-shadow flex items-center justify-center text-muted-foreground hover:text-primary">
                    <link.icon className="h-6 w-6" />
                    <span className="sr-only">{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className={`${ptSans.className} text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4`}>
                Best skill on
              </h2>
              <div className="flex gap-4">
                <div className="h-14 w-14 rounded-lg bg-card shadow-md hover:shadow-lg transition-shadow flex items-center justify-center text-muted-foreground">
                  <Code className="h-7 w-7" />
                </div>
                <div className="h-14 w-14 rounded-lg bg-card shadow-md hover:shadow-lg transition-shadow flex items-center justify-center text-muted-foreground">
                  <Server className="h-7 w-7" />
                </div>
                <div className="h-14 w-14 rounded-lg bg-card shadow-md hover:shadow-lg transition-shadow flex items-center justify-center text-muted-foreground">
                  <Database className="h-7 w-7" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <div className="relative w-[450px] h-[550px]">
            <div className="absolute inset-0 border-4 border-primary/50 rounded-lg transform rotate-6" />
            <Image
              src="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxkZXZlbG9wZXJ8ZW58MHx8fHwxNzUxMDM4MTM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Suber Sulub"
              data-ai-hint="developer coding"
              width={450}
              height={550}
              className="rounded-lg shadow-2xl object-cover relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
