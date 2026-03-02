import React from "react";

/**
 * Kontrak UI untuk Stats Section.
 * ❌ Tidak boleh depend apa pun (aturan 12).
 */
export interface StatsContractProps {
  stats: {
    id?: string;
    number: string;
    label: string;
    icon?: React.ReactNode;
    prefix?: string;
    suffix?: string;
    className?: string;
  }[];
  className?: string;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  gridStyle?: React.CSSProperties;
  statStyle?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
  numberContainerStyle?: React.CSSProperties;
  numberStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
}
