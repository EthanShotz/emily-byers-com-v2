import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Emily has been fantastic to work with. She's photographed my dogs and family, and recently restored some old black and white photos - including a challenging scanned copy. Her expertise in bringing these memories back to life was remarkable! We'll definitely be working with her on future projects.",
    author: "Dina Salsbery",
  },
  {
    text: "The quality and expertise of Emily Byers Photography exceeded our expectations. She perfectly captured our family's essence and our beloved pup Benny's personality. Looking forward to our next family photo session!",
    author: "Janet Carol Hutchison",
  },
  {
    text: "Our Christmas photo session with Emily was delightful! Her patience and cheerful attitude made the experience enjoyable, even with the challenges of photographing dogs in a park full of distractions. Her love for dogs shines through in her work, and the results were beautiful. Highly recommend Emily Byers Photography for your next session!",
    author: "Julie Bafus",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-6 md:px-10 bg-muted">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          What Clients Are Saying
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="mb-4">
                <svg
                  className="h-8 w-8 text-primary opacity-50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-600 italic mb-6">{testimonial.text}</p>
              <p className="font-semibold text-primary">{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};