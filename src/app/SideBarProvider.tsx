"use client";

import { createContext, useState } from "react";

interface SideBarContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const SideBarContext = createContext<SideBarContextType>({
  isOpen: false,
  setIsOpen: () => null,
});

const SideBarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SideBarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SideBarContext.Provider>
  );
};

export default SideBarProvider;
