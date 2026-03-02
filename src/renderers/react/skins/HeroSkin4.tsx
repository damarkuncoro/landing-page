import React from "react";
import { HeroBase } from "../base/HeroBase";
import type { HeroContractProps } from "../contracts/HeroContract";

/**
 * Skin 4 untuk Hero Section.
 * Video sebagai latar belakang dengan overlay gradien.
 */
export const HeroSkin4 = (props: HeroContractProps & { theme: any }) => {
  const { theme, ...config } = props;

  const sectionStyle: React.CSSProperties = {
    padding: "8rem 0",
    position: "relative",
    overflow: "hidden",
    ...config.style,
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    position: "relative",
    zIndex: 1,
    ...config.containerStyle,
  };

  const contentStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.xl,
    alignItems: "center",
    textAlign: "center",
    color: "#ffffff",
    ...config.contentStyle,
  };

  const videoStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
  };

  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.7)",
    zIndex: 0,
  };

  return (
    <section style={sectionStyle} className={config.className}>
      {config.video && (
        <video
          src={config.video}
          autoPlay
          loop
          muted
          playsInline
          style={videoStyle}
        />
      )}
      <div style={overlayStyle} />
      <HeroBase
        {...config}
        theme={{
          ...theme,
          colors: {
            ...theme.colors,
            text: "#ffffff",
            muted: "rgba(255, 255, 255, 0.8)",
          },
        }}
        style={{ position: "relative", zIndex: 1 }}
        containerStyle={containerStyle}
        contentStyle={contentStyle}
      />
    </section>
  );
};