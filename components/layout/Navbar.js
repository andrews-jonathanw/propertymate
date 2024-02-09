"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import  Container from "../ui/Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import  Button  from "../ui/Button";

export default function Navbar() {
  const router = useRouter();
  const [userType, setUserType] = useState("tenant");

  return (
    <div className="sticky top-0 border border-b-primary/10 bg-secondary">
      <Container>
        <div className={`flex items-center gap-1`}>
          <Image className={`hover:cursor-pointer`} onClick={()=> {
            router.push("/")
          }} src="/logo.svg" alt="logo" width={30} height={30}/>
          <div className="font-bold text-xl">PropertyMate</div>
        </div>
        <div className="flex flex-row gap-2">
          <div>theme</div>
          {/* <UserButton afterSignOutUrl="/" /> */}
          {userType === "tenant" && <>
          <Button>Documents</Button>
          <Button>Payments</Button>
          <Button>Maintenance</Button>
          <Button>Profile</Button>
          <Button onClick={()=> {
            setUserType("owner");
          }}>Owner View</Button>
          </>}

          {userType === "owner" && <>
          <Button>Properties</Button>
          <Button>Documents</Button>
          <Button>Tentants</Button>
          <Button>Maintenance</Button>
          <Button onClick={()=> {
            setUserType("tenant");
          }}>Tenant View</Button>
          </>}

        </div>
      </Container>
    </div>
  )
}
