import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1A237E]">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-[#212121] mb-6">
                Youth Arise Movement is a non-profit organization dedicated to
                empowering young people to become leaders in their communities.
                We believe in the power of youth to create positive change.
              </p>
              <Link
                href="/about"
                className="text-[#00ACC1] hover:text-[#1A237E] font-semibold"
              >
                Learn More →
              </Link>
            </div>
            <div className="relative h-[400px]">
            <Image
                src="/about.jpg"
                alt="About Youth Arise Movement"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-[#1A237E]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-[#1A237E]">{program.title}</h3>
                <p className="text-[#212121]">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1A237E]">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-[#1A237E] p-6 rounded-lg hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2 text-white">{event.title}</h3>
                <p className="text-[#00ACC1] mb-4">{event.date}</p>
                <p className="text-white">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#00ACC1] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Movement</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of something bigger. Make a difference in your community.
          </p>
          <Link
            href="/join-us"
            className="bg-[#1A237E] text-white hover:bg-[#212121] px-8 py-3 rounded-full text-lg font-semibold transition-colors"
          >
            Get Involved
          </Link>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1A237E]">Contact Us</h2>
          <div className="space-y-4">
            <p className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:joshuamwila2004@gmail.com" className="hover:text-red-600">joshuamwila2004@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

const programs = [
  {
    title: "Leadership Development",
    description:
      "Training programs to develop leadership skills and empower young people to take initiative.",
  },
  {
    title: "Community Service",
    description:
      "Opportunities to give back to the community through various service projects and initiatives.",
  },
  {
    title: "Youth Empowerment",
    description:
      "Workshops and activities focused on building confidence and developing essential life skills.",
  },
];

const events = [
  {
    title: "Youth Leadership Summit",
    date: "June 15, 2024",
    description:
      "A day-long event featuring workshops, networking, and inspiring speakers.",
  },
  {
    title: "Community Service Day",
    date: "July 20, 2024",
    description:
      "Join us for a day of giving back to the community through various service projects.",
  },
];
