import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/providers/ReduxProvider";
import RTKProvider from "@/providers/RTKProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Belog",
  description: "Belog Study",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RTKProvider>
          <ReduxProvider>{children}</ReduxProvider>
        </RTKProvider>
      </body>
    </html>
  );
}
