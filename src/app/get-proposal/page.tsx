'use client';

import React, { useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import { generateSEOMetadata } from '@/components/seo/SEOMetadata';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: "Get a Custom Marketing Proposal - Zyene",
  description: "Get your custom marketing proposal in 3 minutes. Tell us about your business and goals, and we'll create a tailored strategy and pricing proposal delivered within 48 hours.",
  canonical: "/get-proposal",
  ogImage: "/og-proposal.jpg"
});

export default function GetProposalPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    industry: '',
    companySize: '',
    role: '',
    goals: [] as string[],
    biggestChallenge: '',
    successLooks: '',
    currentMarketing: [] as string[],
    monthlyBudget: '',
    startTimeline: '',
    name: '',
    email: '',
    phone: '',
    bestTime: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (field: 'goals' | 'currentMarketing', value: string) => {
    const current = formData[field];
    if (current.includes(value)) {
      setFormData({
        ...formData,
        [field]: current.filter(item => item !== value)
      });
    } else {
      setFormData({
        ...formData,
        [field]: [...current, value]
      });
    }
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Proposal request submitted! We\'ll send your custom proposal within 48 hours.');
  };

  const companySizeOptions = [
    { value: '1-10', label: '1-10 employees' },
    { value: '11-50', label: '11-50 employees' },
    { value: '51-200', label: '51-200 employees' },
    { value: '201-500', label: '201-500 employees' },
    { value: '500+', label: '500+ employees' }
  ];

  const budgetOptions = [
    { value: 'contact', label: 'Contact for Enterprise Pricing' },
    { value: 'project', label: 'Project-based' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get Your Custom Marketing Proposal
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Tell us about your business and goals. We'll create a custom strategy and pricing proposal tailored to your needs.
          </p>
          <p className="text-gray-500">
            ⏱️ Takes 3 minutes | 📧 Proposal delivered in 48 hours
          </p>
        </div>
      </section>

      {/* Multi-Step Form */}
      <section className="py-12 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-3xl">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between mb-2">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`flex-1 text-center ${
                    step <= currentStep ? 'text-primary font-semibold' : 'text-gray-400'
                  }`}
                >
                  Step {step}
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              ></div>
            </div>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit}>
              {/* Step 1: About Your Company */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold mb-6">About Your Company</h2>
                  
                  <Input
                    label="Company Name"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Acme Inc."
                  />
                  
                  <Input
                    label="Website URL"
                    name="website"
                    type="url"
                    required
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://acme.com"
                  />
                  
                  <Input
                    label="Industry"
                    name="industry"
                    required
                    value={formData.industry}
                    onChange={handleChange}
                    placeholder="B2B SaaS, E-commerce, etc."
                  />
                  
                  <Input
                    label="Company Size"
                    name="companySize"
                    type="select"
                    required
                    value={formData.companySize}
                    onChange={handleChange}
                    options={companySizeOptions}
                  />
                  
                  <Input
                    label="Your Role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="Marketing Director, CEO, etc."
                  />
                  
                  <Button type="button" onClick={nextStep} variant="primary" size="lg" className="w-full">
                    Next Step →
                  </Button>
                </div>
              )}

              {/* Step 2: Your Goals */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold mb-6">Your Goals</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      What are your primary marketing goals? (Select all that apply)
                    </label>
                    <div className="space-y-2">
                      {[
                        'Increase organic traffic',
                        'Generate more qualified leads',
                        'Improve conversion rates',
                        'Build brand authority',
                        'Dominate AI search results',
                        'Scale content production',
                        'Improve email performance'
                      ].map((goal) => (
                        <label key={goal} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={formData.goals.includes(goal)}
                            onChange={() => handleCheckboxChange('goals', goal)}
                            className="mr-2 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                          />
                          <span className="text-gray-700">{goal}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <Input
                    label="What's your biggest marketing challenge right now?"
                    name="biggestChallenge"
                    type="textarea"
                    required
                    value={formData.biggestChallenge}
                    onChange={handleChange}
                    placeholder="Tell us about your current challenges..."
                    rows={4}
                  />
                  
                  <Input
                    label="What does success look like in 6 months?"
                    name="successLooks"
                    type="textarea"
                    required
                    value={formData.successLooks}
                    onChange={handleChange}
                    placeholder="Describe your ideal outcome..."
                    rows={4}
                  />
                  
                  <div className="flex gap-4">
                    <Button type="button" onClick={prevStep} variant="outline" size="lg" className="flex-1">
                      ← Previous
                    </Button>
                    <Button type="button" onClick={nextStep} variant="primary" size="lg" className="flex-1">
                      Next Step →
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Current Marketing State */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold mb-6">Current Marketing State</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Do you currently have:
                    </label>
                    <div className="space-y-2">
                      {[
                        'Active blog/content marketing',
                        'SEO strategy in place',
                        'Email marketing campaigns',
                        'Social media presence',
                        'Paid advertising',
                        'In-house marketing team',
                        'None of the above'
                      ].map((item) => (
                        <label key={item} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={formData.currentMarketing.includes(item)}
                            onChange={() => handleCheckboxChange('currentMarketing', item)}
                            className="mr-2 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                          />
                          <span className="text-gray-700">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <Input
                    label="Current monthly marketing budget"
                    name="monthlyBudget"
                    type="select"
                    required
                    value={formData.monthlyBudget}
                    onChange={handleChange}
                    options={budgetOptions}
                  />
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      When do you want to start? <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-2">
                      {[
                        { value: 'asap', label: 'ASAP (within 2 weeks)' },
                        { value: '1-month', label: 'Within 1 month' },
                        { value: '3-months', label: 'Within 3 months' },
                        { value: 'exploring', label: 'Just exploring options' }
                      ].map((option) => (
                        <label key={option.value} className="flex items-center">
                          <input
                            type="radio"
                            name="startTimeline"
                            value={option.value}
                            checked={formData.startTimeline === option.value}
                            onChange={handleChange}
                            required
                            className="mr-2 h-4 w-4 text-primary focus:ring-primary border-gray-300"
                          />
                          <span className="text-gray-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button type="button" onClick={prevStep} variant="outline" size="lg" className="flex-1">
                      ← Previous
                    </Button>
                    <Button type="button" onClick={nextStep} variant="primary" size="lg" className="flex-1">
                      Next Step →
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 4: Contact Info */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold mb-6">Contact Info</h2>
                  
                  <Input
                    label="Your Name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                  
                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@acme.com"
                  />
                  
                  <Input
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                  />
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Best time to call
                    </label>
                    <div className="space-y-2">
                      {[
                        { value: 'morning', label: 'Morning' },
                        { value: 'afternoon', label: 'Afternoon' },
                        { value: 'evening', label: 'Evening' },
                        { value: 'email-only', label: 'Email only' }
                      ].map((option) => (
                        <label key={option.value} className="flex items-center">
                          <input
                            type="radio"
                            name="bestTime"
                            value={option.value}
                            checked={formData.bestTime === option.value}
                            onChange={handleChange}
                            className="mr-2 h-4 w-4 text-primary focus:ring-primary border-gray-300"
                          />
                          <span className="text-gray-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button type="button" onClick={prevStep} variant="outline" size="lg" className="flex-1">
                      ← Previous
                    </Button>
                    <Button type="submit" variant="primary" size="lg" className="flex-1">
                      Get My Custom Proposal →
                    </Button>
                  </div>
                  
                  <div className="flex justify-center gap-8 text-sm text-gray-500 pt-4">
                    <span>🔒 Secure & confidential</span>
                    <span>⚡ 48-hour turnaround</span>
                    <span>💬 No obligation</span>
                  </div>
                </div>
              )}
            </form>
          </Card>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 px-4 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">What Happens After You Submit?</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">1️⃣</div>
              <h3 className="text-xl font-bold mb-2">WITHIN 1 HOUR</h3>
              <p className="text-gray-600">You'll receive a confirmation email</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">2️⃣</div>
              <h3 className="text-xl font-bold mb-2">WITHIN 24 HOURS</h3>
              <p className="text-gray-600">We'll review your info and may reach out with clarifying questions</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">3️⃣</div>
              <h3 className="text-xl font-bold mb-2">WITHIN 48 HOURS</h3>
              <p className="text-gray-600">You'll receive a custom proposal with strategic recommendations, service breakdown, and pricing</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">4️⃣</div>
              <h3 className="text-xl font-bold mb-2">YOUR CHOICE</h3>
              <p className="text-gray-600">Book a call to discuss, ask questions, or move forward. No pressure, no sales tactics.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
  );
}
