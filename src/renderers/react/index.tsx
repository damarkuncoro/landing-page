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
  }: {
    section: SectionConfig;
  }) => {
    switch (section.type as any) {
      case "header":
        return (
          <Header
            config={section.config as HeaderConfig}
            key={section.id}
          />
        );
      case "hero":
        return (
          <Hero
            config={section.config as HeroConfig}
            key={section.id}
          />
        );
      case "features":
        return (
          <Features
            config={section.config as FeatureConfig}
            key={section.id}
          />
        );
      case "testimonials":
        return (
          <Testimonials
            config={section.config as unknown as TestimonialConfig}
            key={section.id}
          />
        );
      case "pricing":
        return (
          <Pricing
            config={section.config as PricingConfig}
            key={section.id}
          />
        );
      case "cta":
        return (
          <Cta
            config={section.config as CtaConfig}
            key={section.id}
          />
        );
      case "footer":
        return (
          <Footer
            config={section.config as FooterConfig}
            key={section.id}
          />
        );
      case "stats":
        return (
          <Stats
            config={
              section.config as unknown as { stats: StatConfig[]; className?: string }
            }
            key={section.id}
          />
        );
      case "faq":
        return (
          <Faq
            config={section.config as FaqConfig}
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
            transition: background-color 0.3s ease, color 0.3s ease;
          }
        `;
      document.head.appendChild(style);
      return () => {
        document.head.removeChild(style);
      };
    }, [config]);

    return (
      <ThemeProvider theme={config.theme as any} dark={config.theme?.colors?.background === '#000000'}>
        <Box>
          {config.sections.map((section) => (
            <SectionRenderer
              key={section.id}
              section={section}
            />
          ))}
        </Box>
      </ThemeProvider>
    );
  };

  return LandingPage;
};
