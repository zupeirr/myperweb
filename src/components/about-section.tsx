import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="flex justify-center">
            <Image
              src="https://placehold.co/400x400.png"
              alt="A professional headshot of Alex Doe"
              data-ai-hint="professional headshot"
              width={400}
              height={400}
              className="rounded-full object-cover aspect-square transition-transform duration-300 hover:scale-105 shadow-2xl"
            />
        </div>
        <div className="space-y-4">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I'm a passionate developer with a knack for creating elegant solutions in the least amount of time. I have a strong background in both front-end and back-end development, with experience in building scalable and maintainable applications. My journey in tech started with a fascination for how things work, and it has evolved into a career where I get to build them.
          </p>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            When I'm not coding, you can find me exploring the latest technology trends, contributing to open-source projects, or enjoying a good cup of coffee. I believe in continuous learning and am always looking for new challenges to grow my skills.
          </p>
        </div>
      </div>
    </section>
  );
}
