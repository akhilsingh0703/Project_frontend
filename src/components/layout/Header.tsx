'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  GraduationCap,
  Search,
  Scale,
  Menu,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useComparison } from '@/hooks/use-comparison';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { useState } from 'react';

export function Header() {
  const pathname = usePathname();
  const { comparisonList } = useComparison();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/universities', label: 'Universities' },
    { href: '/compare', label: 'Compare' },
    { href: '/about', label: 'About' },
  ];

  const NavLink = ({
    href,
    children,
    isMobile = false,
  }: {
    href: string;
    children: React.ReactNode;
    isMobile?: boolean;
  }) => {
    const isActive = pathname === href;
    const linkClasses = cn(
      'transition-colors hover:text-accent focus:text-accent',
      isActive ? 'text-accent font-semibold' : 'text-foreground/80',
      isMobile ? 'text-lg p-4' : 'text-sm font-medium'
    );

    return (
      <Link href={href} className={linkClasses} onClick={() => setIsMobileMenuOpen(false)}>
        {children}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <GraduationCap className="h-6 w-6 text-accent" />
          <span className="font-bold font-headline tracking-tighter">
            UniFriend
          </span>
        </Link>
        <nav className="hidden md:flex flex-1 items-center space-x-6">
          {navLinks.map((link) => (
            <div key={link.href} className="relative">
              <NavLink href={link.href}>{link.label}</NavLink>
              {link.href === '/compare' && comparisonList.length > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-4 h-5 w-5 justify-center p-0 bg-accent text-accent-foreground"
                >
                  {comparisonList.length}
                </Badge>
              )}
            </div>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="hidden lg:flex flex-1 max-w-sm relative items-center">
            <Input
              type="search"
              placeholder="Search universities..."
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b pb-4 px-6">
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <GraduationCap className="h-6 w-6 text-accent" />
                    <span className="font-bold font-headline tracking-tighter">UniFriend</span>
                  </Link>
                </div>
                <nav className="flex flex-col mt-6 space-y-2 px-6">
                  {navLinks.map((link) => (
                    <div key={link.href} className="relative w-full">
                      <NavLink href={link.href} isMobile>
                        <div className="flex items-center justify-between w-full">
                          <span>{link.label}</span>
                           {link.href === '/compare' && comparisonList.length > 0 && (
                            <Badge
                              variant="destructive"
                              className="h-6 w-6 justify-center p-0 bg-accent text-accent-foreground"
                            >
                              {comparisonList.length}
                            </Badge>
                          )}
                        </div>
                      </NavLink>
                    </div>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
