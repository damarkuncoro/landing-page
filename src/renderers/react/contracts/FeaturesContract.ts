import React from "react";

/**
 * Kontrak UI untuk Features Section.
 * ❌ Tidak boleh depend apa pun (aturan 12).
 */
export interface FeaturesContractProps {
  features: {
    id?: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
    className?: string;
  }[];
  className?: string;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  gridStyle?: React.CSSProperties;
  featureStyle?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  descriptionStyle?: React.CSSProperties;
  onFeatureMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onFeatureMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
