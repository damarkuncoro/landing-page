import React from "react";
import type { LandingPageConfig, SectionConfig } from "../../core/types";
import type {
  HeaderConfig,
  HeroConfig,
  FeatureConfig,
  TestimonialConfig,
  PricingConfig,
  CtaConfig,
  FooterConfig,
  StatConfig,
  FaqConfig,
} from "../../components/types";

import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Cta from "./Cta";
import Footer from "./Footer";
import Stats from "./Stats";
import Faq from "./Faq";
import { Box } from "./base/LayoutBase";
import { ThemeProvider } from "./ThemeProvider";

// Main renderer
export const createReactRenderer = () => {
  const SectionRenderer = ({
    section,
    theme,
  }: {
    section: SectionConfig;
    theme: any;
  }) => {
    switch (section.type as any) {
      case "header":
        return (
          <Header
            config={section.config as HeaderConfig}
            theme={theme}
            key={section.id}
          />
        );
      case "hero":
        return (
          <Hero
            config={section.config as HeroConfig}
            theme={theme}
            key={section.id}
          />
        );
      case "features":
        return (
          <Features
            config={section.config as FeatureConfig}
            theme={theme}
            key={section.id}
          />
        );
      case "testimonials":
        return (
          <Testimonials
            config={section.config as unknown as TestimonialConfig}
            theme={theme}
            key={section.id}
          />
        );
      case "pricing":
        return (
          <Pricing
            config={section.config as PricingConfig}
            theme={theme}
            key={section.id}
          />
        );
      case "cta":
        return (
          <Cta
            config={section.config as CtaConfig}
            theme={theme}
            key={section.id}
          />
        );
      case "footer":
        return (
          <Footer
            config={section.config as FooterConfig}
            theme={theme}
            key={section.id}
          />
        );
      case "stats":
        return (
          <Stats
            config={
              section.config as unknown as { stats: StatConfig[]; className?: string }
            }
            theme={theme}
            key={section.id}
          />
        );
      case "faq":
        return (
          <Faq
            config={section.config as FaqConfig}
            theme={theme}
            key={section.id}
          />
        );
      default:
        console.warn(`Unknown section type: ${section.type}`);
        return null;
    }
  };

  const LandingPage = ({ config }: { config: LandingPageConfig }) => {
    // Global styles
    React.useEffect(() => {
      const style = document.createElement("style");
      style.textContent = `
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: ${config.theme?.fonts?.body || "system-ui, sans-serif"};
            background-color: ${config.theme?.colors?.background || "#ffffff"};
            color: ${config.theme?.colors?.text || "#000000"};
            line-height: 1.6;
          }
        `;
      document.head.appendChild(style);
      return () => {
        document.head.removeChild(style);
      };
    }, [config]);

    return (
      <ThemeProvider theme={config.theme as any}>
        <Box>
          {config.sections.map((section) => (
            <SectionRenderer
              key={section.id}
              section={section}
              theme={config.theme}
            />
          ))}
        </Box>
      </ThemeProvider>
    );
  };

  return LandingPage;
};
