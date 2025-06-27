"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone } from 'lucide-react';

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Message from ${name} (${email})`;
    const mailtoLink = `mailto:Subeersulub10@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind or just want to say hello? I'd love to hear from you.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-5xl grid gap-8 md:grid-cols-2">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Email</h3>
                  <p className="text-muted-foreground">Drop me a line anytime.</p>
                  <a href="mailto:Subeersulub10@gmail.com" className="font-medium text-primary hover:underline">
                    Subeersulub10@gmail.com
                  </a>
                </div>
              </div>
               <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Phone</h3>
                  <p className="text-muted-foreground">Give me a call.</p>
                  <a href="tel:+252636097266" className="font-medium text-primary hover:underline">
                    +252 63 6097266
                  </a>
                </div>
              </div>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Send a Message</CardTitle>
                    <CardDescription>Fill out the form and I'll get back to you.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <Input 
                            placeholder="Your Name" 
                            aria-label="Your Name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                        <Input 
                            type="email" 
                            placeholder="Your Email" 
                            aria-label="Your Email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Textarea 
                            placeholder="Your Message" 
                            rows={5} 
                            aria-label="Your Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                        <Button type="submit" className="w-full">Send Message</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
