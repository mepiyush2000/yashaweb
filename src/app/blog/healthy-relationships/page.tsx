import Image from 'next/image';

export default function HealthyRelationshipsBlog() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Building Healthy Relationships
        </h1>
        
        <div className="flex items-center text-sm text-gray-700 dark:text-gray-300 mb-8">
          <span>April 20, 2025</span>
          <span className="mx-2">•</span>
          <span>6 min read</span>
        </div>

        <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src="/blog_image.jpg"
            alt="Healthy relationships"
            fill
            className="object-cover"
          />
        </div>

        <div className="text-gray-700 dark:text-gray-300 space-y-6">
          <p>
            Healthy relationships are fundamental to our well-being and happiness. Whether they're romantic, familial, or platonic, strong relationships provide support, growth, and fulfillment in our lives.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">Key Elements of Healthy Relationships</h2>
          <p>
            Strong relationships are built on several essential foundations:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Trust and honesty</li>
            <li>Effective communication</li>
            <li>Mutual respect</li>
            <li>Healthy boundaries</li>
            <li>Emotional support</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">Communication Skills</h2>
          <p>
            Effective communication is crucial for maintaining healthy relationships:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Active listening</li>
            <li>Expressing needs clearly</li>
            <li>Using "I" statements</li>
            <li>Being open to feedback</li>
            <li>Resolving conflicts constructively</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">Setting Boundaries</h2>
          <p>
            Healthy boundaries are essential for maintaining individual well-being:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Identifying personal limits</li>
            <li>Communicating boundaries clearly</li>
            <li>Respecting others' boundaries</li>
            <li>Being consistent with boundaries</li>
            <li>Adjusting boundaries as needed</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">Building Trust</h2>
          <p>
            Trust is the foundation of any strong relationship:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Being reliable and consistent</li>
            <li>Keeping promises</li>
            <li>Being honest and transparent</li>
            <li>Showing vulnerability</li>
            <li>Rebuilding trust when broken</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">Maintaining Healthy Relationships</h2>
          <p>
            Long-term relationship health requires ongoing effort:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Regular check-ins</li>
            <li>Quality time together</li>
            <li>Showing appreciation</li>
            <li>Growing together</li>
            <li>Seeking help when needed</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">When to Seek Help</h2>
          <p>
            Consider seeking professional support when:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Communication breaks down</li>
            <li>Trust is significantly damaged</li>
            <li>Patterns of unhealthy behavior persist</li>
            <li>Emotional or physical safety is at risk</li>
            <li>Individual or relationship growth is stalled</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">Moving Forward</h2>
          <p>
            Remember that building and maintaining healthy relationships is a continuous journey. It requires self-awareness, effort, and sometimes professional guidance.
          </p>

          <p className="font-semibold">
            If you're struggling with relationships or want to improve your relationship skills, consider working with a mental health professional who can provide personalized guidance and support.
          </p>
        </div>
      </article>
    </div>
  );
} 