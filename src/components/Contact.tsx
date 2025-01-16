import { motion } from "framer-motion";
import { useEffect } from "react";

export const Contact = () => {
  useEffect(() => {
    // Create and append the JotForm script
    const script = document.createElement("script");
    script.src = "https://form.jotform.com/jsform/243464146391155";
    script.type = "text/javascript";
    
    // Find or create a container for the form
    const formContainer = document.getElementById("jotform-container");
    if (formContainer) {
      formContainer.appendChild(script);
    }

    // Cleanup function
    return () => {
      if (formContainer && script) {
        formContainer.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Let's Get Started!</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <div id="jotform-container"></div>
        </motion.div>
      </div>
    </section>
  );
};