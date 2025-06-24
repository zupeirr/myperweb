import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Users, Award } from 'lucide-react';

const stats = [
  {
    icon: Briefcase,
    title: 'Completed',
    value: '15+ Finished Projects',
  },
  {
    icon: Users,
    title: 'Clients',
    value: '50+ Happy Clients',
  },
  {
    icon: Award,
    title: 'Experience',
    value: '3+ Years in the field',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of my key achievements.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.title} className="flex flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="flex flex-col items-center gap-4 p-0">
                <stat.icon className="h-12 w-12 text-primary" />
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">{stat.title}</h3>
                  <p className="text-muted-foreground">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
