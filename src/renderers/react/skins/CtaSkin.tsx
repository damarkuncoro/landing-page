import React from "react";
import { CtaBase } from "../base/CtaBase";
import type { CtaContractProps } from "../contracts/CtaContract";
import { getBestContrastColor } from "../../../core/utils/contrast";

/**
 * Skin untuk Cta Section.
 * Menggabungkan Base UI dengan styling (Tailwind/inline).
 * Depend pada Base UI + Tailwind (optional) + Contract (aturan 15).
 */
export const CtaSkin = (props: CtaContractProps & { theme: any }) => {
  const { theme, ...config } = props;

  // Gunakan primary color dari theme atau config jika ada
  const backgroundColor = theme.colors.primary;

  // Pilih warna teks terbaik berdasarkan background (otomatis hitam atau putih)
  const textColor = getBestContrastColor(backgroundColor);

  const sectionStyle: React.CSSProperties = {
    padding: "4rem 0",
    ...config.style,
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    ...config.containerStyle,
  };

  const contentStyle: React.CSSProperties = {
    textAlign: "center",
    padding: "4rem 2rem",
    backgroundColor: backgroundColor,
    color: textColor,
    borderRadius: "0.5rem",
    ...config.contentStyle,
  };

  // Modifikasi config tombol agar kontras dengan background CTA
  // Jika background CTA adalah primary, dan tombol aslinya primary (solid),
  // maka ubah varian tombol menjadi outline dengan warna teks yang kontras.
  const buttonConfig = {
    ...config.button,
    variant:
      config.button.variant === "primary" ? "outline" : config.button.variant,
  };

  // Kirim theme khusus ke tombol agar warna outline-nya kontras dengan background CTA
  const buttonTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      primary: textColor, // Warna outline tombol mengikuti warna teks CTA yang kontras
      text: backgroundColor, // Warna teks saat hover tombol mengikuti warna background CTA
    },
  };

  return (
    <CtaBase
      {...config}
      button={buttonConfig}
      theme={buttonTheme}
      style={sectionStyle}
      containerStyle={containerStyle}
      contentStyle={contentStyle}
    />
  );
};
