'use client';

import { Button } from '@/components/ui/button';
import Profile from './Profile';
import Image from 'next/image';

const Hero = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText('kyle.hay@outlook.com');
  };

  const techIcons = [
    'c++', 'django', 'figma', 'firebase', 'flutter',
    'mongodb', 'python', 'reactjs', 'swift', 'tailwindcss', 'typescript'
  ];

  return (
    <section className="pt-32 pb-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="max-w-[600px] mx-auto">
          <Profile />
          <div className="space-y-6">
            <h1 className="text-[32px] leading-[1.1] font-normal tracking-[-0.02em]">
              Helping SaaS Teams Scale Through UX Strategy & Design
            </h1>
            <p className="text-[20px] leading-[1.6] text-[#666666]">
              I work with early-stage founders, SaaS companies, and product teams to turn complex ideas into thoughtful, conversion-focused interfaces that scale.
            </p>
            <div className="flex gap-3 pt-2">
              <Button
                onClick={() => window.location.href = '/contact'}
                className="bg-black text-white hover:bg-black/90 rounded-full h-12 px-6 text-[15px]"
              >
                Resume →
              </Button>
              <Button
                onClick={copyEmail}
                variant="outline"
                className="border-[#E5E5E5] hover:bg-[#F5F5F5] rounded-full h-12 px-6 text-[15px]"
              >
                Copy Email
              </Button>
            </div>
            
            {/* Sliding Icons with Gradient Mask */}
            <div className="relative w-full overflow-hidden mt-16">
              <div className="absolute inset-y-0 left-0 w-[60px] bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-[60px] bg-gradient-to-l from-white to-transparent z-10"></div>
              <div className="flex animate-slide">
                {/* First set of icons */}
                {techIcons.map((icon, index) => (
                  <div key={`first-${index}`} className="flex-none mx-4 opacity-50 w-[40px] h-[40px] relative">
                    <Image
                      src={`/icons/${icon}.svg`}
                      alt={`${icon} icon`}
                      fill
                      className="grayscale object-contain"
                    />
                  </div>
                ))}
                {/* Second set of icons for seamless loop */}
                {techIcons.map((icon, index) => (
                  <div key={`second-${index}`} className="flex-none mx-4 opacity-50 w-[40px] h-[40px] relative">
                    <Image
                      src={`/icons/${icon}.svg`}
                      alt={`${icon} icon`}
                      fill
                      className="grayscale object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 