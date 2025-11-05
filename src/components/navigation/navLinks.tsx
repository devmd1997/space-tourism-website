"use client";

import { useEffect, useState } from "react";
import "./styles/navLink.css";
import "./styles/navBar.css";
import HoverPrefetchLink from "../common/hoverPrefetchLink";
import { usePathname } from "next/navigation";

interface NavLink {
  label: string;
  href: string;
}

interface NavLinkTabProps {
  isSelected: boolean;
  index: number;
  navLink: NavLink;
  onClick: () => void;
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Destination", href: "/destination" },
  { label: "Crew", href: "/crew" },
  { label: "Technology", href: "/technology" },
];

const NavLinkTab = (props: NavLinkTabProps) => {
  return (
    <li
      className={`${props.isSelected ? "selected" : ""}`}
      onClick={props.onClick}
    >
      <HoverPrefetchLink href={props.navLink.href} className={`nav-link-text`}>
        <p>{`0${props.index}`}</p>
        <p>{props.navLink.label}</p>
      </HoverPrefetchLink>
    </li>
  );
};

export default function NavLinks({ className }: { className?: string }) {
  const [selectedLink, setSelectedLink] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const currentFolder = navLinks.findIndex(
      (navLink) => navLink.href === pathname
    );
    setSelectedLink(currentFolder);
  }, [pathname]);

  return (
    <div className={className}>
      <ul className="nav-link-group">
        {navLinks.map((navLink, index) => (
          <NavLinkTab
            key={`navLink-${index}`}
            isSelected={selectedLink === index}
            index={index}
            navLink={navLink}
            onClick={() => setSelectedLink(index)}
          />
        ))}
      </ul>
    </div>
  );
}
