// components/Layout.tsx
import React from "react";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <a className="text-2xl font-sora font-bold">AffectLog</a>
          </Link>
          <nav className="space-x-6 font-sora">
            <Link href="/why-affectlog">Why AffectLog</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/technology">Technology</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-gray-50 text-center py-4 font-sora text-sm mt-8">
        © {new Date().getFullYear()} AffectLog — All rights reserved.
      </footer>
    </div>
  );
}
