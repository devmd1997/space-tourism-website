"use client";
import { useState } from "react";
import "./styles/tabMenuStyles.css";

interface TabMenuProps {
  tabItems: string[];
  onSelectedTabItem: (tabItem: string) => void;
}

interface TabItemProps {
  tabItem: string;
  isSelected: boolean;
  onSelectedTabItem: (tabItem: string) => void;
}

const TabItem = (props: TabItemProps) => {
  return (
    <li
      className={`${props.isSelected ? "selected" : ""}`}
      onClick={() => props.onSelectedTabItem(props.tabItem)}
    >
      {props.tabItem}
    </li>
  );
};

export default function TabsMenu(props: TabMenuProps) {
  const { tabItems, onSelectedTabItem } = props;
  const [selectedTabItem, setSelectedTabItem] = useState(tabItems[0]);

  const handleSelectedTabItem = (tabItem: string) => {
    setSelectedTabItem(tabItem);
    onSelectedTabItem(tabItem);
  };

  return (
    <ul className="tab-menu">
      {tabItems.map((tabItem, index) => (
        <TabItem
          key={`tabItem-${tabItem}-${index}`}
          tabItem={tabItem}
          isSelected={tabItem === selectedTabItem}
          onSelectedTabItem={handleSelectedTabItem}
        />
      ))}
    </ul>
  );
}
