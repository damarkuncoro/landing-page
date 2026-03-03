import React from "react";
import type { ButtonConfig } from "../../../components/types";

/**
 * Kontrak UI untuk Hero Section.
 * ❌ Tidak boleh depend apa pun (aturan 12).
 */
export interface HeroContractProps {
  id?: string;
  title: string;
  subtitle?: string;
  buttons: ButtonConfig[];
  image?: string;
  imageAlt?: string;
  video?: string;
  captionsSrc?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
  style?: React.CSSProperties;
  /** Overrides applied to the outer Container wrapper */
  containerStyle?: React.CSSProperties;
  /** Overrides applied to the inner Flex content wrapper */
  contentStyle?: React.CSSProperties;
  testId?: string;
}
