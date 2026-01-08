import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Award, Users, TrendingUp, Shield, Target, Heart, CheckCircle, Star } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    {
      icon: Award,
      number: "15+",
      label: "Years of Excellence",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: Users,
      number: "10K+",
      label: "Happy Families",
      color: "from-emerald-500 to-emerald-700"
    },
    {
      icon: TrendingUp,
      number: "$2B+",
      label: "Properties Sold",
      color: "from-amber-500 to-amber-700"
    },
    {
      icon: Star,
      number: "98%",
      label: "Client Satisfaction",
      color: "from-purple-500 to-purple-700"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We believe in honest communication and transparent dealings at every step of your property journey."
    },
    {
      icon: Target,
      title: "Client-Focused Approach",
      description: "Your goals are our priority. We tailor our services to meet your unique needs and aspirations."
    },
    {
      icon: Heart,
      title: "Passion for Excellence",
      description: "Our team is driven by passion and dedication to deliver exceptional results beyond expectations."
    }
  ];

  const features = [
    "Expert market knowledge and insights",
    "Personalized property recommendations",
    "Professional negotiation services",
    "End-to-end transaction support",
    "Post-sale customer care",
    "Investment consultation"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
            <Users className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 font-semibold text-sm">ABOUT US</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Your Trusted Real Estate Partner
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            For over 15 years, we've been helping families find their dream homes and investors discover profitable opportunities across South Florida.
          </p>
        </Motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left - Image & Story */}
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="Our Team"
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-lg font-semibold mb-2">
                  "Making your real estate dreams a reality"
                </p>
                <p className="text-white/90 text-sm">
                  - Our Commitment to You
                </p>
              </div>
            </div>

            {/* Small Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <Motion.div
                whileHover={{ scale: 1.05 }}
                className="relative rounded-xl overflow-hidden shadow-lg h-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&q=80"
                  alt="Modern Architecture"
                  className="w-full h-full object-cover"
                />
              </Motion.div>
              <Motion.div
                whileHover={{ scale: 1.05 }}
                className="relative rounded-xl overflow-hidden shadow-lg h-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80"
                  alt="Luxury Properties"
                  className="w-full h-full object-cover"
                />
              </Motion.div>
            </div>
          </Motion.div>

          {/* Right - Content */}
          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-slate-900">
                Building Dreams, Creating Homes
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Founded in 2002, we started with a simple mission: to make the real estate experience seamless, transparent, and rewarding for every client. What began as a small team of passionate agents has grown into one of South Florida's most trusted real estate companies.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our success is built on understanding that a property isn't just a transaction—it's a milestone in your life story. Whether you're a first-time buyer, seasoned investor, or looking to sell, we bring expertise, dedication, and a personal touch to every interaction.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              <h4 className="text-xl font-bold text-slate-900 mb-4">What Sets Us Apart:</h4>
              {features.map((feature, index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-slate-700">{feature}</p>
                </Motion.div>
              ))}
            </div>

            {/* CTA */}
            <Motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            //   className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Meet Our Team */}
            </Motion.button>
          </Motion.div>
        </div>

        {/* Achievements */}
        {/* <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {achievements.map((achievement, index) => (
            <Motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${achievement.color} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                  <achievement.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-4xl font-bold text-slate-900 mb-2">
                  {achievement.number}
                </p>
                <p className="text-slate-600 font-medium">
                  {achievement.l}
                </p>
              </div>
            </Motion.div>
          ))}
        </Motion.div> */}

        {/* Values Section */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="p-8 bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </Motion.div>
            ))}
          </div>
        </Motion.div>

        {/* Bottom CTA Banner */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 p-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80')] opacity-10 bg-cover bg-center"></div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-white/90 text-lg mb-8">
              Let's turn your real estate goals into reality. Our team is here to guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule Consultation
              </Motion.button>
              <Motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Browse Properties
              </Motion.button>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default AboutSection;