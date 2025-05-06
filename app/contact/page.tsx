"use client";

import { useEffect, useRef } from "react";
import { Layout } from "@/components/layout/layout";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { ContactForm } from "@/components/contact/contact-form";
import { Mail, PhoneCall, MapPin, Clock } from "lucide-react";
import { Toaster } from "sonner";

export default function Contact() {
  const headerRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
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
    
    [headerRef, infoRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
    
    return () => {
      [headerRef, infoRef].forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <Layout>
      <Toaster position="top-center" />
      
      <SectionWrapper bgColor="dark" className="pt-32 md:pt-40">
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or questions about our services? We'd love to hear from you. 
            Reach out and let's start a conversation.
          </p>
        </div>
      </SectionWrapper>
      
      <SectionWrapper bgColor="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div ref={infoRef} className="opacity-0">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions or ready to start your next project? Reach out to us using the contact 
              information below or fill out the form, and we'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-black">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Email</h3>
                  <p className="text-gray-600">info@oacdigital.com</p>
                  <p className="text-gray-600">support@oacdigital.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-black">
                  <PhoneCall size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-black">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Address</h3>
                  <p className="text-gray-600">
                    123 Innovation Avenue<br />
                    Suite 200<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-black">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9am to 6pm</p>
                  <p className="text-gray-600">Saturday: 10am to 4pm</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
}