import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'The Coffee House',
      type: 'Cafe Website',
      description: 'Modern cafe website with menu and online ordering',
      image: 'cafe',
      color: 'from-amber-500 to-orange-600',
    },
    {
      id: 2,
      title: 'Glamour Studio',
      type: 'Salon Website',
      description: 'Elegant salon website with booking system',
      image: 'salon',
      color: 'from-pink-500 to-rose-600',
    },
    {
      id: 3,
      title: 'HealthCare Clinic',
      type: 'Clinic Website',
      description: 'Professional medical clinic with appointment booking',
      image: 'clinic',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      id: 4,
      title: 'Bright Minds Academy',
      type: 'Coaching Center Website',
      description: 'Educational platform with course listings',
      image: 'coaching',
      color: 'from-indigo-500 to-purple-600',
    },
  ];

  // Generate realistic mockup designs
  const MockupImage = ({ project }) => {
    return (
      <div className="relative w-full h-64 bg-slate-800 rounded-lg overflow-hidden">
        {/* Browser Chrome */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-slate-900 flex items-center px-3 gap-2 border-b border-slate-700">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 mx-4 h-5 bg-slate-800 rounded text-xs flex items-center px-2 text-slate-500">
            {project.title.toLowerCase().replace(/\s+/g, '')}.com
          </div>
        </div>

        {/* Website Preview */}
        <div className="absolute top-8 left-0 right-0 bottom-0 p-4">
          {/* Header */}
          <div className="h-10 bg-slate-700 rounded mb-3 flex items-center px-3">
            <div className="w-20 h-4 bg-slate-600 rounded" />
            <div className="ml-auto flex gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-3 bg-slate-600 rounded" />
              ))}
            </div>
          </div>

          {/* Hero Section */}
          <div className={`h-32 bg-gradient-to-br ${project.color} rounded mb-3 flex items-center justify-center p-4`}>
            <div className="text-center">
              <div className="w-32 h-6 bg-white/90 rounded mx-auto mb-2" />
              <div className="w-48 h-3 bg-white/70 rounded mx-auto mb-3" />
              <div className="w-20 h-6 bg-white rounded mx-auto" />
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-12 bg-slate-700 rounded" />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Our Work
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Check out some of our recent projects across different industries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <MockupImage project={project} />
                  </motion.div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-12 right-4">
                    <span className="bg-slate-900/90 backdrop-blur-sm text-blue-400 px-3 py-1.5 rounded-full text-sm font-medium border border-blue-500/30">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  <Button
                    variant="outline"
                    className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/30"
                  >
                    View Demo
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;