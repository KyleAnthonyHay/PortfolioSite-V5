'use client';

import { Button } from '@/components/ui/button';
import Profile from './Profile';
import Image from 'next/image';
import { useState } from 'react';

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText('haykyle917@gmail.com');
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = 'haykyle917@gmail.com';
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy email:', error);
    }
  };

  const openResume = () => {
    const win = window.open('', '_blank');
    if (win) {
      win.document.title = 'Kyle-Anthony Hay | Resume';
      const style = win.document.createElement('style');
      style.innerHTML = `html, body { margin:0; padding:0; overflow:hidden; height:100%; width:100%; } embed { position:absolute; top:0; left:0; width:100%; height:100%; }`;
      win.document.head.appendChild(style);

      const embed = win.document.createElement('embed');
      embed.src = '/Kyle-Anthony_Resume.pdf';
      embed.type = 'application/pdf';
      win.document.body.appendChild(embed);
    }
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
                onClick={() => openResume()}
                className="bg-black text-white hover:bg-black/90 rounded-full h-12 px-6 text-[15px] transition-transform transform hover:scale-105 duration-200 ease-in-out"
              >
                Resume →
              </Button>
              <Button
                onClick={copyEmail}
                variant="outline"
                className="border-[#E5E5E5] hover:bg-[#F5F5F5] rounded-full h-12 px-6 text-[15px]"
              >
                {copied ? 'Copied!' : 'Copy Email'}
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