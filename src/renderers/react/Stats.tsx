import React from "react";
import type { StatConfig } from "../../components/types";
import { StatsSkin } from "./skins/stats/StatsSkin";

/**
 * Komponen Stats yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const Stats = ({
  config,
}: {
  config: { stats: StatConfig[]; className?: string };
}) => {
  return <StatsSkin {...config} />;
};

export default Stats;
