import React from "react";
import Layout from "../../components/Layout";
import Link from "next/link";

export default function ResourcesIndex() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h1 className="text-3xl font-sora font-bold mb-6">Resources</h1>
        <p className="text-gray-700 mb-8">
          Dive deeper into ephemeral data collaboration with our case studies, whitepapers, and blog posts.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/resources/case-studies">
            <a className="bg-white p-6 shadow rounded-md hover:shadow-lg">
              <h2 className="text-xl font-sora mb-2">Case Studies</h2>
              <p className="text-sm text-gray-600">
                Real-world success stories from healthcare, finance, and more.
              </p>
            </a>
          </Link>
          <Link href="/resources/whitepapers">
            <a className="bg-white p-6 shadow rounded-md hover:shadow-lg">
              <h2 className="text-xl font-sora mb-2">Whitepapers</h2>
              <p className="text-sm text-gray-600">
                In-depth technical breakdowns and compliance analysis.
              </p>
            </a>
          </Link>
          <Link href="/resources/blog">
            <a className="bg-white p-6 shadow rounded-md hover:shadow-lg">
              <h2 className="text-xl font-sora mb-2">Blog</h2>
              <p className="text-sm text-gray-600">
                Stay updated on ephemeral data trends, zero-trust best practices, and more.
              </p>
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
