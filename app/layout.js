import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs';
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PropertyMate",
  description: "PropertyMate: A user-friendly property management app for tenants and owners, streamlining communication and tasks in the rental process.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
          <body className={inter.className}>
            <Navbar />
            {children}
          </body>

      </html>
    </ClerkProvider>
  );
}

