export default function About() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">About Youth Arise Movement</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              Youth Arise Movement is dedicated to empowering young people to make a positive impact in their communities. We believe in the power of youth to create meaningful change and build a better future for all.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-700">
              We envision a world where young people are actively engaged in community development, social justice, and positive change. Through our programs and initiatives, we aim to inspire and equip the next generation of leaders.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Empowerment and Leadership Development</li>
              <li>Community Engagement and Service</li>
              <li>Inclusivity and Diversity</li>
              <li>Innovation and Creativity</li>
              <li>Social Responsibility</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
} 