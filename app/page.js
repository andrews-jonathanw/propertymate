'use client';
import { useUser } from "../context/UserContext";
import Image from "next/image";
import Button from "../components/ui/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const { userType, setUserType } = useUser();
  const router = useRouter();

  const handleTenantClick = () => {
    setUserType("tenant");
    localStorage.setItem("userType", "tenant");
    router.push("/tenant/home");
  };

  const handleOwnerClick = () => {
    setUserType("owner");
    localStorage.setItem("userType", "owner");
    router.push("/owner/home");
  };

  return (
    <main className="flex flex-col items-center justify-between pt-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mt-4">Welcome to PropertyMate</h1>
          <p className="text-lg text-gray-700 mt-2">
            A user-friendly property management app for tenants and owners, streamlining communication and tasks in the rental process.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">What Can You Do?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">For Tenants</h3>
              <p className="text-gray-700 mb-4">Explore the features available to tenants:</p>
              <ul className="list-disc list-inside">
                <li>View Documents</li>
                <li>Make Payments</li>
                <li>Request Maintenance</li>
                <li>Update Profile</li>
              </ul>
              <Button className="my-2" onClick={handleTenantClick}>Explore Tenant Features</Button>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">For Owners</h3>
              <p className="text-gray-700 mb-4">Explore the features available to owners:</p>
              <ul className="list-disc list-inside">
                <li>Manage Properties</li>
                <li>Manage Tenants</li>
                <li>View Documents</li>
                <li>Handle Maintenance Requests</li>
              </ul>
              <Button className="my-2" onClick={handleOwnerClick}>Explore Owner Features</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 mx-20">
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <p className="text-gray-700 mb-4">Ready to get started? Sign up or log in to access PropertyMate's features:</p>
          <div className="flex gap-4">
            <Button className='text-black' onClick={() => alert("Redirect to Sign Up page")}>Sign Up</Button>
            <Button className='text-black' onClick={() => alert("Redirect to Log In page")}>Log In</Button>
          </div>
        </div>
    </main>
  );
}


