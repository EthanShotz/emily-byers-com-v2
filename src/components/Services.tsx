import { motion } from "framer-motion";
import { Camera, Image, RefreshCw } from "lucide-react";

const services = [
  {
    title: "Media Digitization",
    icon: Image,
    features: [
      "Transform film archives",
      "Preserve family albums",
      "Digital organization",
      "Cloud storage solutions",
    ],
  },
  {
    title: "Photo Restoration",
    icon: RefreshCw,
    features: [
      "Color correction",
      "Damage repair",
      "Photo enhancement",
      "Historical preservation",
    ],
  },
  {
    title: "Professional Photography",
    icon: Camera,
    features: [
      "Pet photography",
      "Family portraits",
      "Special events",
      "Studio sessions",
    ],
  },
];

export const Services = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">My Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="w-12 h-12 text-primary mb-6 mx-auto" />
              <h3 className="text-xl font-semibold mb-4 text-center">{service.title}</h3>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};