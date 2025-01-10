import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Testimonials } from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Testimonials />
      <Pricing />
      <Contact />
    </div>
  );
};

export default Index;