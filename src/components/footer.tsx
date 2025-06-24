"use client";

import Link from 'next/link';
import { Github, Send, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Footer() {
  const [year, setYear] = useState(() => new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full bg-background border-t border-border/50 py-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">&copy; {year} Suber Sulub. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/zupeirr" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-primary">
            <Github className="h-6 w-6" />
          </Link>
          <Link href="https://t.me/thezupeirr" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-muted-foreground transition-colors hover:text-primary">
            <Send className="h-6 w-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/suber-sulub-147897317/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-primary">
            <Linkedin className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
