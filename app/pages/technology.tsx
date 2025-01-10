import React from "react";
import Layout from "../components/Layout";

export default function Technology() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-16 px-6">
        <h1 className="text-3xl font-sora font-bold mb-6">
          The Technology Behind AffectLog
        </h1>
        <p className="text-gray-700 mb-4">
          AffectLog’s foundation rests on ephemeral container orchestration, zero-trust architecture,
          and cryptographically sealed chain-of-custody logs. Each Data Capsule is a secure environment
          that vanishes after analytics, preventing leftover data from lingering or leaking.
        </p>

        <h2 className="text-2xl font-sora font-semibold mt-8">Ephemeral Containers</h2>
        <p className="text-gray-700 mt-2">
          Our ephemeral approach means these containers exist only for the duration of your data job.
          Once your insight is extracted, the container self-destructs, wiping all transient memory.
        </p>

        <h2 className="text-2xl font-sora font-semibold mt-8">Zero-Trust Enforcement</h2>
        <p className="text-gray-700 mt-2">
          No user or code is trusted by default. Only verified script hashes can operate on your data,
          ensuring minimal attack surfaces and no unauthorized exports.
        </p>

        <h2 className="text-2xl font-sora font-semibold mt-8">Chain-of-Custody Logs</h2>
        <p className="text-gray-700 mt-2">
          Every ephemeral job is recorded with an immutable hash. Auditors can confirm exactly 
          when it ran, which code was used, and that meltdown indeed happened—perfect for GDPR/HIPAA.
        </p>

        <div className="mt-8">
          <a
            href="/resources"
            className="inline-block bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700 font-sora"
          >
            Learn More in Our Resources
          </a>
        </div>
      </div>
    </Layout>
  );
}
