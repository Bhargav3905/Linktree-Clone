"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();  // ✅ Hook is now inside a component

  const hideNavbar = pathname === "/generate";

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
}
