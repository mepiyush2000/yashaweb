import Image from 'next/image';

export default function HowIWork() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-200 mb-4">How I Work</h1>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          A conversation with a prospective client
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto prose prose-lg">
        <div className="space-y-8">
          <p>
            Hello, and welcome. I'm Yashasvi, a Clinical Psychologist with an M.Phil in Clinical Psychology, and I offer psychotherapy for individuals seeking deeper understanding, emotional clarity, and meaningful change in their lives.
          </p>
          <p>
            I work primarily from a psychodynamic orientation, offering both short-term and long-term therapy, depending on what brings you in and what you're looking to explore. Whether you're struggling with anxiety, low mood, difficult relationships, past experiences that feel unresolved, or simply a sense that something in life feels "off," my goal is to provide a space where you can explore these feelings with honesty, curiosity, and care.
          </p>
          <p>
            My approach is exploratory and reflective — grounded in the belief that many of our current emotional patterns have roots in earlier experiences, and that making sense of these patterns can lead to real transformation. Therapy with me is not about quick solutions, but about creating space to think and feel more deeply. We might notice how certain themes repeat in your life, explore unspoken thoughts and feelings, and gently question assumptions that may no longer serve you.
          </p>
          <p>
            At the heart of my work is the belief that therapy is a space not only for healing, but also for self-growth — a place to develop a more authentic relationship with yourself and others. Many of my clients describe therapy as a space where they can pause, reflect, and make sense of their inner world in a way that daily life rarely allows.
          </p>
          <p>
            I offer a calm, consistent, and non-judgmental space, where your experiences are met with empathy and thoughtful engagement. My work is shaped by ongoing supervision, clinical training, and a deep respect for the complexity of each person's emotional life.
          </p>
          <p>
            If you are curious about yourself, your emotions, or your relational patterns — or if you are looking for a space to slow down and reflect — I welcome you to reach out. Whether you're beginning therapy for the first time or returning after a break, we can work together to find a pace and depth that feels right for you.
          </p>
          <div className="mt-8">
            <p className="font-semibold">Warmly,</p>
            <p>Yashasvi</p>
            <p>Clinical Psychologist / Psychotherapist</p>
          </div>
        </div>
      </div>

      {/* Sessions & Bookings Section */}
      <div className="max-w-3xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-gray-200 mb-8">Sessions & Bookings</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-400 mb-4">In-Person Sessions</h3>
            <p>I offer in-person sessions at the following locations:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Noida</li>
              <li>Gurgaon</li>
              <li>Pitampura (on a visit-only basis)</li>
            </ul>
            <p>
              In addition, I provide online sessions for both Indian and international clients.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-400 mb-4">Booking Policy</h3>
            <p>
              My practice runs on a fixed-slot basis, which means you and I mutually decide on a specific time and day that remains reserved for you each week. Once a slot is booked, it is considered yours.
            </p>
            <p>
              If you need to reschedule or cancel, please inform me at least 48 hours in advance. Cancellations made after this window will be charged in full—except in the case of family, medical, or weather emergencies.
            </p>
            <p>
              You will also receive an intake form before we begin, which outlines my policies and how I work in more detail.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-400 mb-4">To Book a Session</h3>
            <div className="space-y-2">
              <p>📱 WhatsApp: 7015246158</p>
              <p>📧 Email: yashasvi.singla21@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 