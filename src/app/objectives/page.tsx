export default function Objectives() {
  const objectives = [
    {
      title: "Youth Empowerment",
      description: "To empower young people with the skills, knowledge, and resources they need to become effective leaders and change-makers in their communities."
    },
    {
      title: "Community Development",
      description: "To actively contribute to community development through youth-led initiatives and projects that address local needs and challenges."
    },
    {
      title: "Education & Training",
      description: "To provide educational opportunities and training programs that enhance youth capabilities and prepare them for future leadership roles."
    },
    {
      title: "Social Justice",
      description: "To promote social justice and equality by addressing issues affecting young people and advocating for their rights and well-being."
    },
    {
      title: "Environmental Stewardship",
      description: "To encourage environmental awareness and sustainable practices among youth, fostering a sense of responsibility towards our planet."
    },
    {
      title: "Global Citizenship",
      description: "To develop global citizens who understand and appreciate cultural diversity and are committed to making positive contributions to society."
    }
  ];

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Objectives</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {objectives.map((objective, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-4 text-red-600">{objective.title}</h2>
              <p className="text-gray-700">{objective.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 