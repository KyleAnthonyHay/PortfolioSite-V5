'use client';

import Image from 'next/image';

const About = () => {
  return (
    <section className="pt-24 pb-32 bg-none"
      
      style={{
        background: "linear-gradient(to bottom, white 0px, #F5F5F5 70px, #F5F5F5 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="max-w-[720px] mx-auto">
          <h2 className="text-[32px] font-medium mb-6">
            I&apos;m a Software Developer & Entrepreneur crafting clean, user-focused experiences.
          </h2>
          
          <div className="space-y-6 text-[#666666] text-[20px] leading-[1.6] mb-12">
            <p>
            Hi, my name is Kyle-Anthony. I'm based in Brooklyn, NY, and I specialize in Swift, Flutter, and web development. I’ve been hacking away at personal projects and taking internships where I can. I’m currently diving into consumer apps and AI integrations to solve problems for both users and companies.
            </p>
            <p>
            I've also started a company called Annointed Productions, where I create media content and collaborate with individuals and businesses to meet their needs.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden aspect-[16/10] relative">
            <Image
              src="/profile-3.jpg"
              alt="Kyle-Anthony Hay"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 