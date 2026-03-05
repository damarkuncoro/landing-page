import React from "react";
import { Box, Flex } from "./LayoutBase";

/**
 * Loading Spinner component for navbar loading states.
 * Displays a spinning circle animation with optional loading text.
 */
export interface LoadingSpinnerProps {
  /** Show loading text */
  showText?: boolean;
  /** Custom className */
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  showText = true,
  className,
}) => {
  return (
    <Flex align="center" gap="0.5rem" className={className}>
      <Box
        as="span"
        style={{
          display: "inline-block",
          width: "16px",
          height: "16px",
          border: "2px solid transparent",
          borderTop: "2px solid currentColor",
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite",
        }}
        role="status"
        aria-label="Loading"
      />
      {showText && <Box>Loading...</Box>}
    </Flex>
  );
};

LoadingSpinner.displayName = "LoadingSpinner";

export default LoadingSpinner;