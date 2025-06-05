import Image from 'next/image';

export default function CopingWithGriefBlog() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-200 mb-4">
          Coping with Grief and Loss
        </h1>
        
        <div className="flex items-center text-sm text-gray-400 mb-8">
          <span>April 5, 2025</span>
          <span className="mx-2">•</span>
          <span>6 min read</span>
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
            Grief is a natural response to loss, but it can be one of the most challenging emotional experiences we face. Understanding the grieving process and learning healthy ways to cope can help us navigate this difficult journey.
          </p>

          <h2 className="text-2xl font-semibold text-gray-200 mt-8 mb-4">Understanding the Grieving Process</h2>
          <p>
            Grief is not a linear process, and everyone experiences it differently:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Denial and shock</li>
            <li>Anger and frustration</li>
            <li>Bargaining and guilt</li>
            <li>Depression and sadness</li>
            <li>Acceptance and healing</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-200 mt-8 mb-4">Common Reactions to Grief</h2>
          <p>
            Grief can manifest in various ways, both emotionally and physically:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Intense sadness and crying</li>
            <li>Difficulty sleeping or eating</li>
            <li>Physical symptoms like fatigue</li>
            <li>Difficulty concentrating</li>
            <li>Changes in social behavior</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-200 mt-8 mb-4">Healthy Coping Strategies</h2>
          <p>
            There are many ways to cope with grief in a healthy manner:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Allow yourself to feel your emotions</li>
            <li>Express your feelings through writing or art</li>
            <li>Maintain a regular routine</li>
            <li>Take care of your physical health</li>
            <li>Seek support from others</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-200 mt-8 mb-4">The Role of Support Systems</h2>
          <p>
            Having a strong support system is crucial during the grieving process:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Family and friends</li>
            <li>Support groups</li>
            <li>Professional counseling</li>
            <li>Spiritual or religious communities</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-200 mt-8 mb-4">Self-Care During Grief</h2>
          <p>
            Taking care of yourself is essential while grieving:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Get adequate rest</li>
            <li>Eat nutritious meals</li>
            <li>Exercise regularly</li>
            <li>Practice relaxation techniques</li>
            <li>Engage in activities you enjoy</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-200 mt-8 mb-4">When to Seek Professional Help</h2>
          <p>
            It's important to recognize when you might need additional support:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Persistent feelings of hopelessness</li>
            <li>Difficulty functioning in daily life</li>
            <li>Thoughts of self-harm</li>
            <li>Substance abuse</li>
            <li>Prolonged isolation</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-200 mt-8 mb-4">Conclusion: Moving Forward</h2>
          <p>
            Grief is a deeply personal experience, and there's no "right" way to grieve. The goal isn't to "get over" your loss, but to learn to live with it in a way that allows you to move forward while honoring your feelings and memories.
          </p>

          <p>
            Remember, healing takes time, and it's okay to take that time. Be patient with yourself and allow the grieving process to unfold naturally.
          </p>
        </div>
      </article>
    </div>
  );
} 