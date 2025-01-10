import React from "react";
import Layout from "../../components/Layout";
import Link from "next/link";

export default function SolutionsIndex() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h1 className="text-3xl font-sora font-bold mb-6">AffectLog Solutions</h1>
        <p className="text-gray-700 mb-8">
          Our ephemeral Data Capsules adapt to any industry that requires secure, 
          privacy-first data collaboration. Discover specialized use cases below:
        </p>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          <Link href="/solutions/healthcare">
            <a className="bg-white p-6 shadow rounded-md hover:shadow-lg">
              <h2 className="text-xl font-sora font-semibold mb-2">Healthcare</h2>
              <p className="text-gray-600">
                Empower medical research & cross-hospital data synergy without PHI leaks.
              </p>
            </a>
          </Link>
          <Link href="/solutions/finance">
            <a className="bg-white p-6 shadow rounded-md hover:shadow-lg">
              <h2 className="text-xl font-sora font-semibold mb-2">Finance</h2>
              <p className="text-gray-600">
                Combine credit data, detect fraud, and meet AML/KYC compliance with ephemeral runs.
              </p>
            </a>
          </Link>
          <Link href="/solutions/government">
            <a className="bg-white p-6 shadow rounded-md hover:shadow-lg">
              <h2 className="text-xl font-sora font-semibold mb-2">Government</h2>
              <p className="text-gray-600">
                Enable multi-agency data collaboration while safeguarding citizen privacy & sovereignty.
              </p>
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
