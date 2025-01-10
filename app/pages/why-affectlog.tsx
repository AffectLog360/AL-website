import React from "react";
import Layout from "../components/Layout";

export default function WhyAffectLog() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-sora font-bold">Why AffectLog?</h1>
        <p className="mt-4 text-gray-700">
          In a data-driven world, the biggest hurdle is safely combining data without exposing 
          it to breaches or leftover copies. AffectLog’s ephemeral approach empowers synergy 
          while maintaining strict zero-trust and compliance.
        </p>
        <h2 className="text-2xl font-sora font-semibold mt-8">Common Pain Points</h2>
        <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-2">
          <li><strong>Data Breach Risk:</strong> Persistent copies linger, increasing liability.</li>
          <li><strong>Regulatory Complexities:</strong> GDPR/HIPAA demands auditable logs and privacy controls.</li>
          <li><strong>Lack of Trust:</strong> Traditional sharing forces reliance on 3rd parties or blind trust.</li>
        </ul>
        <h2 className="text-2xl font-sora font-semibold mt-8">Our Ephemeral Solution</h2>
        <p className="mt-3 text-gray-700">
          Data Capsules self-destruct post-analytics, leaving no residue. 
          Only cryptographically signed scripts can run, 
          ensuring no unauthorized data export. Meanwhile, 
          our chain-of-custody log captures every step for total accountability.
        </p>
        <div className="mt-8">
          <a
            href="/solutions"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 font-sora"
          >
            Explore Our Solutions
          </a>
        </div>
      </div>
    </Layout>
  );
}
