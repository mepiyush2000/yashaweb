'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../lib/firebase';
import { PostForm }from '../../components/PostForm';

export default function AdminPage() {
  const [hasMounted, setHasMounted] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setHasMounted(true);

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // ✅ Handle redirect AFTER rendering using useEffect
  useEffect(() => {
    if (!loading && hasMounted && user === null) {
      router.push('/login');
    }
  }, [loading, hasMounted, user, router]);

  if (!hasMounted || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  if (user && user.email !== 'anishajindal143@gmail.com') {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-lg font-semibold">
        You are not authorized to access this page. Please contact the site owner.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-white">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <PostForm />
    </div>
  );
}
