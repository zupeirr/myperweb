import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Jane Smith',
    title: 'CEO, TechCorp',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: "woman portrait",
    text: "Suber is an exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are top-notch. It was a pleasure working with them.",
  },
  {
    name: 'John Johnson',
    title: 'Project Manager, Innovate LLC',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: "man portrait",
    text: "Working with Suber was a game-changer for our project. Their expertise in modern web technologies helped us build a product that exceeded our expectations. Highly recommended!",
  },
  {
    name: 'Emily Williams',
    title: 'Lead Designer, Creative Solutions',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: "person portrait",
    text: "Suber has a fantastic eye for design and user experience. They were able to translate our complex design requirements into a beautiful and functional interface. A true professional.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Others Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I've had the privilege of working with some amazing people. Here's what they think.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col bg-card/50">
              <CardContent className="flex flex-1 flex-col justify-between p-6">
                <blockquote className="text-lg italic text-foreground border-l-4 border-primary pl-4">
                  “{testimonial.text}”
                </blockquote>
                <div className="mt-6 flex items-center gap-4 pt-4 border-t">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
