// app/technology/page.tsx
"use client";

import React from "react";

export default function TechnologyPage() {
  return (
    <main className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-sora font-bold mb-6">
        The Technology Behind Data Capsules
      </h1>
      <p className="text-gray-700 mb-8">
        AffectLog harnesses ephemeral container orchestration, zero-trust security,
        and tamper-evident logs. Below is a short video demonstration, produced with
        Sora.com, that illustrates an ephemeral meltdown in action:
      </p>
      <div className="w-full aspect-video bg-black">
        <video
          src="/videos/ephemeral-demo.mp4"
          controls
          className="w-full h-full object-cover rounded"
        />
      </div>
      <p className="mt-4 text-gray-700">
        Watch as multiple data owners contribute data, run analytics, and
        the container seamlessly self-destructs—leaving zero footprints.
      </p>
    </main>
  );
}
