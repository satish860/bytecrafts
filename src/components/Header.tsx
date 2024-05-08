import React from 'react';
import { siteConfig, SiteConfig } from '@/lib/utils';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { MainNav } from './mainnav';
import { MobileNav } from './mobile-nav';
import { ModeToggle } from './mode-toggle';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Header: React.FC = () => {
  const { links }: SiteConfig = siteConfig;

  return (
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Link href={links.github} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'w-10 px-0 hidden sm:inline-flex'
                )}
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link href={links.twitter} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'w-10 px-0 hidden sm:inline-flex'
                )}
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <Link href={links.LinkedIn} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'w-10 px-0 hidden sm:inline-flex'
                )}
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </div>
            </Link>
             <ModeToggle />
            <MobileNav /> 
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;