import Link from 'next/link';
import { Github, Twitter, Linkedin, Code } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border/50 py-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
            <Code className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Suber Sulub. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/zupeirr" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-primary">
            <Github className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="Twitter" className="text-muted-foreground transition-colors hover:text-primary">
            <Twitter className="h-6 w-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/suber-sulub-147897317/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-primary">
            <Linkedin className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
