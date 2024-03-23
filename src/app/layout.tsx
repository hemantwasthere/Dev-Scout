import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import Header from "@/components/Header";
import { Providers } from "@/components/Providers";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Scout",
  description:
    "An application to help pair programme with random developers online!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextTopLoader />
        <Providers>
          <Toaster />
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
