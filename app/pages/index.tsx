// pages/index.tsx
import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-sora font-extrabold leading-tight">
            Ephemeral Data Capsules for Zero-Trust Analytics
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Combine data across multiple owners without ever losing control. 
            AffectLog ensures everything self-destructs, leaving no leftover footprints.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Link href="/contact">
              <a className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 font-sora">
                Get Started
              </a>
            </Link>
            <Link href="/why-affectlog">
              <a className="bg-gray-100 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-200 font-sora">
                Learn More
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-sora font-bold">Why Choose AffectLog?</h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Self-destructing containers, zero-trust enforcement, and chain-of-custody logs—all in one platform.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-md shadow">
              <h3 className="text-xl font-sora mb-2">Ephemeral Containers</h3>
              <p className="text-sm text-gray-600">
                Data Capsules spin up, do the job, then vanish—no leftover data or risk.
              </p>
            </div>
            <div className="bg-white p-6 rounded-md shadow">
              <h3 className="text-xl font-sora mb-2">Zero-Trust Security</h3>
              <p className="text-sm text-gray-600">
                Cryptographically enforced policies ensure no blind trust among data owners.
              </p>
            </div>
            <div className="bg-white p-6 rounded-md shadow">
              <h3 className="text-xl font-sora mb-2">Proven Compliance</h3>
              <p className="text-sm text-gray-600">
                Cryptographically sealed logs align with GDPR, HIPAA, AI Act, and more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
