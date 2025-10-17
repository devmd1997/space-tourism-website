"use client";
import Link from "next/link";
import { useState } from "react";
import "./styles/navLink.css";
import "./styles/navBar.css";

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
      <Link href={props.navLink.href} className={`nav-link-text`}>
        <p>{`0${props.index}`}</p>
        <p>{props.navLink.label}</p>
      </Link>
    </li>
  );
};

export default function NavLinks({ className }: { className?: string }) {
  const [selectedIcon, setSelectedIcon] = useState(0);

  return (
    <div className={className}>
      <ul className="nav-link-group">
        {navLinks.map((navLink, index) => (
          <NavLinkTab
            key={`navLink-${index}`}
            isSelected={selectedIcon === index}
            index={index}
            navLink={navLink}
            onClick={() => setSelectedIcon(index)}
          />
        ))}
      </ul>
    </div>
  );
}
