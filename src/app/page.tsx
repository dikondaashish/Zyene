import { Hero } from "@/components/sections/Hero";
import { AboutIntro } from "@/components/sections/AboutIntro";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { Products } from "@/components/sections/Products";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { WeeklyReporting } from "@/components/sections/WeeklyReporting";
import { ScheduleMeeting } from "@/components/sections/ScheduleMeeting";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <ServicesOverview />
      <Products />
      <HowWeWork />
      <WeeklyReporting />
      <ScheduleMeeting />
      <Contact />
    </>
  );
}
