"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeMediumTitles"
        background="blurBottom"
        cardStyle="layered-gradient"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "About",
          id: "about",
        },
        {
          name: "Scents",
          id: "products",
        },
        {
          name: "Stories",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Aroma Mundi"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      background={{
        variant: "gradient-bars",
      }}
      title="Fragrance Without Borders"
      description="Discover a global collection of scents inspired by the landscapes, traditions, and memories of every corner of the world. Aroma Mundi captures the essence of global travel in every drop."
      testimonials={[
        {
          name: "Elena Rossi",
          handle: "@elena",
          testimonial: "The Mediterranean breeze scent is my daily escape to Italy.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-adult-woman-works-her-tablet-sits-with-notebook-kitchen-floor-home-studie_1258-183235.jpg",
        },
        {
          name: "Liam Chen",
          handle: "@liam",
          testimonial: "A unique blend that perfectly captures the spirit of Tokyo.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-mask-free_23-2149440014.jpg",
        },
        {
          name: "Sofia Vance",
          handle: "@sofia",
          testimonial: "Truly a global olfactory journey. Unparalleled quality.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-mature-businessman-glasses-shaking-hands-with-female-partner-meeting-co-working-space_74855-10006.jpg",
        },
        {
          name: "Marcus Thorne",
          handle: "@marcus",
          testimonial: "Sophisticated, rare, and deeply moving fragrances.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-view-young-happy-woman-communicating-mobile-phone-writing-notes-night-home_637285-4407.jpg",
        },
        {
          name: "Zara Ali",
          handle: "@zara",
          testimonial: "Each bottle is a work of art and cultural storytelling.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-coworkers-holding-tablets-showing-thumbs-up-stairs_1262-20218.jpg",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-still-life-with-herbal-medicine_23-2149292040.jpg"
      imageAlt="Luxury perfume bottle"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/glass-perfume-bottle-minimal-beauty-product-packaging-with-design-space_53876-126578.jpg",
          alt: "Minimalist bottle",
        },
        {
          src: "http://img.b2bpic.net/free-photo/front-view-argan-oil-arrangement_23-2148955759.jpg",
          alt: "Argan oil detail",
        },
        {
          src: "http://img.b2bpic.net/free-photo/autumn-still-life-arrangement_23-2149080520.jpg",
          alt: "Autumn still life",
        },
        {
          src: "http://img.b2bpic.net/free-photo/shower-gel-bath-salts-candle_23-2148366110.jpg",
          alt: "Spa essentials",
        },
        {
          src: "http://img.b2bpic.net/free-photo/glass-water-bottle-wooden-table-aerial-view_53876-105827.jpg",
          alt: "Glass bottle on wood",
        },
      ]}
      avatarText="Trusted by 10,000+ scent connoisseurs worldwide."
      marqueeItems={[
        {
          type: "text",
          text: "Sustainable Sourcing",
        },
        {
          type: "text",
          text: "Global Heritage",
        },
        {
          type: "text",
          text: "Artisanal Blends",
        },
        {
          type: "text",
          text: "Cruelty Free",
        },
        {
          type: "text",
          text: "Clean Ingredients",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Scents That Connect Continents"
      description="At Aroma Mundi, we believe that every smell tells a story. From the lavender fields of Provence to the spice markets of Mumbai, we curate essences from across the globe, bringing them directly to your collection."
      bulletPoints={[
        {
          title: "Globally Sourced",
          description: "Authentic ingredients gathered from heritage growers worldwide.",
        },
        {
          title: "Artisanal Craft",
          description: "Small-batch production ensures purity and depth of scent.",
        },
        {
          title: "Sustainable Ethics",
          description: "Ethically harvested materials with full supply-chain transparency.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/high-angle-pigmented-cloth-with-natural-colors-assortment_23-2148734275.jpg"
      imageAlt="Perfume artisan workspace"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardEight
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Floral Elegance",
          description: "Delicate petals, hand-picked at dawn to capture freshness.",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-aromatic-body-products_23-2148317591.jpg",
        },
        {
          title: "Warm Spices",
          description: "Robust, spicy notes that ground the fragrance in heritage.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-chocolate-ice-cream-plate_52683-92463.jpg",
        },
        {
          title: "Citrus Vitality",
          description: "Bright, uplifting notes that bring life to every blend.",
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-view-fresh-yellow-green-red-apple-slices-white-plate-with-lemon-wooden-cutting-board-cinnamon-limes-gray-background_140725-131292.jpg",
        },
      ]}
      title="The Pillars of Our Craft"
      description="Our fragrances are structured to evoke emotion through complex, multi-layered notes sourced from the most pristine environments."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          brand: "Aroma Mundi",
          name: "Provence Midnight",
          price: "$120",
          rating: 5,
          reviewCount: "1.2k",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-light-bottle-with-golden-cap-isolated-white-floor_140725-11640.jpg",
        },
        {
          id: "p2",
          brand: "Aroma Mundi",
          name: "Kyoto Zen",
          price: "$150",
          rating: 5,
          reviewCount: "890",
          imageSrc: "http://img.b2bpic.net/free-photo/dark-nail-polish_23-2147710588.jpg",
        },
        {
          id: "p3",
          brand: "Aroma Mundi",
          name: "Marrakech Spice",
          price: "$135",
          rating: 4,
          reviewCount: "650",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-perfume-floating-water_23-2150963092.jpg",
        },
        {
          id: "p4",
          brand: "Aroma Mundi",
          name: "Andean Mist",
          price: "$140",
          rating: 5,
          reviewCount: "420",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-perfume-bottles-arrangement_23-2149234382.jpg",
        },
        {
          id: "p5",
          brand: "Aroma Mundi",
          name: "Sahara Gold",
          price: "$160",
          rating: 5,
          reviewCount: "1.5k",
          imageSrc: "http://img.b2bpic.net/free-photo/cosmetic-bottle-with-luxurious-art-nouveau-inspired-sun-relief-background_23-2151420736.jpg",
        },
        {
          id: "p6",
          brand: "Aroma Mundi",
          name: "Arctic Frost",
          price: "$125",
          rating: 4,
          reviewCount: "380",
          imageSrc: "http://img.b2bpic.net/free-photo/trendy-color-swatches-with-different-elements_23-2150169885.jpg",
        },
      ]}
      title="Curated Collections"
      description="Choose your narrative from our signature global collections."
    />
  </div>

  <div id="socialproof" data-section="socialproof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Vogue",
        "Harper's Bazaar",
        "Elle",
        "Tatler",
        "Wallpaper",
        "GQ",
        "Monocle",
      ]}
      title="Global Recognition"
      description="Featured in leading global publications and luxury boutiques."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Alice M.",
          handle: "@alice",
          testimonial: "I travel across the world, but this scent brings me home.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-waitress_107420-12307.jpg",
        },
        {
          id: "t2",
          name: "Ben T.",
          handle: "@ben",
          testimonial: "Sophisticated, subtle, yet lingers beautifully.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/person-virtual-date_23-2149296074.jpg",
        },
        {
          id: "t3",
          name: "Chloe L.",
          handle: "@chloe",
          testimonial: "The best curated collection I have ever found.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-man-making-ok-sign_1368-6336.jpg",
        },
        {
          id: "t4",
          name: "David W.",
          handle: "@david",
          testimonial: "Truly premium ingredients that set it apart.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-black-suit-holding-hand-his-forehead_23-2148401453.jpg",
        },
        {
          id: "t5",
          name: "Eva J.",
          handle: "@eva",
          testimonial: "Exquisite. Every bottle tells a distinct story.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/designer-face-mask-studio-show-room_53876-100303.jpg",
        },
      ]}
      showRating={true}
      title="A World of Stories"
      description="Our customers describe their scents as more than just a fragrance—they are personal journeys."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Are these ingredients vegan?",
          content: "Yes, we focus on plant-derived essences entirely.",
        },
        {
          id: "f2",
          title: "Do you ship worldwide?",
          content: "Absolutely, we ship directly to 150+ countries.",
        },
        {
          id: "f3",
          title: "Can I return a scent?",
          content: "We offer a 30-day scent discovery return policy.",
        },
      ]}
      title="Questions Answered"
      description="Learn more about our ingredients and global sourcing process."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Start Your Scent Journey"
      description="Have questions about a region or a particular scent profile? Let us know."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Tell us about your preferences",
        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/3d-rendering-classic-interior_23-2150943436.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/onions-wooden-board-high-angle_23-2148934792.jpg"
      logoText="Aroma Mundi"
      columns={[
        {
          title: "Brand",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Stories",
              href: "#testimonials",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Shipping",
              href: "#",
            },
            {
              label: "Returns",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
