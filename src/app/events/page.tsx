export default function Events() {
  const events = [
    {
      title: "Youth Leadership Summit",
      date: "March 15, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Nakonde Community Center",
      description: "A day-long summit bringing together young leaders to discuss community development and share innovative ideas.",
      type: "upcoming"
    },
    {
      title: "Entrepreneurship Workshop",
      date: "March 22, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Nakonde Business Hub",
      description: "Learn essential business skills and network with successful entrepreneurs in this hands-on workshop.",
      type: "upcoming"
    },
    {
      title: "Community Clean-up Day",
      date: "February 28, 2024",
      time: "8:00 AM - 12:00 PM",
      location: "Nakonde Central Park",
      description: "Join us for a community-wide clean-up initiative to make our city cleaner and greener.",
      type: "past"
    },
    {
      title: "Mental Health Awareness Seminar",
      date: "February 15, 2024",
      time: "3:00 PM - 6:00 PM",
      location: "Nakonde Youth Center",
      description: "An informative seminar on mental health awareness and stress management techniques for youth.",
      type: "past"
    }
  ];

  const upcomingEvents = events.filter(event => event.type === "upcoming");
  const pastEvents = events.filter(event => event.type === "past");

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Events</h1>
        
        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-red-600">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
                <div className="space-y-2 text-gray-600">
                  <p><span className="font-medium">Date:</span> {event.date}</p>
                  <p><span className="font-medium">Time:</span> {event.time}</p>
                  <p><span className="font-medium">Location:</span> {event.location}</p>
                </div>
                <p className="mt-4 text-gray-700">{event.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-red-600">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
                <div className="space-y-2 text-gray-600">
                  <p><span className="font-medium">Date:</span> {event.date}</p>
                  <p><span className="font-medium">Time:</span> {event.time}</p>
                  <p><span className="font-medium">Location:</span> {event.location}</p>
                </div>
                <p className="mt-4 text-gray-700">{event.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
} 