'use client';

import { useState } from 'react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-200 mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Find answers to common questions about therapy and my practice.
        </p>
      </div>

      {/* FAQs Section */}
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <svg
                    className={`w-6 h-6 text-gray-900 transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-gray-200 mb-4">
          Still Have Questions?
        </h2>
        <p className="text-gray-400 mb-8">
          Don't hesitate to reach out. I'm here to help you understand how therapy can benefit you.
        </p>
        <a
          href="/contact"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "What can I expect in the initial consultation?",
    answer:
      "The first four sessions are consultation sessions. During this time, I try to understand the history, life context, and emotional landscape you come from. These sessions allow us to explore your concerns in depth and help me assess what kind of support may be most helpful—whether that's ongoing therapy, a referral for psychiatric evaluation, or another form of care. It's also a space for you to see if I feel like the right fit for you as a therapist. Therapy works best when there's mutual trust and comfort, and these early sessions give both of us time to understand if we can build that together.",
  },
  {
    question: "What issues can I bring to therapy?",
    answer:
      "You can bring anything—grief, anxiety, stress, low mood, relationship concerns, self-doubt, family conflict, or just a desire to understand yourself better. I work with individuals, couples, families, and also children and adolescents.",
  },
  {
    question: "How often are therapy sessions and how long do they last?",
    answer:
      "Sessions are usually held once a week, with each session lasting 50 minutes. In some cases—especially when the concerns feel more pressing or you may need additional emotional support—I may recommend twice-weekly sessions for a period of time. Each session starts and ends on time. At the moment, I am not offering therapy on a biweekly (once in two weeks) basis, as I believe regular and consistent sessions are important for meaningful progress in therapy.",
  },
  {
    question: "What techniques do I use?",
    answer:
      "I work from an insight-oriented lens, primarily drawing on psychodynamic, existential, humanistic, and emotion-focused therapies and somatic techniques. I also integrate tools from CBT, REBT, DBT, and mindfulness-based approaches, depending on your needs. Trained in individual, couples, and family therapy, my approach is always relational, thoughtful, and grounded in emotional depth. I'm also trained in couples therapy and family therapy, and I draw on systemic thinking to understand the relational and intergenerational contexts you might be navigating. While my approach is integrative, the core of my work is always relational, emotionally attuned, and paced according to your readiness.",
  },
  {
    question: "Do you offer sliding scale rates?",
    answer:
      "The rates are prefixed. All rates are subject to a 10-15% increase every financial year. I keep two sliding scale/pro-bono slots to make therapy accessible to people who come from marginalized sections.",
  },
  {
    question: "What is the method of payment?",
    answer:
      "For in-person sessions, I accept cash payments. For online sessions, you can make payments via GPay, Paytm, or a bank transfer. Please ensure that payment is made before each session to secure your spot.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "I kindly request that cancellations be made at least 48 hours in advance. This allows me to offer the session to another client and ensures that time is used effectively. If a cancellation is made less than 48 hours before the session, I charge the full session fee. In cases of genuine emergencies (such as weather, severe illness hospital admission), please reach out as soon as possible so we can discuss alternatives. I appreciate your understanding and cooperation, as this policy helps maintain the integrity and continuity of therapy for all clients.",
  },
  {
    question: "What are missed sessions?",
    answer:
      "Missed sessions refer to any scheduled therapy session that doesn't take place. These include cancellations with prior notice or no-shows without notice. While practical issues like illness, emergencies, or scheduling conflicts can cause missed sessions, emotional factors may also play a role. Exploration of the meaning of the missed session is part of psychotherapeutic work.",
  },
  {
    question: "What is psychotherapy and how can it help me?",
    answer:
      "Psychotherapy is a collaborative treatment based on the relationship between an individual and a therapist. It provides a supportive environment where you can talk openly with someone who's objective, neutral, and nonjudgmental. Through therapy, you can gain insight into your thoughts, feelings, and behaviors, develop coping strategies, and work towards positive change in your life.",
  },
  {
    question: "Is therapy confidential?",
    answer:
      "Yes, therapy is confidential. What you discuss in sessions is private and protected by professional ethics and laws. The only exceptions are if there's a risk of harm to yourself or others, or in cases of abuse or neglect. These exceptions will be discussed in detail during your first session.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes, I accept most major insurance plans. It's best to contact me directly to verify your specific insurance coverage. I also offer self-pay options and can provide documentation for out-of-network reimbursement.",
  },
  {
    question: "How do I know if therapy is right for me?",
    answer:
      "Therapy can be beneficial for anyone looking to improve their mental health, relationships, or overall well-being. If you're experiencing emotional distress, relationship difficulties, or simply want to understand yourself better, therapy might be right for you. The initial consultation is a great opportunity to discuss your concerns and determine if we're a good fit.",
  },
  {
    question: "What is your approach to therapy?",
    answer:
      "I use an integrative approach that combines evidence-based therapeutic techniques tailored to your specific needs. This may include elements of Cognitive Behavioral Therapy (CBT), Psychodynamic Therapy, and Mindfulness-based approaches. I believe in creating a collaborative, non-judgmental space where you can explore your thoughts and feelings safely.",
  },
]; 