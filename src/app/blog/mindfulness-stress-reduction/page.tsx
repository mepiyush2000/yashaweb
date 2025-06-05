import Image from 'next/image';

export default function MindfulnessBlog() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-200 mb-4">
          The Power of Mindfulness in Stress Reduction
        </h1>
        
        <div className="flex items-center text-sm text-gray-400 mb-8">
          <span>April 28, 2025</span>
          <span className="mx-2">•</span>
          <span>4 min read</span>
        </div>

        <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src="/blog_image.jpg"
            alt="Mindfulness and meditation"
            fill
            className="object-cover"
          />
        </div>

        <div className="text-gray-300 space-y-6">
          <p>
            In today's fast-paced world, stress has become a common companion in our daily lives. Mindfulness, a practice rooted in ancient traditions, offers powerful tools for managing stress and improving overall well-being.
          </p>

          <h2 className="text-2xl font-semibold text-gray-200 mt-8 mb-4">What is Mindfulness?</h2>
          <p>
            Mindfulness is the practice of being fully present in the moment, without judgment. It involves:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Paying attention to the present moment</li>
            <li>Observing thoughts and feelings without judgment</li>
            <li>Accepting experiences as they are</li>
            <li>Cultivating awareness of body and mind</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-200 mt-8 mb-4">Benefits of Mindfulness Practice</h2>
          <p>
            Regular mindfulness practice can lead to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Reduced stress and anxiety</li>
            <li>Improved emotional regulation</li>
            <li>Better focus and concentration</li>
            <li>Enhanced self-awareness</li>
            <li>Improved sleep quality</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-200 mt-8 mb-4">Simple Mindfulness Techniques</h2>
          <p>
            Here are some easy ways to incorporate mindfulness into your daily life:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Mindful breathing exercises</li>
            <li>Body scan meditation</li>
            <li>Mindful walking</li>
            <li>Mindful eating</li>
            <li>Gratitude practice</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-200 mt-8 mb-4">Getting Started with Mindfulness</h2>
          <p>
            To begin your mindfulness journey:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Start with short, daily sessions</li>
            <li>Find a quiet, comfortable space</li>
            <li>Use guided meditation apps or videos</li>
            <li>Be patient with yourself</li>
            <li>Make it a regular practice</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-200 mt-8 mb-4">Mindfulness in Daily Life</h2>
          <p>
            You can practice mindfulness throughout your day:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>During routine activities</li>
            <li>In moments of stress</li>
            <li>While interacting with others</li>
            <li>Before making decisions</li>
            <li>When experiencing strong emotions</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-200 mt-8 mb-4">Moving Forward</h2>
          <p>
            Remember that mindfulness is a skill that develops with practice. Start small, be consistent, and notice the positive changes in your stress levels and overall well-being.
          </p>

          <p className="font-semibold">
            If you're interested in learning more about mindfulness and stress reduction, consider working with a mental health professional who can guide you in developing a personalized mindfulness practice.
          </p>
        </div>
      </article>
    </div>
  );
} 