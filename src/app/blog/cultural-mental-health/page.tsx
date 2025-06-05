import Image from 'next/image';

export default function CulturalMentalHealthBlog() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-200 mb-4">
          The Impact of Cultural Identity on Mental Health
        </h1>
        
        <div className="flex items-center text-sm text-gray-400 mb-8">
          <span>April 10, 2025</span>
          <span className="mx-2">•</span>
          <span>7 min read</span>
        </div>

        <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src="/blog_image.jpg"
            alt="Blog post image"
            fill
            className="object-cover"
          />
        </div>

        <div className="text-gray-300 space-y-6">
          <p>
            Cultural identity plays a profound role in shaping our mental health and well-being. From the values we hold to the way we express emotions, our cultural background influences every aspect of our psychological experience.
          </p>

          <h2 className="text-2xl font-semibold text-gray-200 mt-8 mb-4">Cultural Values and Mental Health</h2>
          <p>
            Different cultures have different views on mental health and emotional expression:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Collectivist vs. individualist perspectives</li>
            <li>Attitudes toward seeking help</li>
            <li>Expression of emotions</li>
            <li>Family dynamics and support</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-200 mt-8 mb-4">Cultural Identity and Self-Concept</h2>
          <p>
            Our cultural background shapes how we see ourselves and our place in the world:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Sense of belonging</li>
            <li>Self-worth and validation</li>
            <li>Role expectations</li>
            <li>Personal values and beliefs</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-200 mt-8 mb-4">Navigating Cultural Challenges</h2>
          <p>
            Living between cultures can present unique challenges to mental health:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Cultural conflicts and identity confusion</li>
            <li>Pressure to conform to different expectations</li>
            <li>Language barriers and communication issues</li>
            <li>Discrimination and microaggressions</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-200 mt-8 mb-4">Cultural Protective Factors</h2>
          <p>
            Cultural identity can also provide important protective factors for mental health:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Strong community support</li>
            <li>Cultural traditions and practices</li>
            <li>Family cohesion</li>
            <li>Spiritual or religious beliefs</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-200 mt-8 mb-4">Strategies for Cultural Integration</h2>
          <p>
            Finding ways to integrate different cultural aspects can support mental well-being:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Maintaining cultural connections</li>
            <li>Building bridges between cultures</li>
            <li>Developing cultural competence</li>
            <li>Creating a personal cultural narrative</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-200 mt-8 mb-4">Conclusion: Embracing Cultural Complexity</h2>
          <p>
            Understanding the impact of cultural identity on mental health is crucial for both individuals and mental health professionals. By acknowledging and working with cultural factors, we can develop more effective approaches to mental health care and personal well-being.
          </p>

          <p>
            Remember, your cultural identity is a source of strength and resilience. Embracing its complexity can lead to greater self-understanding and psychological well-being.
          </p>
        </div>
      </article>
    </div>
  );
} 