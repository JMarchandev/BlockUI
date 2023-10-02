import React from "react";

interface Props {
  children?: React.ReactNode;
  direction?: "top-right" | "top-left" | "bottom-right" | "bottom-left"; // Direction de la flèche
  variant?: "bright" | "primary" | "accent";
  className?: string;
}

const BUIChatBubble: React.FC<Props> = ({
  children,
  direction = "bottom-right",
  variant = "bright",
  className,
}) => {
  return (
    <div className={`chat-bubble ${direction} bg-${variant} ${className}`}>
      <span className="font-size-14">{children}</span>
    </div>
  );
};

export default BUIChatBubble;
