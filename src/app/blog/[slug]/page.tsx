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
      <article className="prose prose-lg max-w-none text-white">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex items-center text-sm text-gray-400 mb-8">
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

        <div className="prose prose-lg prose-invert max-w-none list-disc list-inside whitespace-pre-wrap break-words overflow-x-hidden">
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeRaw]}
    components={{
      ul: ({ node, ...props }) => (
        <ul className="list-disc list-inside pl-4" {...props} />
      ),
      ol: ({ node, ...props }) => (
        <ol className="list-decimal list-inside pl-4" {...props} />
      ),
      li: ({ node, ...props }) => <li className="mb-1" {...props} />,
    }}
  >
    {post.content}
  </ReactMarkdown>
</div>
      </article>
    </div>
  );
}
