import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../../globals.css"; // Adjusted the path to reflect the correct location
import Dashboard from "@/components/Dashboard";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Dashboard>{children}</Dashboard>
      </body>
    </html>
  );
}
