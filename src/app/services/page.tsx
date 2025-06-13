import Link from 'next/link';

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">My Services</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Comprehensive psychotherapy services tailored to your unique needs and goals.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-indigo-600 mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h2>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <ul className="space-y-2 mb-6">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 text-indigo-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Book a Session
            </Link>
          </div>
        ))}
      </div>

      {/* Pricing Section */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Session Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.map((plan, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.title}</h3>
              <p className="text-3xl font-bold text-indigo-600 mb-4">{plan.price}</p>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <Link
                href="/contact"
                className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

const services = [
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
    title: "Individual Therapy",
    description:
      "One-on-one sessions focused on your personal growth and mental well-being.",
    features: [
      "Personalized treatment plans",
      "Confidential sessions",
      "Evidence-based approaches",
      "Flexible scheduling",
    ],
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
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    title: "Couples Therapy",
    description:
      "Work together to strengthen your relationship and improve communication.",
    features: [
      "Relationship assessment",
      "Communication skills",
      "Conflict resolution",
      "Intimacy building",
    ],
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
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    title: "Children's Therapy",
    description:
      "Specialized therapy for children using play-based and age-appropriate techniques.",
    features: [
      "Play therapy",
      "Behavioral interventions",
      "Parent-child relationship",
      "Emotional regulation",
      "Social skills development",
    ],
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
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    title: "Family Therapy",
    description:
      "Address family dynamics and improve relationships within your family unit.",
    features: [
      "Family systems approach",
      "Parenting support",
      "Family communication",
      "Behavioral strategies",
    ],
  },
];

const pricing = [

  {
    title: "Individual Session",
    price: "₹2,000",
    description: "50-minutes one-on-one therapy session for adults",
  },
  {
    title: "Children's Therapy",
    price: "₹2,500",
    description: "50-minutes specialized session for children",
  },
  {
    title: "Couples/Family Session",
    price: "₹3,000",
    description: "60-minutes session for couples or families",
  },
]; 