"use client";

import { UserButton } from "@clerk/nextjs";

export default function Navbar() {

  return (
    <div className="sticky top-0">
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}
