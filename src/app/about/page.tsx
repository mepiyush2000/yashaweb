import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">About Yashasvi Singla</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          A dedicated psychotherapist committed to helping individuals achieve mental wellness and personal growth.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="relative h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/my_image.jpg"
            alt="Yashasvi Singla"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">My Journey</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            With over 8 years of experience in psychotherapy, I have dedicated my career to helping individuals
            navigate through life's challenges and achieve emotional well-being. My approach combines
            evidence-based therapeutic techniques with a deep understanding of human psychology.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I believe in creating a safe, non-judgmental space where clients can explore their thoughts,
            feelings, and experiences. My goal is to empower individuals with the tools and insights they
            need to lead more fulfilling lives.
          </p>
        </div>
      </div>

      {/* Qualifications */}
      <div className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center">Qualifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {qualifications.map((qual, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{qual.title}</h3>
              <p className="text-gray-600">{qual.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Approach */}
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center">My Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-indigo-600 mb-4">{approach.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{approach.title}</h3>
              <p className="text-gray-600">{approach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const qualifications = [
  {
    title: "Education",
    description: "Master's in Clinical Psychology from Delhi University, with specialized training in Cognitive Behavioral Therapy and Psychodynamic Therapy.",
  },
  {
    title: "Certifications",
    description: "Licensed Psychotherapist with certifications in Trauma-Informed Care, Mindfulness-Based Therapy, and Family Systems Therapy.",
  },
];

const approaches = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />
      </svg>
    ),
    title: "Client-Centered",
    description: "I believe in meeting clients where they are and working collaboratively to achieve their goals.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Evidence-Based",
    description: "My therapeutic approaches are grounded in research and proven methodologies.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
      </svg>
    ),
    title: "Holistic Care",
    description: "I consider the whole person - mind, body, and spirit - in the therapeutic process.",
  },
]; 