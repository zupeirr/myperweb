import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="flex justify-center items-center">
          <div className="bg-secondary p-4 pb-12 rounded-lg shadow-2xl transform -rotate-3 transition-transform duration-300 hover:rotate-0 hover:scale-105">
            <Image
              src="https://placehold.co/300x300.png"
              alt="A professional headshot of Suber Sulub"
              data-ai-hint="professional headshot"
              width={300}
              height={300}
              className="object-cover aspect-square rounded-md"
            />
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I'm a passionate Software Developer with a strong foundation in full-stack web development, cloud platforms, and agile methodologies. Over the past few years, I’ve built a variety of applications—from interactive frontends to robust backend systems—using technologies like JavaScript, React, Node.js, Python, and Firebase.  I enjoy building user-focused, performance-optimized applications and solving complex technical challenges. I’m also a fast learner who thrives in team environments and is always looking to expand my knowledge and contribute to meaningful projects.  Whether I’m collaborating on a startup idea, freelancing for clients, or contributing to open-source, I bring energy, creativity, and a strong sense of responsibility to every line of code I write.
          </p>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            When I'm not coding, you can find me exploring the latest technology trends, contributing to open-source projects, or enjoying a good cup of coffee. I believe in continuous learning and am always looking for new challenges to grow my skills.
          </p>
          <div className="mt-6">
            <Button asChild variant="secondary">
              <Link href="https://app.enhancv.com/share/cccab4f7/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic" target="_blank" rel="noopener noreferrer">
                Download CV
                <FileText className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
