import { Hero } from "@/components/sections/Hero";
import { AboutIntro } from "@/components/sections/AboutIntro";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { Products } from "@/components/sections/Products";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { WeeklyReporting } from "@/components/sections/WeeklyReporting";
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
      <HowWeWork />
      <WeeklyReporting />
      <Testimonials />
      <ScheduleMeeting />
      <Contact />
    </>
  );
}
