"use client";

import { Section } from "@/components/ui/Section";
import { Building2, Globe, Truck, ShoppingCart, Cpu, HeartPulse, Zap, Layers } from "lucide-react";

const clients = [
  { name: "Nova Logistics Pvt Ltd", icon: Truck },
  { name: "UrbanFleet Transport", icon: Truck },
  { name: "OptiChain Systems", icon: Layers },
  { name: "BrightPath Consulting", icon: Globe },
  { name: "Nexa Retail Tech", icon: ShoppingCart },
  { name: "PrimeRoute Cargo", icon: Truck },
  { name: "SkyBridge E-Commerce", icon: ShoppingCart },
  { name: "Apex Industrial", icon: Building2 },
  { name: "MetroLink Dist.", icon: Layers },
  { name: "BlueWave Digital", icon: Zap },
  { name: "Vertex Healthcare", icon: HeartPulse },
  { name: "GreenField AgroTech", icon: Cpu },
];

export function ClientLogos() {
  return (
    <div className="w-full py-12 bg-background border-y border-border overflow-hidden">
      <div className="container mb-8 text-center">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
          Trusted by Innovative Companies
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradients for smooth fade effect at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling Container */}
        <div className="flex w-max animate-scroll">
          {/* First set of logos */}
          <div className="flex gap-16 mx-8">
            {clients.map((client, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center group-hover:bg-muted transition-colors">
                  <client.icon className="h-6 w-6" />
                </div>
                <span className="font-semibold text-lg whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless looping */}
          <div className="flex gap-16 mx-8">
            {clients.map((client, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center group-hover:bg-muted transition-colors">
                  <client.icon className="h-6 w-6" />
                </div>
                <span className="font-semibold text-lg whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
