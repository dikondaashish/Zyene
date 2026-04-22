import { Hero } from "@/components/sections/Hero";
import { AboutIntro } from "@/components/sections/AboutIntro";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { Products } from "@/components/sections/Products";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Industries } from "@/components/sections/Industries";
import { Testimonials } from "@/components/sections/Testimonials";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ScheduleMeeting } from "@/components/sections/ScheduleMeeting";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <AboutIntro />
      <ServicesOverview />
      <Products />
      <WhyChooseUs />
      <Industries />
      <Testimonials />
      <ScheduleMeeting />
      <Contact />
    </>
  );
}
