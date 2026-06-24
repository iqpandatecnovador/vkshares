"use client";

import { motion } from "framer-motion";
import { MapPin, Star, TrendingDown } from "lucide-react";

const resorts = [
  {
    name: "Marriott's Aruba Ocean Club",
    location: "Noord, Aruba",
    price: 200,
    discount: 54,
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=600&auto=format&fit=crop",
    rating: 4.8
  },
  {
    name: "Club Wyndham Bonnet Creek",
    location: "Lake Buena Vista, Florida",
    price: 58,
    discount: 25,
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=600&auto=format&fit=crop",
    rating: 4.6
  },
  {
    name: "Marriott's Aruba Surf Club",
    location: "Noord, Aruba",
    price: 200,
    discount: 54,
    image: "https://images.unsplash.com/photo-1582610116397-edb318620f90?q=80&w=600&auto=format&fit=crop",
    rating: 4.9
  },
  {
    name: "Club Wyndham Ocean Walk",
    location: "Daytona Beach, Florida",
    price: 84,
    discount: 59,
    image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&w=600&auto=format&fit=crop",
    rating: 4.5
  },
  {
    name: "Grand Waikikian, a Hilton Grand Vacations Club",
    location: "Honolulu, Hawaii",
    price: 179,
    discount: 41,
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=600&auto=format&fit=crop",
    rating: 4.7
  },
  {
    name: "Flamingo, a Hilton Grand Vacations Club",
    location: "Las Vegas, Nevada",
    price: 31,
    discount: 24,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=600&auto=format&fit=crop",
    rating: 4.4
  },
  {
    name: "Club Wyndham Smoky Mountains",
    location: "Sevierville, Tennessee",
    price: 52,
    discount: 57,
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=600&auto=format&fit=crop",
    rating: 4.6
  },
  {
    name: "The Boulevard a Hilton Grand Vacations Club",
    location: "Las Vegas, Nevada",
    price: 46,
    discount: 70,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=600&auto=format&fit=crop",
    rating: 4.5
  },
  {
    name: "Marriott's Desert Springs Villas II",
    location: "Palm Desert, California",
    price: 48,
    discount: 29,
    image: "https://images.unsplash.com/photo-1512356181113-853a150f1aa7?q=80&w=600&auto=format&fit=crop",
    rating: 4.7
  }
];

export default function TopResorts() {
  return (
    <section className="py-24 bg-[var(--color-background)] relative overflow-hidden" id="destinations">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-primary)] opacity-5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-secondary)] opacity-5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold font-heading text-[var(--color-text)] mb-4"
            >
              Exclusive Deals at Top Resorts
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[var(--color-text-muted)] text-lg"
            >
              Experience luxury for less. Book direct from owners and save up to 70% on premium resort stays worldwide.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0"
          >
            <button className="text-[var(--color-primary)] font-semibold hover:text-[var(--color-primary-hover)] transition-colors flex items-center gap-2">
              View All Destinations
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Grid of Resorts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resorts.map((resort, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-[var(--color-primary)]/10 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <img 
                  src={resort.image} 
                  alt={resort.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-sm font-bold text-gray-900 shadow-lg">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  {resort.rating}
                </div>
                {resort.discount > 0 && (
                  <div className="absolute bottom-4 left-4 bg-[var(--color-secondary)] text-white px-3 py-1 rounded-md font-bold text-sm flex items-center gap-1 shadow-lg">
                    <TrendingDown className="w-4 h-4" />
                    Up to {resort.discount}% OFF
                  </div>
                )}
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-1 text-[var(--color-text-muted)] text-sm mb-2">
                  <MapPin className="w-4 h-4 text-[var(--color-primary)] flex-shrink-0" />
                  <span className="truncate">{resort.location}</span>
                </div>
                <h3 className="text-xl font-bold font-heading text-[var(--color-text)] mb-4 line-clamp-2">
                  {resort.name}
                </h3>
                
                <div className="flex items-end justify-between mt-auto pt-4 border-t border-[var(--color-border)]">
                  <div>
                    <p className="text-sm text-[var(--color-text-muted)]">Starting from</p>
                    <p className="text-2xl font-bold text-[var(--color-primary)]">
                      ${resort.price}
                      <span className="text-sm font-normal text-[var(--color-text-muted)]">/night</span>
                    </p>
                  </div>
                  <button className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
