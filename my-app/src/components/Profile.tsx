'use client';

import Image from 'next/image';

const Profile = () => {
  return (
    <div className="flex items-center gap-4 mb-12">
      <div className="relative w-[68px] h-[68px] rounded-full overflow-hidden">
        <Image
          src="/profile.jpg"
          alt="Kyle-Anthony Hay"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div>
        <h2 className="text-[16px] font-medium mb-1">Kyle-Anthony Hay</h2>
        <p className="text-[#666666] text-[12px]">Software Developer/Entrepreneur</p>
      </div>
    </div>
  );
};

export default Profile; 