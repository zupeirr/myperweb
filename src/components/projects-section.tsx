import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Project Alpha',
    description: 'An innovative e-commerce platform with a focus on user experience and performance.',
    image: 'https://placehold.co/600x400.png',
    imageHint: "e-commerce website",
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Project Beta',
    description: 'A social media dashboard for content creators to track their engagement and growth.',
    image: 'https://placehold.co/600x400.png',
    imageHint: "dashboard analytics",
    tags: ['React', 'Firebase', 'Chart.js', 'Material UI'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Project Gamma',
    description: 'A mobile-first recipe discovery app with personalized recommendations.',
    image: 'https://placehold.co/600x400.png',
    imageHint: "recipe app",
    tags: ['React Native', 'GraphQL', 'Node.js', 'PostgreSQL'],
    liveUrl: '#',
    repoUrl: '#',
  },
   {
    title: 'Project Delta',
    description: 'A productivity tool to manage tasks and collaborate with team members in real-time.',
    image: 'https://placehold.co/600x400.png',
    imageHint: "task management",
    tags: ['Vue.js', 'WebSockets', 'MongoDB', 'Express'],
    liveUrl: '#',
    repoUrl: '#',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of projects that I'm proud of. Each one was a unique challenge.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  data-ai-hint={project.imageHint}
                  width={600}
                  height={400}
                  className="w-full object-cover aspect-[3/2]"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                <CardDescription className="mt-2">{project.description}</CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <div className="mt-6 flex justify-end gap-4">
                  <Button asChild variant="outline">
                    <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
