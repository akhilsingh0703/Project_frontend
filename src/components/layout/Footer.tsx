import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: '/universities', label: 'Universities' },
    { href: '/compare', label: 'Compare' },
    { href: '/about', label: 'About' },
  ];

  return (
    <footer className="bg-primary/10 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <GraduationCap className="h-6 w-6 text-accent" />
            <span className="font-bold font-headline tracking-tighter">
              UniFriend
            </span>
          </div>
          <nav className="flex items-center space-x-6 text-sm">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} UniFriend. All rights reserved.</p>
          <p className="mt-1">
            Empowering students to make informed decisions for a brighter
            future.
          </p>
        </div>
      </div>
    </footer>
  );
}
