import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Home, TrendingUp, ArrowRight, Building2, Users } from 'lucide-react';

const LocationsSection = () => {
  const [activeLocation, setActiveLocation] = useState(0);

  const locations = [
    {
      id: 1,
      name: "Downtown Miami",
      properties: 450,
      avgPrice: "$850K",
      image: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?w=800&q=80",
      description: "Vibrant urban living with stunning skyline views",
      growth: "+12%"
    },
    {
      id: 2,
      name: "Fort Lauderdale",
      properties: 320,
      avgPrice: "$620K",
      image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=800&q=80",
      description: "Coastal paradise with luxury waterfront properties",
      growth: "+8%"
    },
    {
      id: 3,
      name: "Boca Raton",
      properties: 280,
      avgPrice: "$920K",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
      description: "Exclusive neighborhoods and pristine beaches",
      growth: "+15%"
    },
    {
      id: 4,
      name: "Palm Beach",
      properties: 195,
      avgPrice: "$1.2M",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
      description: "Elite estates and world-class amenities",
      growth: "+18%"
    }
  ];

  const stats = [
    { icon: Home, value: "5,000+", label: "Properties Listed" },
    { icon: Users, value: "10K+", label: "Happy Clients" },
    { icon: Building2, value: "50+", label: "Cities Covered" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Heading */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full"
              >
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-blue-600 font-semibold text-sm">PRIME LOCATIONS</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Discover Properties in Premium Locations
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                We specialize in connecting you with the most sought-after properties across South Florida's premier neighborhoods. From vibrant urban centers to serene coastal communities, find your perfect location with us.
              </p>
            </div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                      <p className="text-sm text-slate-600">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Explore All Locations
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right - Locations Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Featured Location - Large Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative h-80 rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
              onHoverStart={() => setActiveLocation(0)}
            >
              <img
                src={locations[activeLocation].image}
                alt={locations[activeLocation].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-bold text-white">
                    {locations[activeLocation].name}
                  </h3>
                  <span className="px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    {locations[activeLocation].growth}
                  </span>
                </div>
                
                <p className="text-white/90">
                  {locations[activeLocation].description}
                </p>
                
                <div className="flex items-center gap-6 text-white">
                  <div className="flex items-center gap-2">
                    <Home className="w-5 h-5" />
                    <span className="font-semibold">{locations[activeLocation].properties}</span>
                    <span className="text-white/80 text-sm">Properties</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-semibold">{locations[activeLocation].avgPrice}</span>
                    <span className="text-white/80 text-sm">Avg Price</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Location Thumbnails */}
            <div className="grid grid-cols-3 gap-4">
              {locations.slice(1).map((location, index) => (
                <motion.div
                  key={location.id}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onClick={() => setActiveLocation(index + 1)}
                  className={`relative h-32 rounded-xl overflow-hidden cursor-pointer shadow-lg transition-all duration-300 ${
                    activeLocation === index + 1 ? 'ring-4 ring-blue-600' : ''
                  }`}
                >
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white font-semibold text-sm truncate">
                      {location.name}
                    </p>
                    <p className="text-white/80 text-xs">
                      {location.properties} Properties
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl border border-blue-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    Can't Find Your Area?
                  </h4>
                  <p className="text-slate-600 text-sm mb-3">
                    We cover 50+ cities across South Florida. Contact us to explore properties in your preferred location.
                  </p>
                  <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 flex items-center gap-2 group">
                    Contact Our Team
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;