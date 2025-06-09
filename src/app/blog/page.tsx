import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
  const featuredPost = blogPosts[0];
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-200 mb-4">Blog</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Insights and resources to support your mental health journey.
        </p>
      </div>

      {/* Featured Post */}
      <div className="mb-16">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-[400px]">
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <div className="flex items-center text-sm text-gray-900 mb-4">
              <span>{featuredPost.date}</span>
              <span className="mx-2">•</span>
              <span>{featuredPost.readTime}</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {featuredPost.title}
            </h2>
            <p className="text-gray-600 mb-6">
              {featuredPost.excerpt}
            </p>
            <Link
              href={featuredPost.slug}
              className="text-indigo-600 font-semibold hover:text-indigo-700"
            >
              Read More →
            </Link>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-900 mb-4">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                href={post.slug}
                className="text-indigo-600 font-semibold hover:text-indigo-700"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="mt-16 bg-indigo-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Subscribe to My Newsletter
        </h2>
        <p className="text-gray-600 mb-6">
          Get the latest articles and mental health tips delivered to your inbox.
        </p>
        <form className="max-w-md mx-auto">
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const blogPosts = [
  {
    title: "Searles and the Unconscious Attempt to Drive the Other Person Crazy",
    excerpt:
      "Harold Searles introduced the unsettling idea that individuals, especially those with psychotic structures, may unconsciously attempt to 'drive the other person crazy.' This isn't driven by conscious malice, but rather an attempt to externalize inner fragmentation.",
    date: "May 15, 2025",
    readTime: "8 min read",
    image: "/blog_image.jpg",
    slug: "/blog/searles-unconscious-attempt",
  },
  {
    title: "The Emotional Challenges of Living Abroad: Why Moving Away Doesn't Always Mean Freedom",
    excerpt:
      "Moving abroad is often seen as the ultimate leap toward independence. But for many immigrants and international students, this journey comes with an emotional weight that's rarely discussed — one shaped by cultural differences, family expectations, and deep-seated inner conflicts.",
    date: "May 12, 2025",
    readTime: "10 min read",
    image: "/blog_image.jpg",
    slug: "/blog/emotional-challenges-abroad",
  },
  {
    title: "Navigating Cultural Shifts: The Silent Inner World of Indian-Origin Individuals Living Abroad",
    excerpt:
      "For many individuals of Indian origin living abroad, navigating daily life can feel like standing at the crossroads of two worlds. There is the culture you were raised in, and then there's the culture you now live in.",
    date: "May 10, 2025",
    readTime: "7 min read",
    image: "/blog_image.jpg",
    slug: "/blog/cultural-shifts",
  },
  {
    title: "The Subtle Pressure to 'Fit In': Assimilation vs. Accommodation",
    excerpt:
      "When people move to a new country or grow up in a bicultural household, they unconsciously begin to adopt ways of functioning that help them survive or succeed in that environment.",
    date: "May 8, 2025",
    readTime: "6 min read",
    image: "/blog_image.jpg",
    slug: "/blog/fitting-in",
  },
  {
    title: "Why Do I Feel This Way? Hidden Feelings Beneath the Surface",
    excerpt:
      "You may look like you're doing just fine — adjusting at work, managing relationships, building a life in a new country. But underneath, there might be a growing sense of being torn between traditional values and modern desires.",
    date: "May 5, 2025",
    readTime: "5 min read",
    image: "/blog_image.jpg",
    slug: "/blog/hidden-feelings",
  },
  {
    title: "The Power of Mindfulness in Stress Reduction",
    excerpt:
      "Discover how incorporating mindfulness practices into your daily routine can help reduce stress and improve overall well-being.",
    date: "April 28, 2025",
    readTime: "4 min read",
    image: "/blog_image.jpg",
    slug: "/blog/mindfulness-stress-reduction",
  },
  {
    title: "Building Healthy Relationships",
    excerpt:
      "Learn essential communication skills and strategies for maintaining healthy, fulfilling relationships in your life.",
    date: "April 20, 2025",
    readTime: "6 min read",
    image: "/blog_image.jpg",
    slug: "/blog/healthy-relationships",
  },
  {
    title: "The Impact of Cultural Identity on Mental Health",
    excerpt:
      "Exploring how cultural identity shapes our mental health and well-being, and strategies for navigating cultural challenges.",
    date: "April 10, 2025",
    readTime: "7 min read",
    image: "/blog_image.jpg",
    slug: "/blog/cultural-mental-health",
  },
  {
    title: "Coping with Grief and Loss",
    excerpt:
      "Understanding the grieving process and learning healthy ways to cope with loss and bereavement.",
    date: "April 5, 2025",
    readTime: "6 min read",
    image: "/blog_image.jpg",
    slug: "/blog/coping-with-grief",
  },
  {
    title: "Feeling Like a ‘Child’ in Your Family",
    excerpt:
      "A Psychodynamic Look at a Common Struggle",
    date: "June 8, 2025",
    readTime: "6 min read",
    image: "/blog_image.jpg",
    slug: "/blog/feeling-like-a-child",
  }
]; 