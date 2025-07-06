'use client';

import { useState } from 'react';
import { db } from '../../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';

export const PostForm = () =>
{
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [date, setDate] = useState('');
  const [readTime, setReadTime] = useState('');
  const [content, setContent] = useState('');
  const [slug, setSlug] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setError('');

    try {
      if (!slug.match(/^[a-z0-9-]+$/)) {
        setError('Slug must be lowercase letters, numbers, and hyphens only.');
        return;
      }

      const postRef = doc(db, 'blogs', slug);
      let finalURLSlug = "blog/" + slug;
      await setDoc(postRef, {
        title,
        excerpt,
        date,
        readTime,
        content,
        slug : finalURLSlug,
      });

      setSuccess(true);
      setTitle('');
      setExcerpt('');
      setDate('');
      setReadTime('');
      setContent('');
      setSlug('');
    } catch (err: any) {
      console.error(err);
      setError('Failed to save the post.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white text-black p-6 rounded shadow">
      <h2 className="text-2xl font-bold">Create New Blog Post</h2>

      {success && <p className="text-green-600">Post saved successfully!</p>}
      {error && <p className="text-red-600">{error}</p>}

      <input
        type="text"
        value={slug}
        onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'))}
        placeholder="Slug (e.g. israel-iran-conflict)"
        required
        className="w-full border px-3 py-2 rounded"
      />

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        className="w-full border px-3 py-2 rounded"
      />

      <input
        type="text"
        value={excerpt}
        onChange={(e) => setExcerpt(e.target.value)}
        placeholder="Excerpt (short summary)"
        required
        className="w-full border px-3 py-2 rounded"
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        className="w-full border px-3 py-2 rounded"
      />

      <input
        type="text"
        value={readTime}
        onChange={(e) => setReadTime(e.target.value)}
        placeholder="Estimated Read Time (e.g., 4 min)"
        required
        className="w-full border px-3 py-2 rounded"
      />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your blog content in Markdown..."
        rows={12}
        required
        className="w-full border px-3 py-2 rounded font-mono"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Publish Post
      </button>
    </form>
  );
}
