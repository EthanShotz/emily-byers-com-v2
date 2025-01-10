import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm Emily Byers
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Transforming Memories into Timeless Treasures
          </p>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Specializing in preserving cherished memories through expert digitization, restoration, and pet photography services. I infuse passion and expertise with artistic creativity to deliver personalized, high-quality results that you'll treasure for years to come.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              View My Work
            </button>
            <button className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors">
              Let's Connect
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};