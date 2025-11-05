"use client";

import HoverPrefetchLink from "./hoverPrefetchLink";
import "./styles/buttonStyles.css";

export default function ExploreButton() {
  return (
    <button className="explore-button">
      <HoverPrefetchLink href="/destination">Explore</HoverPrefetchLink>
    </button>
  );
}
