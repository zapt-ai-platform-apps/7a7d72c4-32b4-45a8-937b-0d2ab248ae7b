import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterNavigation() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full md:w-auto">
      {/* Company Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-white">Company</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/" className="text-gray-300 hover:text-neon-yellow transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/development" className="text-gray-300 hover:text-neon-yellow transition-colors">
              Development
            </Link>
          </li>
        </ul>
      </div>

      {/* Resources Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-white">Resources</h3>
        <ul className="space-y-2">
          <li>
            <a href="https://docs.zapt.ai" className="text-gray-300 hover:text-neon-yellow transition-colors">
              Documentation
            </a>
          </li>
          <li>
            <a href="https://www.zapt.ai/blog" className="text-gray-300 hover:text-neon-yellow transition-colors">
              Blog
            </a>
          </li>
        </ul>
      </div>

      {/* Legal Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-white">Legal</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/usage-based-cost-recovery-policy" className="text-gray-300 hover:text-neon-yellow transition-colors">
              Usage-Based Cost Recovery Policy
            </Link>
          </li>
          <li>
            <a href="https://www.zapt.ai/privacy" className="text-gray-300 hover:text-neon-yellow transition-colors">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="https://www.zapt.ai/terms" className="text-gray-300 hover:text-neon-yellow transition-colors">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}