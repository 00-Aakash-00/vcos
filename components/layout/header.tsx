"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-opacity-80 bg-ink-900 border-b border-ink-600 border-opacity-50">
      <div className="max-w-7xl mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo-vcos-white.png"
              alt="VCOS Logo"
              width={120}
              height={40}
              priority
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#"
              className="text-ink-300 hover:text-accent-a transition-colors"
            >
              Sign In
            </Link>
            <Button className="gradient-primary hover:scale-105 transition-transform glow-shadow">
              Get Flow
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
