// app/page.tsx
"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center px-6">
        <h1 className="text-4xl font-extrabold mb-4 font-sora">
          AffectLog Ephemeral Data Capsules for Zero-Trust Analytics
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Combine data across owners while ensuring everything self-destructs after use.
        </p>
        <div className="mt-6 space-x-4">
          <Link href="/contact">
            <a className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 font-sora">
              Get Started
            </a>
          </Link>
          <Link href="/why-affectlog">
            <a className="inline-block bg-gray-100 text-gray-800 px-6 py-3 rounded hover:bg-gray-200 font-sora">
              Learn More
            </a>
          </Link>
        </div>
      </section>

      {/* Some Quick Features */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-sora font-bold text-center mb-8">
            Why Choose AffectLog?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white p-6 shadow rounded">
              <h3 className="font-sora text-xl mb-2">Ephemeral Containers</h3>
              <p className="text-gray-600">
                Once analytics finish, containers vanish—leaving zero leftover data.
              </p>
            </div>
            <div className="bg-white p-6 shadow rounded">
              <h3 className="font-sora text-xl mb-2">Zero-Trust</h3>
              <p className="text-gray-600">
                Policy-based encryption ensures data owners never blindly trust each other.
              </p>
            </div>
            <div className="bg-white p-6 shadow rounded">
              <h3 className="font-sora text-xl mb-2">Chain-of-Custody Logs</h3>
              <p className="text-gray-600">
                Every ephemeral job is cryptographically recorded for compliance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
