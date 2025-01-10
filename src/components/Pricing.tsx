import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    title: "Media Digitization",
    price: "Varies",
    features: [
      "Free estimates",
      "Bulk discounts available",
      "Quick turnaround time",
      "Premium quality output",
    ],
  },
  {
    title: "Photo Restoration",
    price: "Varies",
    features: [
      "Free consultation",
      "Expert color correction",
      "Damage repair",
      "Digital delivery",
    ],
  },
  {
    title: "Pet Photography",
    price: "$350",
    features: [
      "1-2 hour session",
      "Multiple locations",
      "Digital gallery",
      "Print release included",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Pricing</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-4 text-center">{plan.title}</h3>
              <div className="text-3xl font-bold text-center mb-6 text-primary">
                {plan.price}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <Check className="w-5 h-5 text-primary mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors">
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};