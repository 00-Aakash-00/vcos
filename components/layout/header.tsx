"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-opacity-80 bg-ink-900 border-b border-ink-600 border-opacity-50">
      <div className="max-w-7xl mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white-100 rounded-sm"></div>
            </div>
            <span className="text-2xl font-space-grotesk font-bold">VCOS</span>
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
