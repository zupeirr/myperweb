import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Cloud } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: 'HTML, JavaScript, TypeScript, React, Next.js, Tailwind CSS',
    icon: Code,
  },
  {
    title: 'Backend',
    skills: 'Node.js, Java, RESTful APIs, JSON',
    icon: Database,
  },
  {
    title: 'Cloud',
    skills: 'AWS, Firebase, Docker, Docker Compose',
    icon: Cloud,
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here's a look at the technologies and tools I work with across the stack.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                  <p className="mt-2 text-muted-foreground">{category.skills}</p>
                </div>
                <category.icon className="h-10 w-10 text-primary" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
