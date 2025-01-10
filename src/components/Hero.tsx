import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <div className="relative">
              <img
                src="/lovable-uploads/203144fb-aac8-4606-b138-fc158b52ff4b.png"
                alt="Emily and her dog"
                className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-2 rounded-full shadow-lg">
                Paws & Pixels
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm Emily Byers
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Transforming Memories into Timeless Treasures
            </p>
            <p className="text-gray-600 mb-8">
              Specializing in preserving cherished memories through expert digitization, restoration, and pet photography services. I infuse passion and expertise with artistic creativity to deliver personalized, high-quality results that you'll treasure for years to come.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                View My Work
              </button>
              <button className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors">
                Let's Connect
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};