import React from "react";
import { Box } from "./LayoutBase";

/**
 * Mobile Overlay component for closing mobile menu on click.
 */
export interface MobileOverlayProps {
  /** Whether overlay is visible */
  isVisible: boolean;
  /** Click handler to close menu */
  onClose: () => void;
  /** Z-index level */
  zIndex?: number;
}

export const MobileOverlay: React.FC<MobileOverlayProps> = ({
  isVisible,
  onClose,
  zIndex = 999,
}) => {
  if (!isVisible) return null;

  return (
    <Box
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex,
        backdropFilter: "blur(1px)",
        cursor: "pointer",
      }}
      onClick={onClose}
      aria-hidden="true"
    />
  );
};

MobileOverlay.displayName = "MobileOverlay";

export default MobileOverlay;