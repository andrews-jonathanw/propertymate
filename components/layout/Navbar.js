'use client';
import { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import Container from "../ui/Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../ui/Button";

export default function Navbar() {
  const router = useRouter();
  const { userType, setUserType } = useUser();
  const [showMenu, setShowMenu] = useState(false);

  // Update localStorage when userType changes
  useEffect(() => {
    localStorage.setItem("userType", userType);
  }, [userType]);

  return (
    <div className="navBar sticky top-0 border border-b-primary/10 bg-secondary">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1" onClick={() => router.push("/")}>
            <Image
              src="/assets/propertyMateLogo.jpeg"
              alt="logo"
              width={50}
              height={50}
              className="hover:cursor-pointer"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
            <div className="font-bold text-xl">PropertyMate</div>
          </div>
          <div className="flex items-center gap-3">
            <div>theme</div>
            {userType === "owner" ? (
              <Button onClick={() => {
                setUserType("tenant");
                router.push("/tenant/home");
              }}>Tenant View</Button>
            ) : (
              <Button onClick={() => {
                setUserType("owner");
                router.push("/owner/home");
              }}>Owner View</Button>
            )}

            <button
              onClick={() => setShowMenu(!showMenu)}
              className="focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {showMenu ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {showMenu && (
          <div className="flex flex-col gap-2 bg-blue-50 mt-2">
            {userType === "tenant" ? (
              <>
                <Button onClick={()=> {
                  router.push("/tenant/home");
                  setShowMenu(false);
                }}>Home</Button>
                <Button onClick={()=> {
                  router.push("/tenant/documents");
                  setShowMenu(false);
                }}>Documents</Button>
                <Button>Payments</Button>
                <Button>Maintenance</Button>
                <Button>Profile</Button>

              </>
            ) : (
              <>
                <Button onClick={()=> {
                    router.push("/owner/home");
                    setShowMenu(false);
                  }}>Home</Button>
                <Button onClick={()=> {
                  router.push("/owner/properties");
                  setShowMenu(false);
                }}>Properties</Button>
                <Button>Tenants</Button>
                <Button onClick={()=> {
                  router.push("/owner/documents");
                  setShowMenu(false);
                }}>Documents</Button>
                <Button>Maintenance</Button>

              </>
            )}
          </div>
        )}
      </Container>
    </div>
  );
}



