"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Layout } from "@/components/layout/layout";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { TeamMember } from "@/components/about/team-member";
import { TeamMemberType } from "@/types";
import { CheckCircle } from "lucide-react";
import { CTASection } from "@/components/home/cta-section";

const teamMembers: TeamMemberType[] = [
  {
    name: "John Doe",
    position: "CEO & Founder",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "With over 15 years of experience in digital innovation.",
  },
  {
    name: "Jane Smith",
    position: "Creative Director",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Award-winning designer with a passion for creating exceptional user experiences.",
  },
  {
    name: "Michael Johnson",
    position: "Development Lead",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Expert in cutting-edge web technologies and development practices.",
  },
  {
    name: "Sarah Williams",
    position: "Marketing Strategist",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Specializes in creating data-driven marketing campaigns that deliver results.",
  },
  {
    name: "David Brown",
    position: "SEO Specialist",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Passionate about helping businesses improve their online visibility.",
  },
  {
    name: "Emily Chen",
    position: "UX Designer",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Creates intuitive and engaging user experiences for web and mobile applications.",
  },
];

const values = [
  "Innovation & Creativity",
  "Client Satisfaction",
  "Integrity & Transparency",
  "Continuous Learning",
  "Collaboration & Teamwork",
  "Excellence in Delivery",
];

export default function About() {
  const headerRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    [headerRef, storyRef, valuesRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
    
    return () => {
      [headerRef, storyRef, valuesRef].forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <Layout>
      <SectionWrapper bgColor="dark" className="pt-32 md:pt-40">
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">About Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're a team of passionate digital innovators dedicated to transforming businesses 
            through cutting-edge web solutions and marketing strategies.
          </p>
        </div>
      </SectionWrapper>
      
      <SectionWrapper bgColor="light" id="our-story">
        <div 
          ref={storyRef} 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center opacity-0"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2018, OAC Digital Innovations began with a simple mission: to help businesses 
              thrive in the digital age by providing innovative, high-quality web solutions and marketing strategies.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a small team of passionate digital experts has grown into a full-service 
              agency serving clients across multiple industries worldwide. Our journey has been driven 
              by a commitment to excellence, creativity, and delivering measurable results for our clients.
            </p>
            <p className="text-gray-600">
              Today, we continue to push the boundaries of digital innovation, staying ahead of industry 
              trends and technologies to ensure our clients always receive cutting-edge solutions that 
              drive their business forward.
            </p>
          </div>
          
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Our Team Collaborating"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </SectionWrapper>
      
      <SectionWrapper bgColor="dark" id="our-values">
        <div 
          ref={valuesRef} 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center opacity-0"
        >
          <div className="order-2 md:order-1 relative h-80 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Our Values Visualization"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <p className="text-gray-300 mb-6">
              Our core values shape everything we do, from how we interact with clients to how we 
              approach each project. These principles guide our decision-making and ensure we 
              consistently deliver exceptional results.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-accent mr-2" size={20} />
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
      
      <SectionWrapper bgColor="light" id="our-team">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our talented team of digital experts brings diverse skills and perspectives to every project, 
            ensuring innovative solutions that drive results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      </SectionWrapper>
      
      <CTASection />
    </Layout>
  );
}