'use client';
import { useUser } from "../context/UserContext";

export default function Home() {
  const { userType } = useUser(); // Using the useUser hook to access user context

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div>
        <h1>Hello World</h1>
        <p>
          You are currently viewing the app as a {userType}. Click on the buttons in the Navbar to switch between tenant and owner views.
        </p>
      </div>
    </main>
  );
}

