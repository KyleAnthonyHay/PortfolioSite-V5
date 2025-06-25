'use client';
import { FormEvent, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Header from '@/components/Header';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xovwpnrr");
  const router = useRouter();

  useEffect(() => {
    if (state.succeeded) {
      router.push('/');
    }
  }, [state.succeeded, router]);
  

  return (
    <>
      <Header />
      <div className="absolute top-12 left-12">
        <Link href="/" className="text-gray-600 hover:text-gray-800 inline-block p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </Link>
      </div>
      <section className="pt-40 pb-24">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 space-y-8">
          <h1 className="text-[32px] font-medium text-[#666666]">Contact Me</h1>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#666666]">What's your name?</label>
                <input
                  type="text"
                  name="name"
                  
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#666666]">What's your email?</label>
                <input
                  type="email"
                  name="email"
                  
                  placeholder="John@company.com"
                  required
                  className="w-full px-4 py-3 bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#666666]">What's your message?</label>
              <textarea
                name="message"
                
                placeholder="Your message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-100 border border-transparent rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
