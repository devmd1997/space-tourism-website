import { CSSProperties } from "react";
import "./styles/textContainerStyles.css";

export type TextContainerStyle = "display" | "condensed" | "explination";

interface TextContainerStyleOverides {
  header?: CSSProperties;
  title?: CSSProperties;
  body?: CSSProperties;
}

export interface TextContainerProps {
  header?: string;
  title: string;
  body: string;
  variant?: TextContainerStyle;
  className?: string;
  maxWidth?: number;
  styleOverrides?: TextContainerStyleOverides;
}

export const TextContainer = (props: TextContainerProps) => {
  const { header, title, body } = props;
  const variant = props.variant ?? "display";

  const headerContent = () => {
    const useHeaderContainer = variant === "explination" && header;
    const content = (
      <>
        {header && <h2>{header}</h2>}
        <h1>{title}</h1>
      </>
    );
    if (useHeaderContainer) {
      return <div className="text-header-container">{content}</div>;
    } else {
      return <>{content}</>;
    }
  };

  return (
    <div
      data-theme={variant}
      className={`text-container-layout ${props.className}`}
      style={{ maxWidth: props.maxWidth }}
    >
      {headerContent()}
      <p>{body}</p>
    </div>
  );
};
