import * as react_jsx_runtime from 'react/jsx-runtime';

type SectionType = 'hero' | 'features' | 'testimonials' | 'pricing' | 'cta' | 'footer' | 'stats' | 'faq' | 'header';
type ComponentType = 'button' | 'card' | 'image' | 'text' | 'video';
interface BaseConfig {
    id?: string;
    className?: string;
}
interface LandingPageConfig extends BaseConfig {
    title: string;
    description: string;
    sections: SectionConfig[];
    theme?: Partial<ThemeConfig>;
}
interface ThemeConfig {
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
        text: string;
        muted: string;
    };
    spacing: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    fonts: {
        heading: string;
        body: string;
        mono: string;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}
interface SectionConfig extends BaseConfig {
    type: SectionType;
    config: any;
}

declare function defineLandingPage(config: LandingPageConfig): {
    theme: ThemeConfig;
    getSection(id: string): SectionConfig | undefined;
    addSection(section: SectionConfig): /*elided*/ any;
    removeSection(id: string): /*elided*/ any;
    updateSection(id: string, updates: Partial<SectionConfig>): /*elided*/ any;
    toJSON(): any;
    validate(): string[];
    getSectionsByType(type: string): SectionConfig[];
    isValid(): boolean;
    title: string;
    description: string;
    sections: SectionConfig[];
    id?: string;
    className?: string;
};

interface ButtonConfig extends BaseConfig {
    text: string;
    url: string;
    variant: 'primary' | 'secondary' | 'outline' | 'ghost';
    size: 'sm' | 'md' | 'lg';
    target?: '_blank' | '_self';
}
interface HeaderConfig extends BaseConfig {
    logo?: string;
    title?: string;
    links: {
        id?: string;
        text: string;
        url: string;
        target?: '_blank' | '_self';
    }[];
}
interface HeroConfig extends BaseConfig {
    title: string;
    subtitle: string;
    image?: string;
    video?: string;
    buttons: ButtonConfig[];
    alignment?: 'left' | 'center' | 'right';
}
interface FeatureConfig extends BaseConfig {
    title: string;
    description: string;
    icon?: string;
    image?: string;
}
interface TestimonialConfig extends BaseConfig {
    quote: string;
    author: string;
    role?: string;
    avatar?: string;
}
interface PricingConfig extends BaseConfig {
    plans: {
        id?: string;
        title: string;
        description: string;
        price: number;
        period?: string;
        features: string[];
        button: ButtonConfig;
        featured?: boolean;
    }[];
}
interface FooterConfig extends BaseConfig {
    logo?: string;
    title?: string;
    description?: string;
    links: {
        title: string;
        items: {
            text: string;
            url: string;
            target?: '_blank' | '_self';
        }[];
    }[];
    socialLinks: {
        platform: string;
        url: string;
        icon?: string;
    }[];
    copyright?: string;
}
interface CtaConfig extends BaseConfig {
    title: string;
    description: string;
    button: ButtonConfig;
    image?: string;
}
interface StatConfig extends BaseConfig {
    number: string;
    label: string;
    icon?: string;
    prefix?: string;
    suffix?: string;
}
interface FaqConfig extends BaseConfig {
    items: {
        id?: string;
        question: string;
        answer: string;
    }[];
}

interface HeaderSection extends SectionConfig {
    type: 'header';
    config: HeaderConfig;
}
declare function createHeaderSection(config: HeaderConfig, id?: string, className?: string): HeaderSection;

interface HeroSection extends SectionConfig {
    type: 'hero';
    config: HeroConfig;
}
declare function createHeroSection(config: HeroConfig, id?: string, className?: string): HeroSection;

interface FeaturesSection extends SectionConfig {
    type: 'features';
    config: {
        features: FeatureConfig[];
    };
}
declare function createFeaturesSection(config: {
    features: FeatureConfig[];
}, id?: string, className?: string): FeaturesSection;

interface TestimonialsSection extends SectionConfig {
    type: 'testimonials';
    config: {
        testimonials: TestimonialConfig[];
    };
}
declare function createTestimonialsSection(config: {
    testimonials: TestimonialConfig[];
}, id?: string, className?: string): TestimonialsSection;

interface PricingSection extends SectionConfig {
    type: 'pricing';
    config: PricingConfig;
}
declare function createPricingSection(config: PricingConfig, id?: string, className?: string): PricingSection;

