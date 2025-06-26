'use client';

import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaTwitter, FaEnvelope, FaMedium } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-20 pb-28 bg-white">
      <div className="max-w-[720px] mx-auto px-6 md:px-12">
        {/* Gmail */}
        <Link href="mailto:haykyle917@gmail.com" className="block">
          <div className="flex items-center justify-between py-4 border-b border-gray-200 hover:text-gray-800 transition-colors">
            <div className="flex items-center gap-4">
              <FaEnvelope className="w-6 h-6 text-gray-700" />
              <span className="text-[16px]">Email</span>
            </div>
            <span className="text-[16px] text-gray-600">haykyle917@gmail.com</span>
          </div>
        </Link>
        
        {/* LinkedIn */}
        <Link href="https://www.linkedin.com/in/kyle-anthonyhay/" target="_blank" rel="noopener noreferrer" className="block">
          <div className="flex items-center justify-between py-4 border-b border-gray-200 hover:text-gray-800 transition-colors">
            <div className="flex items-center gap-4">
              <FaLinkedin className="w-6 h-6 text-gray-700" />
              <span className="text-[16px]">LinkedIn</span>
            </div>
            <span className="text-[16px] text-gray-600">Work related background</span>
          </div>
        </Link>
        
        {/* Instagram */}
        <Link href="https://www.instagram.com/kyleanthonyhay/" target="_blank" rel="noopener noreferrer" className="block">
          <div className="flex items-center justify-between py-4 border-b border-gray-200 hover:text-gray-800 transition-colors">
            <div className="flex items-center gap-4">
              <FaInstagram className="w-6 h-6 text-gray-700" />
              <span className="text-[16px]">Instagram</span>
            </div>
            <span className="text-[16px] text-gray-600">BTS and display of my work</span>
          </div>
        </Link>
        
        {/* X/Twitter */}
        <Link href="https://x.com/KyleAnthonyHay" target="_blank" rel="noopener noreferrer" className="block">
          <div className="flex items-center justify-between py-4 border-b border-gray-200 hover:text-gray-800 transition-colors">
            <div className="flex items-center gap-4">
              <FaTwitter className="w-6 h-6 text-gray-700" />
              <span className="text-[16px]">X / Twitter</span>
            </div>
            <span className="text-[16px] text-gray-600">Follow developer journey</span>
          </div>
        </Link>

        {/* Blog */}
        <Link href="https://medium.com/@kyleanthonyhay" target="_blank" rel="noopener noreferrer" className="block">
          <div className="flex items-center justify-between py-4 border-b border-gray-200 hover:text-gray-800 transition-colors">
            <div className="flex items-center gap-4">
              <FaMedium className="w-6 h-6 text-gray-700" />
              <span className="text-[16px]">Medium</span>
            </div>
            <span className="text-[16px] text-gray-600">My thoughts and coding tutorials</span>
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
