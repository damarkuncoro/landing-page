import React from 'react';
import { defineLandingPage, createReactRenderer } from '@damarkuncoro/landing-page';
import { createHeaderSection, createHeroSection, createFeaturesSection, createTestimonialsSection, createPricingSection, createCtaSection, createFooterSection } from '@damarkuncoro/landing-page';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBasket, Leaf, Truck, Heart, ChevronRight, Star, Menu, X, ArrowRight, Instagram, Facebook, Twitter } from 'lucide-react';

const motionLandingPage = defineLandingPage({
  title: 'Seedy - Catering Sehat & Lezat',
  description: 'Catering sehat & lezat untuk kebutuhan harian, event, hingga corporate.',
  sections: [
    createHeaderSection({
      title: 'Seedy',
      logo: 'https://picsum.photos/120',
      links: [
        { id: 'home', text: 'Beranda', url: '/' },
        { id: 'features', text: 'Keunggulan', url: '/keunggulan' },
        { id: 'menu', text: 'Menu Favorit', url: '/menu' },
        { id: 'testimonials', text: 'Testimoni', url: '/testimoni' },
        { id: 'contact', text: 'Kontak', url: '/kontak' },
      ],
      skin: 'default',
    }),
    createHeroSection({
      title: 'Catering Lezat & Sehat untuk Setiap Acara',
      subtitle: 'Menu fresh, bahan pilihan, dan pelayanan tepat waktu untuk kebutuhan harian, event, hingga corporate.',
      buttons: [
        {
          id: 'order',
          text: 'Pesan Sekarang',
          url: '/pesan',
          variant: 'primary',
          size: 'lg',
        },
        {
          id: 'menu',
          text: 'Lihat Menu',
          url: '/menu',
          variant: 'secondary',
          size: 'lg',
        },
      ],
      image: 'https://picsum.photos/1280/640',
      imageAlt: 'Catering Seedy',
      alignment: 'center',
      skin: 'skin9',
    }),
    createFeaturesSection({
      features: [
        {
          id: 'fresh',
          title: 'Bahan Segar & Higienis',
          description: 'Semua menu dibuat dari bahan segar pilihan setiap hari.',
          icon: '🥬',
        },
        {
          id: 'on-time',
          title: 'Tepat Waktu',
          description: 'Pengiriman sesuai jadwal, tanpa drama.',
          icon: '⏱️',
        },
        {
          id: 'variety',
          title: 'Menu Variatif',
          description: 'Harian, diet, vegetarian, hingga event besar.',
          icon: '🥗',
        },
        {
          id: 'corporate',
          title: 'Corporate & Event',
          description: 'Kantor, wedding gathering, dan lain-lain.',
          icon: '🏢',
        },
      ],
    }),
    createTestimonialsSection({
      testimonials: [
        {
          id: 'andi',
          author: 'Andi',
          role: 'Wedding Planner',
          avatar: 'https://picsum.photos/100',
          quote: 'Makanannya enak, porsinya pas, delivery tepat waktu.',
        },
        {
          id: 'dewi',
          author: 'Dewi',
          role: 'HR Manager',
          avatar: 'https://picsum.photos/100?2',
          quote: 'Catering andalan untuk acara kantor.',
        },
        {
          id: 'budi',
          author: 'Budi',
          role: 'Entrepreneur',
          avatar: 'https://picsum.photos/100?3',
          quote: 'Menu variatif, tepat waktu, dan layanan ramah.',
        },
      ],
    }),
    createPricingSection({
      plans: [
        {
          id: 'chicken-steak',
          title: 'Chicken Steak Premium',
          description: 'Dada ayam panggang dengan saus spesial dan sayuran segar.',
          price: 50000,
          period: 'per porsi',
          features: [
            'Porsi besar',
            'Sayur segar',
            'Saus spesial',
            'Pengiriman',
          ],
          button: {
            text: 'Pesan Sekarang',
            url: '/pesan/chicken-steak',
            variant: 'primary',
            size: 'md',
          },
          featured: true,
        },
        {
          id: 'salmon-teriyaki',
          title: 'Salmon Teriyaki',
          description: 'Fillet salmon panggang saus teriyaki, disajikan dengan sayur.',
          price: 60000,
          period: 'per porsi',
          features: [
            'Salmon premium',
            'Saus teriyaki',
            'Sehat & lezat',
            'Pengiriman',
          ],
          button: {
            text: 'Pesan Sekarang',
            url: '/pesan/salmon-teriyaki',
            variant: 'secondary',
            size: 'md',
          },
        },
        {
          id: 'beef-bulgogi',
          title: 'Beef Bulgogi',
          description: 'Irisan daging sapi ala Korea dengan saus bulgogi.',
          price: 45000,
          period: 'per porsi',
          features: [
            'Daging sapi pilihan',
            'Saus bulgogi',
            'Porsi mengenyangkan',
            'Pengiriman',
          ],
          button: {
            text: 'Pesan Sekarang',
            url: '/pesan/beef-bulgogi',
            variant: 'secondary',
            size: 'md',
          },
        },
      ],
    }),
    createCtaSection({
      title: 'Siap Pesan untuk Event Anda?',
      description: 'Konsultasi gratis untuk kebutuhan harian, kantor, atau event besar.',
      button: {
        text: 'Hubungi Kami',
        url: '/kontak',
        variant: 'primary',
        size: 'lg',
      },
    }),
    createFooterSection({
      title: 'Seedy',
      logo: 'https://picsum.photos/120',
      description: 'Catering sehat & lezat untuk kebutuhan harian, event, hingga corporate.',
      links: [
        {
          title: 'Perusahaan',
          items: [
            { text: 'Tentang Kami', url: '/tentang' },
            { text: 'Karier', url: '/karier' },
            { text: 'Kontak', url: '/kontak' },
          ],
        },
        {
          title: 'Layanan',
          items: [
            { text: 'Catering Harian', url: '/catering-harian' },
            { text: 'Catering Event', url: '/catering-event' },
            { text: 'Catering Corporate', url: '/catering-corporate' },
          ],
        },
        {
          title: 'Informasi',
          items: [
            { text: 'FAQ', url: '/faq' },
            { text: 'Syarat & Ketentuan', url: '/syarat-ketentuan' },
            { text: 'Kebijakan Privasi', url: '/kebijakan-privasi' },
          ],
        },
      ],
      socialLinks: [
        {
          platform: 'Instagram',
          url: 'https://instagram.com',
        },
        {
          platform: 'Facebook',
          url: 'https://facebook.com',
        },
        {
          platform: 'Twitter',
          url: 'https://twitter.com',
        },
      ],
      copyright: '© 2026 Seedy Catering. All rights reserved.',
    }),
  ],
});

const LandingPage = createReactRenderer();

export default function MotionLucideLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <LandingPage config={motionLandingPage} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}