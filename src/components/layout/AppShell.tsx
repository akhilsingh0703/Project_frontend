'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  University,
  Scale,
  Sparkles,
  FileText,
  User,
  Settings,
  Menu,
  Search,
  GraduationCap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useComparison } from '@/hooks/use-comparison';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


const navLinks = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/universities', label: 'Universities', icon: University },
  { href: '/compare', label: 'Compare', icon: Scale },
  { href: '/ai-suggestions', label: 'AI Suggestions', icon: Sparkles, badge: 'New' },
  { href: '/my-applications', label: 'My Applications', icon: FileText, count: 3 },
  { href: '/profile', label: 'Profile', icon: User },
];

function NavLink({ href, icon: Icon, label, badge, count }: {
  href: string;
  icon: React.ElementType;
  label: string;
  badge?: string;
  count?: number;
}) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
        isActive && 'bg-muted text-primary'
      )}
    >
      <Icon className="h-4 w-4" />
      {label}
      {badge && <Badge className="ml-auto flex h-6 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">{badge}</Badge>}
      {count && <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">{count}</Badge>}
    </Link>
  );
}


function SidebarNav() {
    return (
        <nav className="grid items-start gap-2 text-sm font-medium">
            {navLinks.map(link => (
                <NavLink key={link.href} {...link} />
            ))}
        </nav>
    );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const { comparisonList } = useComparison();

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <GraduationCap className="h-6 w-6 text-accent" />
              <span className="">UniFriend</span>
            </Link>
          </div>
          <div className="flex-1">
            <SidebarNav />
          </div>
          <div className="mt-auto p-4">
            <Link
              href="/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6 -mx-4">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                    <GraduationCap className="h-6 w-6 text-accent" />
                    <span className="">UniFriend</span>
                    </Link>
                </div>
                <SidebarNav />
                <div className="mt-auto">
                    <Link
                    href="/settings"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                    <Settings className="h-4 w-4" />
                    Settings
                    </Link>
                </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search universities..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
           <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </header>
        <main className="flex-1 bg-muted/20">{children}</main>
      </div>
    </div>
  );
}
