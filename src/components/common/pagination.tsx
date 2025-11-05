"use client";

import "./styles/paginationStyles.css";
import { useState } from "react";

export type PaginationType = "small" | "large";

export interface PaginationProps {
  pages: number[];
  onSelected: (index: number) => void;
  variant: PaginationType;
}

export default function PaginationSelector(props: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = props.pages;

  const handleSelectedPage = (index: number) => {
    setCurrentPage(index);
    props.onSelected(index);
  };

  return (
    <ul data-theme={props.variant} className="pagination-group">
      {pages.map((pageIndex) => (
        <li
          key={`pagination-button-${pageIndex}`}
          data-theme={props.variant}
          className={`pagination ${pageIndex === currentPage ? "active" : ""}`}
          onClick={() => handleSelectedPage(pageIndex)}
        >
          {`${props.variant === "large" ? pageIndex + 1 : ""}`}
        </li>
      ))}
    </ul>
  );
}
