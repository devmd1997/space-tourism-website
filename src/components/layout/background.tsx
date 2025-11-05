"use client";

import { usePathname } from "next/navigation";
import Image, { getImageProps } from "next/image";
import { useEffect, useState } from "react";
import { useScreenSizeQuery } from "@/lib/features/useScreenSizeQuery";

// Define a mapping from routes to their background images
const backgroundMap: Record<string, string> = {
  "/": "/home/background-home",
  "/destination": "/destination/background-destination",
  "/crew": "/crew/background-crew",
  "/technology": "/technology/background-technology",
};

interface BackgroundLayoutProps {
  children: React.ReactNode;
}

const common = { sizes: "100vw", fill: true, quality: 100, alt: "Background" };

export default function BackgroundLayout({ children }: BackgroundLayoutProps) {
  const pathname = usePathname();

  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    src: `${backgroundMap[pathname] || backgroundMap["/"]}-desktop.jpg`,
  });

  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    src: `${backgroundMap[pathname] || backgroundMap["/"]}-tablet.jpg`,
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    src: `${backgroundMap[pathname] || backgroundMap["/"]}-mobile.jpg`,
  });

  // This effect runs once on the client after initial render to confirm mounting.
  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // // This effect runs when the path or screen size changes, but only after mounting.
  // useEffect(() => {
  //   // Don't run on the server, before hydration, or if the screen size isn't determined yet.
  //   if (!isMounted || !currentScreen) return;

  //   const newImage = `${
  //     backgroundMap[pathname] || backgroundMap["/"]
  //   }-${currentScreen}.jpg`; // Fallback to home background
  //   setBackgroundImageSrc(newImage);
  //   console.log(newImage);
  // }, [pathname, currentScreen, isMounted]);

  return (
    <div className="background-layout-container">
      <picture>
        <source media="(min-width: 1440px) " srcSet={desktop} />
        <source media="(min-width: 768px)" srcSet={tablet} />
        <source media="(max-width: 767px)" srcSet={mobile} />
        <img {...rest} className="background-layout-image" />
      </picture>
      <div className="background-layout-content">{children}</div>
    </div>
  );
}
