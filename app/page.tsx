"use client";

import { ContactSection } from "@/components/ContactSec";
import { EquipmentSection } from "@/components/EquipmentSec";
import { FooterLast } from "@/components/common/FooterSec";
import { GallerySection } from "@/components/GallerySec";
import { HeroSection } from "@/components/Herosec";
import { InteriorSection } from "@/components/InteriorSec";
import { Navigation } from "@/components/NavigationSec";
import { PackagesSection } from "@/components/PackagesSec";
import { RegistrationForm } from "@/components/RegistrationSec";
import { TestimonialsSection } from "@/components/TestimonialSec";
import { VideosSection } from "@/components/VideoSec";

export default function EngrossFitness() {
  const testimonials = [
    {
      name: "ismail qadri",
      image: "/passportsize.jpeg",
      quote:
        "Engross Fitness transformed my life. The trainers are incredible and the atmosphere is unmatched!",
      rating: 5,
    },
    {
      name: "shoukeen",
      image: "/passportsize.jpeg",
      quote:
        "Best gym I've ever been to. The equipment is top-notch and the community is so supportive.",
      rating: 5,
    },
    {
      name: "dilawar khan",
      image: "/passportsize.jpeg",
      quote:
        "I've achieved goals I never thought possible. This place truly helps you push your limits!",
      rating: 5,
    },
  ];

  const equipment = [
    {
      name: "Olympic Barbells",
      image: "/Olympic.jpg",
      description:
        "Professional-grade Olympic barbells for serious strength training",
    },
    {
      name: "Cable Machines",
      image: "/cable.jpg",
      description: "Versatile cable systems for functional movement patterns",
    },
    {
      name: "Cardio Zone",
      image: "/cardiozone.jpg",
      description:
        "State-of-the-art cardio equipment with entertainment systems",
    },
    {
      name: "Free Weights",
      image: "/free.jpg",
      description: "Complete range of dumbbells and kettlebells",
    },
  ];

  const packages = [
    {
      name: "Basic",
      popular: false,
      pricing: {
        monthly: {
          price: 899,
          period: "/month",
          features: [
            "Gym Access",
            "Locker Room",
            "Basic Equipment",
            "Mobile App",
          ],
        },
        quarterly: {
          price: 3599,
          period: "/3 months",
          discount: 9,
          features: [
            "Gym Access",
            "Locker Room",
            "Basic Equipment",
            "Mobile App",
          ],
        },
        halfYearly: {
          price: 5999,
          period: "/6 months",
          discount: 14,
          features: [
            "Gym Access",
            "Locker Room",
            "Basic Equipment",
            "Mobile App",
          ],
        },
        yearly: {
          price: 14999,
          period: "/year",
          discount: 20,
          features: [
            "Gym Access",
            "Locker Room",
            "Basic Equipment",
            "Mobile App",
          ],
        },
      },
    },
    {
      name: "Pro",
      popular: true,
      pricing: {
        monthly: {
          price: 1499,
          period: "/month",
          features: [
            "Everything in Basic",
            "Group Classes",
            "Personal Training Session",
            "Nutrition Guidance",
            "Priority Support",
          ],
        },
        quarterly: {
          price: 4899,
          period: "/3 months",
          discount: 10,
          features: [
            "Everything in Basic",
            "Group Classes",
            "Personal Training Session",
            "Nutrition Guidance",
            "Priority Support",
          ],
        },
        halfYearly: {
          price: 5999,
          period: "/6 months",
          discount: 15,
          features: [
            "Everything in Basic",
            "Group Classes",
            "Personal Training Session",
            "Nutrition Guidance",
            "Priority Support",
          ],
        },
        yearly: {
          price: 18999,
          period: "/year",
          discount: 22,
          features: [
            "Everything in Basic",
            "Group Classes",
            "Personal Training Session",
            "Nutrition Guidance",
            "Priority Support",
          ],
        },
      },
    },
    {
      name: "Elite",
      popular: false,
      pricing: {
        monthly: {
          price: 2999,
          period: "/month",
          features: [
            "Everything in Pro",
            "Unlimited Personal Training",
            "Meal Planning",
            "Recovery Services",
            "VIP Access",
          ],
        },
        quarterly: {
          price: 8999,
          period: "/3 months",
          discount: 9,
          features: [
            "Everything in Pro",
            "Unlimited Personal Training",
            "Meal Planning",
            "Recovery Services",
            "VIP Access",
          ],
        },
        halfYearly: {
          price: 12999,
          period: "/6 months",
          discount: 16,
          features: [
            "Everything in Pro",
            "Unlimited Personal Training",
            "Meal Planning",
            "Recovery Services",
            "VIP Access",
          ],
        },
        yearly: {
          price: 19999,
          period: "/year",
          discount: 24,
          features: [
            "Everything in Pro",
            "Unlimited Personal Training",
            "Meal Planning",
            "Recovery Services",
            "VIP Access",
          ],
        },
      },
    },
  ];

  const galleryImages = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden font-sans">
      <Navigation scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <InteriorSection />
      <EquipmentSection equipment={equipment} />
      <TestimonialsSection testimonials={testimonials} />
      <GallerySection galleryImages={galleryImages} />
      <VideosSection />
      <PackagesSection packages={packages} scrollToSection={scrollToSection} />
      <RegistrationForm />
      <ContactSection />
      <FooterLast />
    </div>
  );
}
