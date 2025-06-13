import Image from 'next/image';

export default function HiddenFeelingsBlog() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Why Do I Feel This Way? Hidden Feelings Beneath the Surface
        </h1>
        
        <div className="flex items-center text-sm text-gray-700 dark:text-gray-300 mb-8">
          <span>May 5, 2025</span>
          <span className="mx-2">•</span>
          <span>5 min read</span>
        </div>

        <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src="/blog_image.jpg"
            alt="Emotional wellbeing and self-reflection"
            fill
            className="object-cover"
          />
        </div>

        <div className="text-gray-700 dark:text-gray-300 space-y-6">
          <p>
            You may look like you're doing just fine — adjusting at work, managing relationships, building a life in a new country. But underneath, there might be a growing sense of being torn between traditional values and modern desires.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">The Hidden Emotional Landscape</h2>
          <p>
            Many individuals experience complex emotions that they may not fully understand or feel comfortable expressing. These can include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Feeling torn between traditional values and modern desires</li>
            <li>Envy or admiration for the freedom other cultures seem to offer</li>
            <li>A deep need to be accepted without having to erase parts of yourself</li>
            <li>Confusion about where you truly belong</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">Understanding Your Feelings</h2>
          <p>
            These emotions are valid and often stem from:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The natural process of cultural adaptation</li>
            <li>Conflicting expectations from different aspects of your life</li>
            <li>The desire to honor your heritage while embracing new opportunities</li>
            <li>The challenge of balancing multiple identities</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">Common Emotional Patterns</h2>
          <p>
            You might notice patterns in your emotional responses:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Feeling guilty when making choices that differ from cultural expectations</li>
            <li>Experiencing anxiety about not fitting in perfectly in either culture</li>
            <li>Struggling with self-doubt about your decisions</li>
            <li>Feeling isolated even when surrounded by people</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">Navigating These Feelings</h2>
          <p>
            Here are some strategies that can help:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Acknowledge and validate your emotions without judgment</li>
            <li>Find safe spaces to express your feelings</li>
            <li>Connect with others who share similar experiences</li>
            <li>Practice self-compassion and understanding</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">The Role of Therapy</h2>
          <p>
            Therapy can provide a supportive environment to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Explore and understand your emotional experiences</li>
            <li>Develop healthy coping strategies</li>
            <li>Build confidence in your decisions</li>
            <li>Create a more integrated sense of self</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">Moving Forward</h2>
          <p>
            Remember that your feelings are valid and deserve attention. You don't have to navigate this emotional landscape alone. Therapy can help you understand and work through these complex emotions in a way that honors your unique experience.
          </p>

          <p className="font-semibold">
            Your emotional journey is unique and important. Taking the time to understand and address these feelings is a crucial step toward emotional well-being and personal growth.
          </p>
        </div>
      </article>
    </div>
  );
} 