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
              Based in Brooklyn, I specialize in Swift, Flutter, and web development—building intuitive products 
              that blend thoughtful design with solid engineering. My style draws from minimal brands like 
              Apple and Arc Browser.
            </p>
            <p>
              I run Anointed Productions, where I create media content, and I collaborate with SaaS founders 
              and creatives to bring their ideas to life through thoughtful code and design.
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