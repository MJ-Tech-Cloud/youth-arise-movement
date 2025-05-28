export default function Programmes() {
  const programmes = [
    {
      title: "Leadership Development",
      description: "Comprehensive training programs designed to develop leadership skills, critical thinking, and decision-making abilities in young people.",
      duration: "6 months",
      target: "Ages 18-25"
    },
    {
      title: "Community Service",
      description: "Regular community service initiatives that allow youth to contribute to their communities while developing practical skills and empathy.",
      duration: "Ongoing",
      target: "All ages"
    },
    {
      title: "Entrepreneurship Training",
      description: "Workshops and mentorship programs focused on developing business skills and entrepreneurial mindset among young people.",
      duration: "3 months",
      target: "Ages 16-30"
    },
    {
      title: "Environmental Conservation",
      description: "Programs focused on environmental awareness, conservation practices, and sustainable development initiatives.",
      duration: "Ongoing",
      target: "All ages"
    },
    {
      title: "Digital Skills",
      description: "Training in essential digital skills, including coding, digital marketing, and online content creation.",
      duration: "4 months",
      target: "Ages 15-25"
    },
    {
      title: "Mental Health Support",
      description: "Workshops and counseling services focused on mental health awareness, stress management, and emotional well-being.",
      duration: "Ongoing",
      target: "All ages"
    }
  ];

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Programmes</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programmes.map((programme, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-4 text-red-600">{programme.title}</h2>
              <p className="text-gray-700 mb-4">{programme.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Duration: {programme.duration}</span>
                <span>Target: {programme.target}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 