interface CtaSection extends SectionConfig {
    type: 'cta';
    config: CtaConfig;
}
declare function createCtaSection(config: CtaConfig, id?: string, className?: string): CtaSection;

interface FooterSection extends SectionConfig {
    type: 'footer';
    config: FooterConfig;
}
declare function createFooterSection(config: FooterConfig, id?: string, className?: string): FooterSection;

interface StatsSection extends SectionConfig {
    type: 'stats';
    config: {
        stats: StatConfig[];
    };
}
declare function createStatsSection(config: {
    stats: StatConfig[];
}, id?: string, className?: string): StatsSection;

interface FaqSection extends SectionConfig {
    type: 'faq';
    config: FaqConfig;
}
declare function createFaqSection(config: FaqConfig, id?: string, className?: string): FaqSection;

declare const defaultTheme: ThemeConfig;

declare const createReactRenderer: () => ({ config }: {
    config: LandingPageConfig;
}) => react_jsx_runtime.JSX.Element;

declare const landingPageSchema: {
    $id: string;
    title: string;
    description: string;
    type: string;
    properties: {
        id: {
            type: string;
            description: string;
        };
        className: {
            type: string;
            description: string;
        };
        title: {
            type: string;
            description: string;
            minLength: number;
        };
        description: {
            type: string;
            description: string;
            minLength: number;
        };
        sections: {
            type: string;
            description: string;
            minItems: number;
            items: {
                $ref: string;
            };
        };
        theme: {
            $ref: string;
        };
    };
    required: string[];
    definitions: {
        Section: {
            type: string;
            properties: {
                id: {
                    type: string;
                    description: string;
                };
                className: {
                    type: string;
                    description: string;
                };
                type: {
                    type: string;
                    description: string;
                    enum: string[];
                };
                config: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        Theme: {
            type: string;
            properties: {
                colors: {
                    $ref: string;
                };
                spacing: {
                    $ref: string;
                };
                fonts: {
                    $ref: string;
                };
                breakpoints: {
                    $ref: string;
                };
            };
        };
        Colors: {
            type: string;
            properties: {
                primary: {
                    type: string;
                    description: string;
                    pattern: string;
                };
                secondary: {
                    type: string;
                    description: string;
                    pattern: string;
                };
                accent: {
                    type: string;
                    description: string;
                    pattern: string;
                };
                background: {
                    type: string;
                    description: string;
                    pattern: string;
                };
                text: {
                    type: string;
                    description: string;
                    pattern: string;
                };
                muted: {
                    type: string;
                    description: string;
                    pattern: string;
                };
            };
            required: string[];
        };
        Spacing: {
            type: string;
            properties: {
                xs: {
                    type: string;
                    description: string;
                };
                sm: {
                    type: string;
                    description: string;
                };
                md: {
                    type: string;
                    description: string;
                };
                lg: {
                    type: string;
                    description: string;
                };
                xl: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        Fonts: {
            type: string;
            properties: {
                heading: {
                    type: string;
                    description: string;
                };
                body: {
                    type: string;
                    description: string;
                };
                mono: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
        Breakpoints: {
            type: string;
            properties: {
                sm: {
                    type: string;
                    description: string;
                };
                md: {
                    type: string;
                    description: string;
                };
                lg: {
                    type: string;
                    description: string;
                };
                xl: {
                    type: string;
                    description: string;
                };
            };
            required: string[];
        };
    };
};

declare const sectionConfigSchemas: {
    hero: {
        type: string;
    };
    features: {
        type: string;
    };
    testimonials: {
        type: string;
    };
    pricing: {
        type: string;
    };
    cta: {
        type: string;
    };
    footer: {
        type: string;
    };
    stats: {
        type: string;
    };
    faq: {
        type: string;
    };
    header: {
        type: string;
    };
};

declare function validateConfig(config: Partial<LandingPageConfig>): string[];
declare function validateSection(section: Partial<SectionConfig>): string[];

export { ButtonConfig, ComponentType, CtaConfig, FaqConfig, FeatureConfig, FooterConfig, HeaderConfig, HeroConfig, LandingPageConfig, PricingConfig, SectionType, StatConfig, TestimonialConfig, createCtaSection, createFaqSection, createFeaturesSection, createFooterSection, createHeaderSection, createHeroSection, createPricingSection, createReactRenderer, createStatsSection, createTestimonialsSection, defaultTheme, defineLandingPage, landingPageSchema, sectionConfigSchemas, validateConfig, validateSection };
