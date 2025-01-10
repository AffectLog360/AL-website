/* eslint-disable @next/next/no-page-custom-font */
// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "AffectLog - Ephemeral Data Capsules",
  description: "Secure ephemeral meltdown approach for data collaboration",
};

// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&display=swap"
          />
        </head>
        <body className="bg-white text-gray-800 font-sora">
          {children}
        </body>
      </html>
    );
  }
  
