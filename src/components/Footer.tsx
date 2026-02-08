import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-600">Email: yashasvi.singla21@gmail.com</p>
              <p className="text-gray-600">WhatsApp: +91 7015246158</p>
              <p className="text-gray-600">Location: Sec 45, Gurgaon</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-gray-900">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/how-i-work" className="text-gray-600 hover:text-gray-900">
                  How I Work
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/yashasvi-singla-47307a149"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/singlayashasvi?igsh=NmkwMzJ4d2R4a3Jr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@yashasvisingla7323"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                YouTube
              </a>
              <a
                href="https://wa.me/917015246158"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-900">
            © {new Date().getFullYear()} Yashasvi Singla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 