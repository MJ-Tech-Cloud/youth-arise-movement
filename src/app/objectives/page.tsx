export default function Objectives() {
  const objectives = [
    {
      title: "Problem Identification & Solution",
      description: "Identify and solve problems affecting youths and communities through media, gatherings, and initiatives",
      icon: "🎯"
    },
    {
      title: "Purpose & Vision Education",
      description: "Educate youth on purpose and vision via mentorship, info-sharing, and counselling",
      icon: "🎓"
    },
    {
      title: "Political Awareness",
      description: "Raise awareness on political and governance affairs and inspire positive youth participation",
      icon: "🗳️"
    },
    {
      title: "Entrepreneurial Development",
      description: "Provide entrepreneurial training, information, and funding",
      icon: "💼"
    },
    {
      title: "Mental Health Support",
      description: "Offer mental health rehabilitation and recovery",
      icon: "🧠"
    },
    {
      title: "Youth Spaces",
      description: "Create youth-friendly spaces for diverse programs",
      icon: "🏛️"
    },
    {
      title: "Learning Platforms",
      description: "Build platforms for learning, unlearning, and re-learning across spiritual, political, educational and youth-related spheres",
      icon: "📚"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Objectives</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the key areas where we focus our efforts to create positive change and empower youth.
        </p>
      </div>

      {/* Objectives Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {objectives.map((objective, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="text-4xl mb-4">{objective.icon}</div>
            <h3 className="text-xl font-semibold text-red-600 mb-3">
              {objective.title}
            </h3>
            <p className="text-gray-600">
              {objective.description}
            </p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Ready to Support Our Objectives?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join us in our mission to create positive change and empower youth across communities.
        </p>
        <a
          href="/join"
          className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
        >
          Get Involved
        </a>
      </div>
    </div>
  );
} 