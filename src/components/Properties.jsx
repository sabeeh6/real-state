import React from 'react';
import { motion as Motion } from 'framer-motion';
import { MapPin, Bed, Bath, Square, DollarSign, Phone, Mail } from 'lucide-react';

export default function PropertiesSection() {
  const properties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
      title: 'Modern Villa with Pool',
      price: '$1,250,000',
      location: 'Beverly Hills, California',
      beds: 5,
      baths: 4,
      sqft: '4,500',
      type: 'For Sale',
      description: 'Stunning modern villa featuring open floor plan, gourmet kitchen, and resort-style backyard with infinity pool.',
      agent: {
        name: 'Sarah Johnson',
        phone: '+1 (310) 555-0142',
        email: 'sarah.j@realestate.com'
      }
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      title: 'Luxury Penthouse Suite',
      price: '$3,800,000',
      location: 'Manhattan, New York',
      beds: 4,
      baths: 3,
      sqft: '3,200',
      type: 'For Sale',
      description: 'Exclusive penthouse with breathtaking skyline views, marble finishes, and private rooftop terrace.',
      agent: {
        name: 'Michael Chen',
        phone: '+1 (212) 555-0198',
        email: 'michael.c@realestate.com'
      }
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      title: 'Contemporary Beach House',
      price: '$2,450,000',
      location: 'Malibu, California',
      beds: 4,
      baths: 3,
      sqft: '3,800',
      type: 'For Sale',
      description: 'Oceanfront property with panoramic views, floor-to-ceiling windows, and direct beach access.',
      agent: {
        name: 'Emma Davis',
        phone: '+1 (424) 555-0176',
        email: 'emma.d@realestate.com'
      }
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      title: 'Historic Brownstone',
      price: '$4,200,000',
      location: 'Boston, Massachusetts',
      beds: 6,
      baths: 5,
      sqft: '5,100',
      type: 'For Sale',
      description: 'Beautifully restored Victorian brownstone with original details, modern amenities, and private garden.',
      agent: {
        name: 'Robert Williams',
        phone: '+1 (617) 555-0123',
        email: 'robert.w@realestate.com'
      }
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
      title: 'Lakefront Estate',
      price: '$1,950,000',
      location: 'Seattle, Washington',
      beds: 5,
      baths: 4,
      sqft: '4,800',
      type: 'For Sale',
      description: 'Serene lakefront home with private dock, chef\'s kitchen, and stunning mountain views.',
      agent: {
        name: 'Jessica Martinez',
        phone: '+1 (206) 555-0189',
        email: 'jessica.m@realestate.com'
      }
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
      title: 'Desert Modern Retreat',
      price: '$1,680,000',
      location: 'Scottsdale, Arizona',
      beds: 4,
      baths: 3,
      sqft: '3,600',
      type: 'For Sale',
      description: 'Contemporary desert oasis with indoor-outdoor living, spa, and mountain backdrop.',
      agent: {
        name: 'David Thompson',
        phone: '+1 (480) 555-0134',
        email: 'david.t@realestate.com'
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover exceptional homes across America's most desirable locations
          </p>
        </Motion.div>

        {/* Properties Grid */}
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {properties.map((property) => (
            <Motion.div
              key={property.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold text-sm">
                  {property.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Price & Title */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-slate-900">
                      {property.price}
                    </h3>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">
                    {property.title}
                  </h4>
                  <div className="flex items-center text-slate-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                </div>

                {/* Property Details */}
                <div className="flex items-center justify-between py-3 border-t border-b border-slate-200 mb-4">
                  <div className="flex items-center space-x-1 text-slate-700">
                    <Bed className="w-5 h-5" />
                    <span className="text-sm font-medium">{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center space-x-1 text-slate-700">
                    <Bath className="w-5 h-5" />
                    <span className="text-sm font-medium">{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center space-x-1 text-slate-700">
                    <Square className="w-5 h-5" />
                    <span className="text-sm font-medium">{property.sqft} sqft</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {property.description}
                </p>

                {/* Agent Info */}
                <div className="bg-slate-50 rounded-lg p-4 space-y-2">
                  <p className="text-sm font-semibold text-slate-900">
                    {property.agent.name}
                  </p>
                  <div className="flex items-center text-slate-600 text-xs">
                    <Phone className="w-3 h-3 mr-2" />
                    <span>{property.agent.phone}</span>
                  </div>
                  <div className="flex items-center text-slate-600 text-xs">
                    <Mail className="w-3 h-3 mr-2" />
                    <span>{property.agent.email}</span>
                  </div>
                </div>

                {/* View Details Button */}
                <Motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 bg-slate-900 text-white font-semibold py-3 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  View Details
                </Motion.button>
              </div>
            </Motion.div>
          ))}
        </Motion.div>

        {/* Explore More Button */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center"
        >
          <Motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-5 bg-blue-600 text-white font-bold text-lg rounded-full overflow-hidden shadow-xl"
          >
            <span className="relative z-10 flex items-center">
              Explore More Properties
              <Motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="ml-2"
              >
                →
              </Motion.span>
            </span>
            <Motion.div
              className="absolute inset-0 bg-slate-900"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </Motion.button>
        </Motion.div>
      </div>
    </div>
  );
}