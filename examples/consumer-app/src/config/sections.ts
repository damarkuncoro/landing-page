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
  }),
  createHeroSection({
    skin: 'skin10',
    title: 'Welcome to Our Platform',
    subtitle: 'Discover the future of web development with our config-driven landing page library',
    buttons: [
      {
        text: 'Get Started',
        url: 'https://example.com/signup',
        variant: 'primary',
        size: 'lg',
        id: 'get-started',
      },
      {
        text: 'Learn More',
        url: 'https://example.com/features',
        variant: 'secondary',
        size: 'lg',
        id: 'learn-more',
      },
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop',
    alignment: 'center',
  }),
  createFeaturesSection({
    features: [
      {
        id: 'feature1',
        title: 'Config-Driven',
        description: 'Build landing pages using simple configuration objects',
        icon: '⚙️',
      },
      {
        id: 'feature2',
        title: 'React Ready',
        description: 'Render your landing pages using React components',
        icon: '⚛️',
      },
      {
        id: 'feature3',
        title: 'Type Safe',
        description: 'Enjoy full TypeScript support and type safety',
        icon: '🔒',
      },
      {
        id: 'feature4',
        title: 'Customizable',
        description: 'Easily customize colors, fonts, and styles',
        icon: '🎨',
      },
      {
        id: 'feature5',
        title: 'Responsive',
        description: 'Fully responsive design for all devices',
        icon: '📱',
      },
      {
        id: 'feature6',
        title: 'Fast Performance',
        description: 'Optimized for speed and performance',
        icon: '🚀',
      },
    ],
  }),
  createTestimonialsSection({
    testimonials: [
      {
        id: 'testimonial1',
        quote: 'This library has revolutionized how we build landing pages',
        author: 'John Doe',
        role: 'CTO, Tech Corp',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      },
      {
        id: 'testimonial2',
        quote: 'Easy to use and highly customizable. Perfect for our needs.',
        author: 'Jane Smith',
        role: 'Marketing Director',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
      },
      {
        id: 'testimonial3',
        quote: 'The config-driven approach saves us hours of development time.',
        author: 'Mike Johnson',
        role: 'Product Manager',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      },
    ],
  }),
  createPricingSection({
    plans: [
      {
        id: 'plan1',
        title: 'Basic',
        description: 'Perfect for personal projects',
        price: 0,
        period: 'month',
        features: [
          'Up to 3 landing pages',
          'Basic customization',
          'Community support',
        ],
        button: {
          text: 'Get Started',
          url: 'https://example.com/signup',
          variant: 'primary',
          size: 'md',
        },
      },
      {
        id: 'plan2',
        title: 'Pro',
        description: 'For small businesses',
        price: 29,
        period: 'month',
        features: [
          'Unlimited landing pages',
          'Advanced customization',
          'Priority support',
          'Analytics integration',
        ],
        button: {
          text: 'Get Started',
          url: 'https://example.com/signup',
          variant: 'primary',
          size: 'md',
        },
        featured: true,
      },
      {
        id: 'plan3',
        title: 'Enterprise',
        description: 'For large organizations',
        price: 99,
        period: 'month',
        features: [
          'Everything in Pro',
          'Custom domain',
          'API access',
          '24/7 support',
          'Custom branding',
        ],
        button: {
          text: 'Contact Sales',
          url: 'https://example.com/contact',
          variant: 'primary',
          size: 'md',
        },
      },
    ],
  }),
  createStatsSection({
    stats: [
      {
        id: 'stat1',
        number: '10k+',
        label: 'Active Users',
        icon: '👥',
      },
      {
        id: 'stat2',
        number: '500+',
        label: 'Projects',
        icon: '📁',
      },
      {
        id: 'stat3',
        number: '98%',
        label: 'Customer Satisfaction',
        icon: '⭐',
      },
      {
        id: 'stat4',
        number: '24/7',
        label: 'Support',
        icon: '🛟',
      },
    ],
  }),
  createFaqSection({
    items: [
      {
        id: 'faq1',
        question: 'How does the pricing work?',
        answer: 'Our pricing is per user per month. You can upgrade or downgrade your plan at any time.',
      },
      {
        id: 'faq2',
        question: 'Is there a free trial?',
        answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required.',
      },
      {
        id: 'faq3',
        question: 'Can I cancel anytime?',
        answer: 'Yes, you can cancel your subscription at any time. You will continue to have access until the end of your billing period.',
      },
      {
        id: 'faq4',
        question: 'Do you offer support?',
        answer: 'Yes, we offer 24/7 support via email and live chat. Enterprise plans include phone support.',
      },
    ],
  }),
  createCtaSection({
    title: 'Ready to Get Started?',
    description: 'Join thousands of developers building amazing landing pages',
    button: {
      text: 'Sign Up Free',
      url: 'https://example.com/signup',
      variant: 'primary',
      size: 'lg',
      id: 'cta-button',
    },
  }),
  createFooterSection({
    title: 'My Company',
    description: 'Building the future of web development',
    logo: 'https://picsum.photos/150', // Temporary placeholder logo
    links: [
      {
        title: 'Product',
        items: [
          { text: 'Features', url: 'https://example.com/features' },
          { text: 'Pricing', url: 'https://example.com/pricing' },
          { text: 'Documentation', url: 'https://example.com/docs' },
          { text: 'Changelog', url: 'https://example.com/changelog' },
        ],
      },
      {
        title: 'Company',
        items: [
          { text: 'About', url: 'https://example.com/about' },
          { text: 'Blog', url: 'https://example.com/blog' },
          { text: 'Careers', url: 'https://example.com/careers' },
          { text: 'Contact', url: 'https://example.com/contact' },
        ],
      },
      {
        title: 'Legal',
        items: [
          { text: 'Privacy Policy', url: 'https://example.com/privacy' },
          { text: 'Terms of Service', url: 'https://example.com/terms' },
          { text: 'Cookie Policy', url: 'https://example.com/cookies' },
        ],
      },
    ],
    socialLinks: [
      {
        platform: 'Twitter',
        url: 'https://twitter.com/company',
        icon: '🐦',
      },
      {
        platform: 'GitHub',
        url: 'https://github.com/company',
        icon: '🐙',
      },
      {
        platform: 'LinkedIn',
        url: 'https://linkedin.com/company',
        icon: '💼',
      },
    ],
    copyright: '© 2024 My Company. All rights reserved.',
  }),
]