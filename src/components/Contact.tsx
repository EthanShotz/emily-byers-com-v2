import { motion } from "framer-motion";
import { useEffect } from "react";

export const Contact = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://form.jotform.com/jsform/243464146391155";
    script.type = "text/javascript";
    script.async = true;
    script.crossOrigin = "anonymous";
    
    // Error handling for the script
    script.onerror = (error) => {
      console.error("Error loading JotForm script:", error);
    };
    
    // Find or create container for the form
    let formContainer = document.getElementById("jotform-container");
    if (!formContainer) {
      formContainer = document.createElement("div");
      formContainer.id = "jotform-container";
      document.body.appendChild(formContainer);
    }
    
    // Append script to the document head instead of the container
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (formContainer && formContainer.parentNode) {
        formContainer.parentNode.removeChild(formContainer);
      }
    };
  }, []);

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto w-full">
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
          <div id="jotform-container" />
        </motion.div>
      </div>
    </section>
  );
};