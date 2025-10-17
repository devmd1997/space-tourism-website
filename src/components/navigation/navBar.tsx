"use client";
import { useContext } from "react";
import NavLinks from "./navLinks";
import "./styles/navBar.css";
import Image from "next/image";
import { SideBarContext } from "@/app/SideBarProvider";

export default function NavBar() {
  const { setIsOpen } = useContext(SideBarContext);
  return (
    <nav className="hpadding md:pl-5 md:pr-0 lg:pl-8 lg:pr-0">
      <Image src="/shared/logo.svg" width={40} height={40} alt="logo" />
      <button className="nav-menu-button" onClick={() => setIsOpen(true)}>
        <Image
          src="/shared/icon-hamburger.svg"
          width={24}
          height={21}
          alt="menu icon"
        />
      </button>
      <div className="decorative-line-container">
        <div className="decorative-line" />
      </div>
      <NavLinks className="nav-links" />
    </nav>
  );
}
