"use client";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-red-600 to-yellow-500">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero/image.jpg"
          alt="Youths"
          className="w-full h-full object-cover object-center"
          style={{ opacity: 20 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-yellow-500/80" />
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 flex flex-col items-center justify-center">
        <Image
          src="/logo/logo.png.jpg"
          alt="Youth Arise Movement Logo"
          width={160}
          height={160}
          priority
          className="mb-6 drop-shadow-lg"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Youth Arise Movement
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Together as one. Leaving no one behind.
        </p>
        <div className="space-x-4">
          <Link
            href="/join"
            className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Join Us
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
} 