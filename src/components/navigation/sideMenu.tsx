"use client";
import "./styles/sideMenu.css";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { SideBarContext } from "@/app/SideBarProvider";
import NavLinks from "./navLinks";
import { useMediaQuery } from "@mui/material";

export default function SideMenu() {
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  const [isClient, setIsClient] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }

    return () => {
      document.body.style.overflowY = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && isMobile && (
        <aside className={`side-menu-container ${isOpen ? "" : "closed"}`}>
          <div className="header-container">
            <button onClick={() => setIsOpen(false)}>
              <Image
                src="/shared/icon-close.svg"
                width={24}
                height={21}
                alt="close menu button"
              />
            </button>
          </div>
          <NavLinks />
        </aside>
      )}
    </>
  );
}
