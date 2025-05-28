"use client";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/image.jpg"
          alt="Youth Arise Movement"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Youth Arise Movement
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Empowering young people to make a difference in their communities
        </p>
        <Link
          href="/join-us"
          className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
        >
          Join Us Today
        </Link>
      </div>
    </section>
  );
} 