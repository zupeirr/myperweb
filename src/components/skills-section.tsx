import { Code, Database, Wind, Bot, Palette, Component, Server } from 'lucide-react';

const skills = [
  { name: 'JavaScript', icon: Code },
  { name: 'TypeScript', icon: Code },
  { name: 'React', icon: Component },
  { name: 'Next.js', icon: Component },
  { name: 'Node.js', icon: Server },
  { name: 'Python', icon: Code },
  { name: 'SQL', icon: Database },
  { name: 'MongoDB', icon: Database },
  { name: 'Tailwind CSS', icon: Wind },
  { name: 'GraphQL', icon: Code },
  { name: 'Docker', icon: Bot },
  { name: 'Figma', icon: Palette },
];

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">My Skillset</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the technologies and tools I work with. I'm always eager to learn more.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <div key={skill.name} className="group flex flex-col items-center justify-center gap-2 rounded-lg border bg-card p-4 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-accent/10">
              <skill.icon className="h-10 w-10 text-primary transition-transform duration-300 group-hover:scale-110" />
              <p className="text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
