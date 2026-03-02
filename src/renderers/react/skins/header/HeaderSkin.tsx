import React, { useState } from "react";
import { HeaderBase } from "../../base/HeaderBase";
import type { HeaderContractProps } from "../../contracts/HeaderContract";

/**
 * Skin untuk Header.
 * Menggabungkan Base UI dengan styling (Tailwind/inline).
 * Depend pada Base UI + Tailwind (optional) + Contract (aturan 15).
 */
export const HeaderSkin = (props: HeaderContractProps & { theme: any }) => {
  const { theme, ...config } = props;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const headerStyle: React.CSSProperties = {
    padding: "1rem 0",
    backgroundColor: theme.colors.background,
    borderBottom: `1px solid ${theme.colors.muted}20`,
    ...config.style,
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    ...config.containerStyle,
  };

  return (
    <HeaderBase
      {...config}
      theme={theme}
      style={headerStyle}
      containerStyle={containerStyle}
      isMobileMenuOpen={mobileMenuOpen}
      onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
    />
  );
};
