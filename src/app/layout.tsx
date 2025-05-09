import "../styles/globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Andrew Beshay | Portfolio",
  description: "Empowering Tech for Good",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-text">
        <Header />
        {children}
      </body>
    </html>
  );
}
