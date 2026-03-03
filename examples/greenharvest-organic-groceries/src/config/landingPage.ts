import { defineLandingPage } from '@damarkuncoro/landing-page'
import { organicGroceriesTheme } from './theme'

export const greenHarvestLandingPage = defineLandingPage({
  title: 'GreenHarvest Organic Groceries',
  description: "Nature's Best, Delivered to You - Experience the true taste of organic with our regenerative farming practices.",
  theme: organicGroceriesTheme,
  sections: [
    {
      id: 'header',
      type: 'header',
      config: {
        logo: 'https://picsum.photos/seed/logo/40/40',
        title: 'GreenHarvest',
        links: [
          { text: 'Shop', url: '/shop' },
          { text: 'Our Story', url: '/about' },
          { text: 'Farmers', url: '/farmers' },
          { text: 'Recipes', url: '/recipes' },
        ],
        buttons: [
          { text: 'Login', url: '/login', variant: 'outline' },
          { text: 'Get Started', url: '/signup', variant: 'primary' },
        ],
        fixed: true,
        scrollEffect: true,
        skin: 'tailwind',
      },
    },
    {
      id: 'hero',
      type: 'hero',
      config: {
        title: "Nature's Best, Delivered to You",
        subtitle: "Experience the true taste of organic. We partner with local regenerative farmers to bring you seasonal, nutrient-dense produce that's good for you and the planet.",
        buttons: [
          {
            id: 'start-box',
            text: 'Start Your Box',
            url: '/shop',
            variant: 'primary',
            size: 'lg',
            skin: 'default',
          },
          {
            id: 'view-menu',
            text: 'View Seasonal Menu',
            url: '/menu',
            variant: 'secondary',
            size: 'lg',
            skin: 'default',
          },
        ],
        alignment: 'left',
        skin: 'skin2',
        image: 'https://picsum.photos/seed/organic-basket/800/1000',
        imageAlt: 'Organic Basket',
      },
    },
    {
      id: 'features',
      type: 'features',
      config: {
        features: [
          {
            id: 'regenerative-farming',
            title: 'Regenerative Farming',
            description: 'We go beyond organic. Our farmers focus on soil health and biodiversity.',
            icon: 'leaf',
          },
          {
            id: 'zero-waste-delivery',
            title: 'Zero-Waste Delivery',
            description: 'Reusable crates and compostable packaging. No plastic, ever.',
            icon: 'truck',
          },
          {
            id: 'fair-trade',
            title: 'Fair Trade Always',
            description: 'We ensure our farmers earn 3x more than the industry average.',
            icon: 'heart',
          },
        ],
      },
    },
    {
      id: 'products',
      type: 'pricing',
      config: {
        plans: [
          {
            id: 'seasonal-box',
            title: 'Seasonal Harvest Box',
            description: 'Locally sourced from Sunny Valley Farm',
            price: 45,
            period: '/week',
            features: ['5+ varieties of seasonal produce', 'Recipe cards included', 'Free delivery'],
            button: {
              id: 'add-box',
              text: 'Quick Add',
              url: '/shop/box',
              variant: 'primary',
              size: 'md',
            },
            featured: true,
          },
          {
            id: 'organic-honeycrisp',
            title: 'Organic Honeycrisp',
            description: 'Crunchy and sweet from local orchards',
            price: 12,
            period: '/lb',
            features: ['Perfect for snacking', 'Great in salads', 'Locally grown'],
            button: {
              id: 'add-honeycrisp',
              text: 'Quick Add',
              url: '/shop/apples',
              variant: 'secondary',
              size: 'md',
            },
          },
          {
            id: 'wildflower-honey',
            title: 'Wildflower Honey',
            description: 'Pure and raw from local beekeepers',
            price: 18,
            period: '/jar',
            features: ['100% pure', 'Local beekeepers', 'Sustainable'],
            button: {
              id: 'add-honey',
              text: 'Quick Add',
              url: '/shop/honey',
              variant: 'secondary',
              size: 'md',
            },
          },
        ],
      },
    },
    {
      id: 'testimonials',
      type: 'testimonials',
      config: {
        testimonials: [
          {
            id: 'chef-testimonial',
            quote: 'The quality is unmatched. I can finally taste the seasons again.',
            author: 'Elena Rodriguez',
            role: 'Executive Chef & Mother',
            avatar: 'https://picsum.photos/seed/chef/200/200',
          },
        ],
      },
    },
    {
      id: 'cta',
      type: 'cta',
      config: {
        title: 'Ready to eat better?',
        description: 'Join thousands of families who have switched to a more sustainable, delicious way of eating. First box is 20% off.',
        button: {
          id: 'claim-discount',
          text: 'Claim Your Discount',
          url: '/signup',
          variant: 'primary',
          size: 'lg',
        },
      },
    },
    {
      id: 'footer',
      type: 'footer',
      config: {
        title: 'GreenHarvest',
        description: 'Cultivating a healthier future through regenerative agriculture and community-driven food systems.',
        links: [
          {
            title: 'Shop',
            items: [
              { text: 'Weekly Boxes', url: '/shop/boxes' },
              { text: 'Seasonal Produce', url: '/shop/produce' },
              { text: 'Pantry Staples', url: '/shop/pantry' },
              { text: 'Gift Cards', url: '/shop/gift-cards' },
            ],
          },
          {
            title: 'Company',
            items: [
              { text: 'Our Story', url: '/about' },
              { text: 'Farmer Network', url: '/farmers' },
              { text: 'Sustainability', url: '/sustainability' },
              { text: 'Careers', url: '/careers' },
            ],
          },
        ],
        socialLinks: [
          { platform: 'Instagram', url: 'https://instagram.com/greenharvest', icon: 'instagram' },
          { platform: 'Facebook', url: 'https://facebook.com/greenharvest', icon: 'facebook' },
          { platform: 'Twitter', url: 'https://twitter.com/greenharvest', icon: 'twitter' },
        ],
        copyright: '© 2026 GreenHarvest Organic Groceries. All rights reserved.',
      },
    },
  ],
})