import { db } from '../../../../lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export type paramsType = Promise<{ slug: string }>;

export default async function BlogDetail(props: { params: paramsType })
 {
  const { slug } = await props.params;
  const blogRef = doc(db, 'blogs', slug);
  const blogSnap = await getDoc(blogRef);

  if (!blogSnap.exists()) {
    return <div>Blog not found</div>;
  }

  const post = blogSnap.data();
  console.log(post.content);

  return (
    <div className="whitespace-pre-wrap break-words overflow-x-hidden max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <article className="prose prose-lg max-w-none dark:prose-invert">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{post.title}</h1>

        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-8">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>

        <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src="/blog_image.jpg"
            alt="Blog post image"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none list-disc list-inside whitespace-pre-wrap break-words overflow-x-hidden dark:prose-invert">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              ul: ({ node, ...props }) => (
                <ul className="list-disc list-inside pl-4 text-gray-800 dark:text-gray-200" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal list-inside pl-4 text-gray-800 dark:text-gray-200" {...props} />
              ),
              li: ({ node, ...props }) => <li className="mb-1 text-gray-800 dark:text-gray-200" {...props} />,
              p: ({ node, ...props }) => <p className="text-gray-800 dark:text-gray-200 mb-4" {...props} />,
              h1: ({ node, ...props }) => <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4" {...props} />,
              h2: ({ node, ...props }) => <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3" {...props} />,
              h3: ({ node, ...props }) => <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3" {...props} />,
              h4: ({ node, ...props }) => <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2" {...props} />,
              h5: ({ node, ...props }) => <h5 className="text-base font-bold text-gray-900 dark:text-white mb-2" {...props} />,
              h6: ({ node, ...props }) => <h6 className="text-sm font-bold text-gray-900 dark:text-white mb-2" {...props} />,
              strong: ({ node, ...props }) => <strong className="font-bold text-gray-900 dark:text-white" {...props} />,
              em: ({ node, ...props }) => <em className="italic text-gray-800 dark:text-gray-200" {...props} />,
              blockquote: ({ node, ...props }) => (
                <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-700 dark:text-gray-300 my-4" {...props} />
              ),
              code: ({ node, ...props }) => (
                <code className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-sm" {...props} />
              ),
              pre: ({ node, ...props }) => (
                <pre className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-4 rounded-lg overflow-x-auto my-4" {...props} />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
