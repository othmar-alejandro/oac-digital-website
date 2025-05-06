"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { TeamMemberType } from "@/types";
import { cn } from "@/lib/utils";
import { Facebook, Twitter, Linkedin } from "lucide-react";

interface TeamMemberProps {
  member: TeamMemberType;
  index: number;
}

export function TeamMember({ member, index }: TeamMemberProps) {
  const memberRef = useRef<HTMLDivElement>(null);
  
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
    
    if (memberRef.current) {
      observer.observe(memberRef.current);
    }
    
    return () => {
      if (memberRef.current) observer.unobserve(memberRef.current);
    };
  }, []);

  return (
    <div 
      ref={memberRef} 
      className={cn(
        "opacity-0 group",
        "transition-all duration-300 hover:-translate-y-2"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-80 overflow-hidden rounded-lg mb-4">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-accent transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-accent transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-accent transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <h3 className="text-xl font-bold">{member.name}</h3>
      <p className="text-gray-600">{member.position}</p>
      
      {member.bio && (
        <p className="mt-2 text-gray-600 text-sm">{member.bio}</p>
      )}
    </div>
  );
}