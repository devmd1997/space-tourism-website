"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useScreenSizeQuery } from "@/lib/features/useScreenSizeQuery";

// Define a mapping from routes to their background images
const backgroundMap: Record<string, string> = {
  "/": "/home/background-home",
  "/destination": "/destination/background-destination",
  "/crew": "/assets/crew/background-crew",
  "/technology": "/assets/technology/background-technology",
};

interface BackgroundLayoutProps {
  children: React.ReactNode;
}

export default function BackgroundLayout({ children }: BackgroundLayoutProps) {
  const currentScreen = useScreenSizeQuery();
  const pathname = usePathname();
  const [backgroundImageSrc, setBackgroundImageSrc] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  // This effect runs once on the client after initial render to confirm mounting.
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // This effect runs when the path or screen size changes, but only after mounting.
  useEffect(() => {
    // Don't run on the server, before hydration, or if the screen size isn't determined yet.
    if (!isMounted || !currentScreen) return;

    const newImage = `${
      backgroundMap[pathname] || backgroundMap["/"]
    }-${currentScreen}.jpg`; // Fallback to home background
    setBackgroundImageSrc(newImage);
    console.log(newImage);
  }, [pathname, currentScreen, isMounted]);

  return (
    <div className="background-layout-container">
      {backgroundImageSrc && (
        <Image
          key={backgroundImageSrc}
          src={backgroundImageSrc}
          alt="Space tourism background"
          fill
          sizes="100vw"
          priority
          className="background-layout-image"
        />
      )}
      <div className="background-layout-content">{children}</div>
    </div>
  );
}
