import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Youth Arise Movement</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A youth-driven platform passionate about creating positive change and making a meaningful impact in their communities.
        </p>
      </div>

      {/* Origin Story */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Origin Story</h2>
            <p className="text-gray-600 mb-4">
              Youth Arise Movement was birthed in Nakonde, Zambia, with a vision to create a platform where young people could come together to make a difference. What started as a small gathering of passionate youth has grown into a movement that spans across communities.
            </p>
            <p className="text-gray-600">
              Our journey began with a simple belief: that young people have the power to create meaningful change when they come together with a shared purpose and vision.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            {/* Replace with actual image */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-yellow-500 opacity-90"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
              Nakonde, Zambia
            </div>
          </div>
        </div>
      </section>

      {/* Nature of Movement */}
      <section className="mb-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Nature</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-red-600 mb-4">Non-Religious</h3>
            <p className="text-gray-600">
              We welcome young people from all walks of life, regardless of their religious beliefs. Our focus is on creating positive change and empowering youth through unity and shared purpose.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-red-600 mb-4">Non-Political</h3>
            <p className="text-gray-600">
              While we encourage political awareness and civic engagement, we maintain our independence from any political party or ideology, focusing instead on youth empowerment and community development.
            </p>
          </div>
        </div>
      </section>

      {/* Core Mission */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Core Mission</h2>
          <p className="text-xl text-gray-600 mb-8">
            To empower youth with information that enables them to discover their purpose and vision and take action.
          </p>
          <div className="bg-red-600 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Reformative Nature</h3>
            <p className="text-lg">
              We believe in seeking partial change within the existing social system, working to improve and enhance the current structures while maintaining their core values and principles.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-red-600 mb-4">Unity</h3>
            <p className="text-gray-600">
              Bringing together diverse voices and perspectives to create a stronger, more inclusive community.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-red-600 mb-4">Empowerment</h3>
            <p className="text-gray-600">
              Equipping young people with the tools, knowledge, and confidence to create positive change.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-red-600 mb-4">Innovation</h3>
            <p className="text-gray-600">
              Encouraging creative thinking and new approaches to address community challenges.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 