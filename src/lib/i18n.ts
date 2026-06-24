export type Language = 'en' | 'es';

export type FaqItem = { q: string; a: string };
export type TestimonialItem = { name: string; location: string; text: string };
export type WhyUsPoint = { title: string; desc: string };

export const translations = {
  en: {
    nav: {
      services: "Services",
      membership: "Memberships",
      contact: "Contact"
    },
    hero: {
      title1: "Rent Your",
      title2: "Property Safely",
      subtitle: "Turn unused vacation weeks into income. Professional vacation property management for owners seeking to maximize their ROI with a trusted North American network.",
      ctaPrimary: "Maximize Your ROI",
      ctaSecondary: "View Plans"
    },
    mission: {
      title: "Mission",
      description: "To provide a secure and transparent solution for vacation property owners, offering fair returns for the rental of their weeks and delivering unforgettable vacations to verified travelers."
    },
    vision: {
      title: "Vision",
      description: "To eliminate the deceptive vacation property experience by building a premium, trusted, and equitable ecosystem that benefits both owners and vacationers globally."
    },
    trust: {
      title: "Success Metrics",
      stat1: "$2M+",
      stat1Desc: "Generated for Owners",
      stat2: "15k+",
      stat2Desc: "Weeks Rented",
      stat3: "98%",
      stat3Desc: "Owner Satisfaction",
      stat4: "24/7",
      stat4Desc: "VIP Concierge"
    },
    whyUs: {
      title: "Why Choose VKSHARES",
      subtitle: "The most reliable network in North America.",
      points: [
        { title: "Verified Travelers", desc: "Every guest is strictly vetted to ensure the safety of your property." },
        { title: "Passive Vacation Income", desc: "We handle the marketing, booking, and support. You just collect your returns." },
        { title: "Secure Transactions", desc: "100% encrypted payouts backed by Stripe and international banking standards." }
      ]
    },
    memberships: {
      title1: "Professional",
      title2: "Management Plans",
      subtitle: "Choose the tier that best suits your investment strategy.",
      silver: {
        name: "Silver",
        price: "$200",
        description: "Entry-level management for single-property owners.",
        features: ["1 to 5 weeks limit", "65% Rental Return", "Standard Support"],
        cta: "Select Silver",
        tag: ""
      },
      gold: {
        name: "Gold",
        price: "$300",
        description: "Optimized visibility and faster rental turnarounds.",
        features: ["Up to 10 weeks", "75% Rental Return", "Priority Support"],
        cta: "Select Gold",
        tag: "Most Popular"
      },
      platinum: {
        name: "Platinum",
        price: "$500",
        description: "High-yield returns with dedicated account management.",
        features: ["Up to 20 weeks", "80% Rental Return", "Dedicated Manager"],
        cta: "Select Platinum",
        tag: "Best Value"
      },
      specialPlatinum: {
        name: "Special Platinum",
        price: "$1,500",
        description: "The ultimate investor package for maximum ROI.",
        features: ["Unlimited weeks", "85% Rental Return", "VIP Concierge 24/7", "Exclusive Network Access"],
        cta: "Select VIP",
        tag: "VIP Unlimited"
      }
    },
    testimonials: {
      title: "Owner Success Stories",
      items: [
        { name: "Robert H.", location: "California, USA", text: "VKSHARES turned my unused weeks in Cabo into a consistent revenue stream. Highly recommended." },
        { name: "Sarah M.", location: "Toronto, Canada", text: "The transparency and security they offer are unmatched. I finally feel in control of my vacation property." },
        { name: "James L.", location: "Texas, USA", text: "Upgraded to Special Platinum and the returns have easily paid for the membership twice over." }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        { q: "How do I pay my membership?", a: "Payments are processed securely via Stripe. For SPEI wire transfers (Mexico), please send to CLABE: 1273 7502 1206 8286 60, Name: CARLOS FABIAN GUTIERREZ, Bank: Banco Azteca." },
        { q: "How do I get paid?", a: "Payments are processed securely via wire transfer or Stripe directly to your bank account once a rental is finalized." },
        { q: "Is my vacation property safe?", a: "Absolutely. We only rent to verified travelers and hold security deposits for every booking." },
        { q: "Can I upgrade my plan later?", a: "Yes, you can upgrade your membership at any time to unlock higher return percentages." }
      ]
    },
    modal: {
      title: "Confirm Your Membership",
      subtitle: "Please provide your details to process your membership and start maximizing your ROI.",
      name: "Full Name",
      email: "Email Address",
      phone: "WhatsApp Number",
      cta: "Proceed to Secure Checkout",
      secure: "100% Encrypted Checkout via Stripe"
    },
    footer: {
      address: "Francisco Medina Ascencio 1989, Col. Las Glorias Zona Hotelera Note C.P 48333 Plaza Villas Vallarta, Puerto Vallarta, Jalisco, Mexico",
      email: "contact@vkshares.com",
      rights: "All rights reserved. VKSHARES."
    }
  },
  es: {
    nav: {
      services: "Servicios",
      membership: "Planes",
      contact: "Contacto"
    },
    hero: {
      title1: "Renta tu Propiedad",
      title2: "Vacacional Segura",
      subtitle: "Convierte semanas vacacionales sin usar en ingresos. Gestión profesional para propietarios que buscan maximizar su ROI con una red norteamericana confiable.",
      ctaPrimary: "Maximiza tu ROI",
      ctaSecondary: "Ver Planes"
    },
    mission: {
      title: "Misión",
      description: "Proveer una solución segura y transparente para propietarios, ofreciendo retornos justos por la renta de sus semanas y entregando vacaciones inolvidables a viajeros verificados."
    },
    vision: {
      title: "Visión",
      description: "Eliminar la experiencia engañosa de las propiedades vacacionales construyendo un ecosistema premium, confiable y equitativo que beneficie a dueños y vacacionistas a nivel global."
    },
    trust: {
      title: "Métricas de Éxito",
      stat1: "$2M+",
      stat1Desc: "Generados para Dueños",
      stat2: "15k+",
      stat2Desc: "Semanas Rentadas",
      stat3: "98%",
      stat3Desc: "Satisfacción de Dueños",
      stat4: "24/7",
      stat4Desc: "Concierge VIP"
    },
    whyUs: {
      title: "Por qué Elegir a VKSHARES",
      subtitle: "La red más confiable de Norteamérica.",
      points: [
        { title: "Viajeros Verificados", desc: "Cada huésped es estrictamente evaluado para garantizar la seguridad de tu propiedad." },
        { title: "Ingresos Pasivos", desc: "Nos encargamos del marketing, reservas y soporte. Tú solo recibes tus retornos." },
        { title: "Transacciones Seguras", desc: "Pagos 100% encriptados respaldados por Stripe y estándares bancarios internacionales." }
      ]
    },
    memberships: {
      title1: "Planes de",
      title2: "Gestión Profesional",
      subtitle: "Elige el nivel que mejor se adapte a tu estrategia de inversión.",
      silver: {
        name: "Silver",
        price: "$200",
        description: "Gestión de entrada para propietarios de una sola propiedad.",
        features: ["Límite de 1 a 5 semanas", "65% de Retorno de Renta", "Soporte Estándar"],
        cta: "Seleccionar Silver",
        tag: ""
      },
      gold: {
        name: "Gold",
        price: "$300",
        description: "Visibilidad optimizada y tiempos de renta más rápidos.",
        features: ["Hasta 10 semanas", "75% de Retorno de Renta", "Soporte Prioritario"],
        cta: "Seleccionar Gold",
        tag: "Más Popular"
      },
      platinum: {
        name: "Platinum",
        price: "$500",
        description: "Retornos de alto rendimiento con gestión de cuenta dedicada.",
        features: ["Hasta 20 semanas", "80% de Retorno de Renta", "Mánager Dedicado"],
        cta: "Seleccionar Platinum",
        tag: "Mejor Valor"
      },
      specialPlatinum: {
        name: "Special Platinum",
        price: "$1,500",
        description: "El paquete definitivo para inversores buscando el máximo ROI.",
        features: ["Semanas Ilimitadas", "85% de Retorno de Renta", "Concierge VIP 24/7", "Acceso a Red Exclusiva"],
        cta: "Seleccionar VIP",
        tag: "VIP Ilimitado"
      }
    },
    testimonials: {
      title: "Historias de Éxito",
      items: [
        { name: "Robert H.", location: "California, USA", text: "VKSHARES convirtió mis semanas sin usar en Cabo en un flujo constante de ingresos. Altamente recomendado." },
        { name: "Sarah M.", location: "Toronto, Canadá", text: "La transparencia y seguridad que ofrecen son inigualables. Por fin siento que tengo el control de mi propiedad vacacional." },
        { name: "James L.", location: "Texas, USA", text: "Actualicé a Special Platinum y los retornos fácilmente han pagado la membresía dos veces." }
      ]
    },
    faq: {
      title: "Preguntas Frecuentes",
      items: [
        { q: "¿Cómo pago mi membresía?", a: "Los pagos se procesan de forma segura a través de Stripe. Para transferencias SPEI (México), por favor envíe a CLABE: 1273 7502 1206 8286 60, Titular: CARLOS FABIAN GUTIERREZ, Banco: Banco Azteca." },
        { q: "¿Cómo recibo mis pagos?", a: "Los pagos se procesan de forma segura a través de transferencia bancaria o Stripe directamente a tu cuenta bancaria una vez finalizada la renta." },
        { q: "¿Está segura mi propiedad vacacional?", a: "Absolutamente. Solo rentamos a viajeros verificados y retenemos depósitos de seguridad para cada reserva." },
        { q: "¿Puedo mejorar mi plan después?", a: "Sí, puedes actualizar tu membresía en cualquier momento para desbloquear mayores porcentajes de retorno." }
      ]
    },
    modal: {
      title: "Confirma tu Plan",
      subtitle: "Por favor provee tus detalles para procesar tu inscripción y comenzar a maximizar tu ROI.",
      name: "Nombre Completo",
      email: "Correo Electrónico",
      phone: "Número de WhatsApp",
      cta: "Continuar al Pago Seguro",
      secure: "Pago 100% encriptado vía Stripe"
    },
    footer: {
      address: "Francisco Medina Ascencio 1989, Col. Las Glorias Zona Hotelera Note C.P 48333 Plaza Villas Vallarta, Puerto Vallarta, Jalisco, Mexico",
      email: "contact@vkshares.com",
      rights: "Todos los derechos reservados. VKSHARES."
    }
  }
};
