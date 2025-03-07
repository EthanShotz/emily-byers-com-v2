import { motion } from "framer-motion";
import { Facebook, Instagram } from "lucide-react";

export const Hero = () => {
  return (
    <section className="py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <img
            src="/lovable-uploads/02d5cee0-256c-406d-baf2-02fe8db2836c.png"
            alt="Paws & Pixels Logo"
            className="h-24 md:h-32 mx-auto"
          />
        </motion.div>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 w-full"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div 
                className="absolute inset-0 bg-[#E66F52] rounded-2xl transform rotate-3 translate-x-4 translate-y-4"
                aria-hidden="true"
              ></div>
              <img
                src="/lovable-uploads/5953c067-4330-43ec-a3b3-e6f9fadabf17.png"
                alt="Emily and her dog"
                className="relative rounded-2xl shadow-lg w-full z-10"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-2 rounded-full shadow-lg z-20">
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
            <div className="flex gap-4 justify-center md:justify-start mb-6">
              <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                View My Work
              </button>
              <button className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors">
                Let's Connect
              </button>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4 justify-center md:justify-start"
            >
              <a
                href="https://www.instagram.com/ebdigitalmediaservices"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/EBDigitalMediaServices"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};