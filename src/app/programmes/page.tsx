export default function Programmes() {
  const programmes = [
    {
      title: "Youth Forums",
      description: "Regular gatherings where young people can discuss important issues, share ideas, and develop solutions for community challenges.",
      icon: "👥",
      features: [
        "Interactive discussions",
        "Guest speakers",
        "Networking opportunities",
        "Skill-building workshops"
      ]
    },
    {
      title: "Mental Health Support",
      description: "Comprehensive mental health services and support systems for youth dealing with various challenges.",
      icon: "🧠",
      features: [
        "One-on-one counselling",
        "Group therapy sessions",
        "Stress management workshops",
        "Peer support groups"
      ]
    },
    {
      title: "Mentorship & Counselling",
      description: "Personalized guidance and support to help youth navigate their personal and professional development.",
      icon: "🤝",
      features: [
        "Career guidance",
        "Personal development",
        "Life skills training",
        "Goal setting support"
      ]
    },
    {
      title: "Entrepreneurial Workshops",
      description: "Practical training and resources to help young entrepreneurs start and grow their businesses.",
      icon: "💼",
      features: [
        "Business planning",
        "Financial management",
        "Marketing strategies",
        "Networking events"
      ]
    },
    {
      title: "Political Awareness Sessions",
      description: "Educational programs to increase understanding of political processes and encourage civic engagement.",
      icon: "🗳️",
      features: [
        "Civic education",
        "Policy discussions",
        "Leadership training",
        "Community engagement"
      ]
    },
    {
      title: "Educational Campaigns",
      description: "Initiatives focused on promoting education and providing learning opportunities for youth.",
      icon: "📚",
      features: [
        "Study skills workshops",
        "Academic support",
        "Career exploration",
        "Scholarship information"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Programmes</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the various programs we offer to empower and support youth in their journey of growth and development.
        </p>
      </div>

      {/* Programmes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {programmes.map((programme, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{programme.icon}</span>
                <h3 className="text-2xl font-semibold text-red-600">
                  {programme.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                {programme.description}
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Key Features:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {programme.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-4">
              <a
                href="/contact"
                className="text-red-600 font-semibold hover:text-red-700 transition-colors"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Interested in Our Programmes?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join us and take advantage of these opportunities to grow, learn, and make a difference in your community.
        </p>
        <div className="space-x-4">
          <a
            href="/join"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
          >
            Join Now
          </a>
          <a
            href="/contact"
            className="inline-block border-2 border-red-600 text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
} 