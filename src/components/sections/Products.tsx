"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2, Mic, Clock } from "lucide-react";
import Link from "next/link";

const products = [
  {
    name: "TrackMyOPT",
    tagline: "Manage Your OPT Timeline & Job Search with Confidence",
    description:
      "A specialized platform for international students that tracks OPT & STEM OPT timelines, unemployment days, case status, and automates alerts so you never miss deadlines.",
    features: [
      "Automatic timeline tracking",
      "USCIS case status updates",
      "Unemployment day counter",
      "Document vault & reminders",
      "AI-powered resume doctor & job CRM",
      "H-1B sponsor finder",
    ],
    icon: Clock,
    gradient: "from-blue-600 to-indigo-800",
    link: "/#products",
  },
  {
    name: "Zyene AI Voice Agent",
    tagline: "Automated AI Voice Conversations That Drive Business Outcomes",
    description:
      "An advanced AI voice assistant platform — built to answer calls, qualify leads, handle routine communication, and integrate with your workflow effortlessly.",
    features: [
      "Natural voice conversations",
      "Inbound & outbound call automation",
      "Lead qualification & CRM updates",
      "Multilingual voice capabilities",
      "Continuous learning & insights",
      "Works 24/7",
    ],
    icon: Mic,
    gradient: "from-purple-600 to-pink-800",
    link: "/#products",
  },
];

export function Products() {
  return (
    <Section id="products">
      <SectionHeader
        title="Our Products"
        subtitle="Innovative AI-powered tools built to give your business a competitive edge."
      />

      <div className="grid lg:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <Card key={index} className="relative overflow-hidden flex flex-col" hover={false}>
            <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${product.gradient}`} />
            <CardHeader className="pt-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                  <product.icon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                </div>
              </div>
              
              <div className="mb-4">
                 <p className="text-sm font-medium text-primary/80 uppercase tracking-wide">
                    {product.tagline}
                 </p>
              </div>

              <CardDescription className="text-base leading-relaxed">
                {product.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-3 mt-2">
                <p className="font-semibold text-foreground text-sm uppercase tracking-wider mb-3">Core Benefits</p>
                {product.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
                <Link href={product.link} className="w-full">
                    <Button className="w-full group" variant="outline">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
