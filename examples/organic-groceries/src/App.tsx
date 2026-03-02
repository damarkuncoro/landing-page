import React from 'react'
import {
  defineLandingPage,
  createReactRenderer,
  createHeaderSection,
  createHeroSection,
  createFeaturesSection,
  createTestimonialsSection,
  createPricingSection,
  createCtaSection,
  createFooterSection,
  createStatsSection,
  createFaqSection,
} from '@damarkuncoro/landing-page'

const Landing = createReactRenderer()

const landing = defineLandingPage({
  title: 'Organic Groceries',
  description:
    'Catering lezat & sehat untuk setiap acara. Fresh, tepat waktu, dan variatif.',
  theme: {
    colors: {
      primary: '#22c55e',
      secondary: '#16a34a',
      accent: '#a3e635',
      background: '#f6fef9',
      text: '#052e16',
      muted: '#64748b',
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
    },
    fonts: {
      heading: 'Inter, system-ui, sans-serif',
      body: 'Inter, system-ui, sans-serif',
      mono: 'monospace',
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  sections: [
    createHeaderSection({
      logo: 'https://picsum.photos/120',
      title: 'Seedy',
      links: [
        { id: 'home', text: 'Beranda', url: '/' },
        { id: 'features', text: 'Keunggulan', url: '#features' },
        { id: 'menu', text: 'Menu Favorit', url: '#menu' },
        { id: 'testimonials', text: 'Testimoni', url: '#testimonials' },
      ],
    }),
    createHeroSection({
      title: 'Catering Lezat & Sehat untuk Setiap Acara',
      subtitle:
        'Menu fresh, bahan pilihan, dan pelayanan tepat waktu untuk kebutuhan harian, event, hingga corporate.',
      buttons: [
        { id: 'cta-1', text: 'Pesan Sekarang', url: '#order', variant: 'primary', size: 'lg' },
        { id: 'cta-2', text: 'Lihat Menu', url: '#menu', variant: 'secondary', size: 'lg' },
      ],
      image: 'https://picsum.photos/1280/640',
      alignment: 'left',
      skin: 'skin9',
    }),
    createFeaturesSection({
      features: [
        {
          id: 'feature-1',
          title: 'Bahan Segar & Higienis',
          description: 'Semua menu dibuat dari bahan segar pilihan setiap hari.',
          icon: '🥬',
        },
        {
          id: 'feature-2',
          title: 'Tepat Waktu',
          description: 'Pengiriman sesuai jadwal, tanpa drama.',
          icon: '⏱️',
        },
        {
          id: 'feature-3',
          title: 'Menu Variatif',
          description: 'Harian, diet, vegetarian, hingga event besar.',
          icon: '🥗',
        },
        {
          id: 'feature-4',
          title: 'Corporate & Event',
          description: 'Kantor, wedding gathering, dan lain-lain.',
          icon: '🏢',
        },
      ],
    }),
    createPricingSection({
      plans: [
        {
          id: 'menu-1',
          title: 'Chicken Steak Premium',
          description: 'Dada ayam panggang dengan saus spesial dan sayuran segar.',
          price: 50,
          period: 'rb',
          features: ['Porsi besar', 'Sayur segar', 'Saus spesial'],
          button: { text: 'Lihat Detail', url: '#menu-1', variant: 'primary', size: 'md' },
          featured: true,
        },
        {
          id: 'menu-2',
          title: 'Salmon Teriyaki',
          description: 'Fillet salmon panggang saus teriyaki, disajikan dengan sayur.',
          price: 60,
          period: 'rb',
          features: ['Salmon premium', 'Saus teriyaki', 'Sehat & lezat'],
          button: { text: 'Lihat Detail', url: '#menu-2', variant: 'primary', size: 'md' },
        },
        {
          id: 'menu-3',
          title: 'Beef Bulgogi',
          description: 'Irisan daging sapi ala korea dengan saus bulgogi.',
          price: 45,
          period: 'rb',
          features: ['Daging sapi pilihan', 'Saus bulgogi', 'Porsi mengenyangkan'],
          button: { text: 'Lihat Detail', url: '#menu-3', variant: 'primary', size: 'md' },
        },
      ],
    }),
    createTestimonialsSection({
      testimonials: [
        {
          id: 'andi',
          quote: 'Makanannya enak, porsinya pas, delivery tepat waktu.',
          author: 'Andi',
          role: 'Jakarta',
          avatar: 'https://picsum.photos/100',
        },
        {
          id: 'dewi',
          quote: 'Catering andalan untuk acara kantor.',
          author: 'Dewi',
          role: 'Bandung',
          avatar: 'https://picsum.photos/100?2',
        },
        {
          id: 'budi',
          quote:
            'Menu variatif, tepat waktu, dan layanan ramah.',
          author: 'Budi',
          role: 'Sundaya',
          avatar: 'https://picsum.photos/100?3',
        },
      ],
    }),
    createStatsSection({
      stats: [
        { id: 's1', number: '1', label: 'Pilih Menu', icon: '🛒' },
        { id: 's2', number: '2', label: 'Konfirmasi Pesanan', icon: '✅' },
        { id: 's3', number: '3', label: 'Kami Antar ke Lokasi', icon: '🚚' },
      ],
    }),
    createCtaSection({
      title: 'Siap pesan untuk event Anda?',
      description:
        'Konsultasi gratis untuk kebutuhan harian, kantor, atau event besar.',
      button: { text: 'Hubungi Kami', url: '#order', variant: 'primary', size: 'lg' },
    }),
    createFaqSection({
      items: [
        {
          id: 'faq-1',
          question: 'Area layanan catering kami?',
          answer:
            'Saat ini kami melayani Jakarta, Depok, Tangerang, dan Bekasi. Area lain on-request.',
        },
        {
          id: 'faq-2',
          question: 'Berapa minimal pemesanan?',
          answer:
            'Minimal 10 porsi untuk menu harian. Untuk event, kami menyesuaikan kebutuhan Anda.',
        },
        {
          id: 'faq-3',
          question: 'Kapan paling lambat pemesanan dilakukan?',
          answer:
            'Untuk harian, H-1 pukul 17.00. Untuk event, idealnya H-7 agar persiapan optimal.',
        },
        {
          id: 'faq-4',
          question: 'Apakah ada opsi vegetarian/diet tertentu?',
          answer:
            'Ada. Kami menyediakan menu vegetarian, low-carb, dan custom diet sesuai arahan.',
        },
      ],
    }),
    createFooterSection({
      title: 'Seedy',
      description:
        'Catering sehat & lezat untuk kebutuhan harian, event, hingga corporate.',
      links: [
        {
          title: 'Perusahaan',
          items: [
            { text: 'Tentang Kami', url: '#about' },
            { text: 'Karier', url: '#career' },
            { text: 'Kontak', url: '#contact' },
          ],
        },
        {
          title: 'Layanan',
          items: [
            { text: 'Catering Harian', url: '#services' },
            { text: 'Catering Event', url: '#services' },
            { text: 'Catering Corporate', url: '#services' },
          ],
        },
      ],
      socialLinks: [
        { platform: 'Instagram', url: 'https://instagram.com' },
        { platform: 'Facebook', url: 'https://facebook.com' },
      ],
      copyright: '© 2026 Seedy Catering. All rights reserved.',
    }),
  ],
})

export default function App() {
  return <Landing config={landing} />
}
