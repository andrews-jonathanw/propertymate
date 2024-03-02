'use client';
import { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import Container from "../ui/Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../ui/Button";
import Menu from "./Menu";

export default function Navbar() {
  const router = useRouter();
  const { userType, setUserType } = useUser();
  const [showMenu, setShowMenu] = useState(false);

  // Update localStorage when userType changes
  useEffect(() => {
    localStorage.setItem("userType", userType);
  }, [userType]);

  return (
    <div className="navBar sticky top-0 text-white bg-customLight-primary">
        <div className="flex items-center justify-between mx-6 ">
          <div className="flex items-center gap-1" onClick={() => router.push("/")}>
            <div className="hover:cursor-pointer bg-transparent rounded-full flex items-center justify-center bg-customLight-primary">
              <Image
                src="/assets/lightLogo.png"
                alt="logo"
                width={70}
                height={70}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }} />
            </div>
            <div className="font-bold text-xl">PropertyMate</div>
          </div>
          <div className="flex items-center gap-3">
            <div>theme</div>
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
          {showMenu && <Menu userType={userType} showMenu={showMenu} setShowMenu={setShowMenu} router={router} setUserType={setUserType}/>}
    </div>
  );
}
