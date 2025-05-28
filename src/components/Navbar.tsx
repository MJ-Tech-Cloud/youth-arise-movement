import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/logo/logo.png"
                alt="Youth Arise Movement Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="ml-2 text-xl font-semibold text-gray-900">
                Youth Arise
              </span>
            </Link>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <Link
              href="/"
              className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium"
            >
              Contact
            </Link>
            <Link
              href="/join-us"
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 