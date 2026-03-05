import {
  createHeaderSection,
  createHeroSection,
  createFeaturesSection,
  createTestimonialsSection,
  createPricingSection,
  createStatsSection,
  createFaqSection,
  createCtaSection,
  createFooterSection,
} from '@damarkuncoro/landing-page'

export const sectionsConfig = [
  createHeaderSection({
    logo: "https://picsum.photos/150",
    title: "My Company",
    links: [
      {
        id: "link1",
        text: "Home",
        url: "/",
      },
      {
        id: "link2",
        text: "Features",
        url: "#features",
      },
      {
        id: "link3",
        text: "Pricing",
        url: "#pricing",
      },
      {
        id: "link4",
        text: "Contact",
        url: "#contact",
      },
    ],
    buttons: [
      { text: "Login", url: "/login", variant: "outline", size: "md" },
      { text: "Get Started", url: "/signup", variant: "primary", size: "md" },
    ],
    fixed: true,
    scrollEffect: true,
    skin: "tailwind",
  }),
  
]
