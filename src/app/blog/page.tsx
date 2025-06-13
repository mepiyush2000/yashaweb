import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from './data';

export default function Blog() {
  const featuredPost = blogPosts[0];
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 overflow-x-hidden">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">Blog</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
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
      <div className="mt-16 bg-indigo-50 rounded-lg p-4 sm:p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Subscribe to My Newsletter
        </h2>
        <p className="text-gray-600 mb-6">
          Get the latest articles and mental health tips delivered to your inbox.
        </p>
        <form className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 