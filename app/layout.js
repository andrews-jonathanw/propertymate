import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { UserProvider } from "@/context/UserContext";
import "./globals.css";

export const metadata = {
  title: "PropertyMate",
  description: "PropertyMate: A user-friendly property management app for tenants and owners, streamlining communication and tasks in the rental process.",
};

export default function RootLayout({ children }) {
  return (
    <UserProvider>
      <html lang="en">
        <body>
          <main className="flex flex-col min-h-screen">
            <Navbar />
            <section className="flex-grow bg-customLight-background">
              {children}
            </section>
            <Footer />
          </main>
        </body>
      </html>
    </UserProvider>
  );
}


