import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, Home, Key, Building2, TrendingUp } from 'lucide-react';
import buyer from "../assets/buyer.jfif"

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      category: "SELLER",
      title: "What is my home worth?",
      description: "Get an accurate valuation of your property with our expert analysis and market insights.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      icon: Home,
      gradient: "from-blue-600 to-blue-800"
    },
    {
      id: 2,
      category: "BUYER",
      title: "Dream home Finder",
      description: "Discover your perfect property from our extensive portfolio of luxury homes and estates.",
      image: buyer,
      icon: Key,
      gradient: "from-slate-700 to-slate-900"
    },
    {
      id: 3,
      category: "MANAGEMENT",
      title: "Property Management",
      description: "Professional property management services to maximize your investment returns.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      icon: Building2,
      gradient: "from-emerald-600 to-emerald-800"
    },
    {
      id: 4,
      category: "INVESTORS",
      title: "Investors",
      description: "Strategic investment opportunities in prime real estate markets for maximum ROI.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      icon: TrendingUp,
      gradient: "from-amber-600 to-amber-800"
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            HOW CAN WE HELP YOU?
          </h2>
          <p className="text-slate-600 max-w-4xl mx-auto text-lg leading-relaxed">
            Key Home Real Estate, located in the Fort Lauderdale area, specializes in assisting you with buying and selling homes, as well as managing vacation rentals South Florida. We are here to help you navigate the process seamlessly.
          </p>
        </Motion.div>

        {/* Services Grid */}
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <Motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-96 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold tracking-wider">
                      {service.category}
                    </span>
                    <Motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                    >
                      <service.icon className="w-5 h-5 text-white" />
                    </Motion.div>
                  </div>

                  {/* Title & CTA */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {service.title}
                    </h3>
                    
                    {/* Hidden Description - Shows on Hover */}
                    <p className="text-white/90 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                      {service.description}
                    </p>

                    {/* Read More Button */}
                    <Motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-white font-semibold text-sm group/btn"
                    >
                      <span className="relative">
                        READ MORE
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover/btn:w-full"></span>
                      </span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Motion.button>
                  </div>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </Motion.div>
          ))}
        </Motion.div>

        {/* Call to Action */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          {/* <Motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore All Services
          </Motion.button> */}
        </Motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;