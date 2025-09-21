import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tip Calculator",
  description: "A simple tip calculator app built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="font-[var(--font-family-space-mono)]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
