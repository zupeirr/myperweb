import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Smartphone, Cloud } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: 'JavaScript, React, Next.js',
    icon: Code,
  },
  {
    title: 'Backend',
    skills: 'Node.js, Python, Java',
    icon: Database,
  },
  {
    title: 'Mobile',
    skills: 'React Native',
    icon: Smartphone,
  },
  {
    title: 'Cloud',
    skills: 'AWS, GCP, Firebase',
    icon: Cloud,
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
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
