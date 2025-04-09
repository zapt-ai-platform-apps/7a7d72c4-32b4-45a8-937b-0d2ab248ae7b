import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { api } from '../api';
import { eventBus } from '@/modules/core/events';
import { events } from '../events';
import { validateSocialLink, validateFooterLink } from '../validators';

export default function FooterNavigation() {
  const socialLinksData = api.getSocialLinks();
  const footerLinksData = api.getFooterLinks();
  
  // Map icons to components
  const iconMap = {
    'FaLinkedinIn': <FaLinkedinIn size={24} className="text-current" />,
    'FaTwitter': <FaTwitter size={24} className="text-current" />
  };
  
  // Validate social links
  const socialLinks = socialLinksData.map(link => {
    try {
      const validatedLink = validateSocialLink(link, {
        actionName: 'renderFooterNavigation',
        location: 'FooterNavigation.jsx',
        direction: 'incoming',
        moduleFrom: 'api',
        moduleTo: 'ui'
      });
      
      return {
        ...validatedLink,
        icon: iconMap[validatedLink.icon]
      };
    } catch (error) {
      console.error('Invalid social link:', error);
      return null;
    }
  }).filter(Boolean);
  
  // Validate footer links
  const footerLinks = footerLinksData.map(link => {
    try {
      return validateFooterLink(link, {
        actionName: 'renderFooterNavigation',
        location: 'FooterNavigation.jsx',
        direction: 'incoming',
        moduleFrom: 'api',
        moduleTo: 'ui'
      });
    } catch (error) {
      console.error('Invalid footer link:', error);
      return null;
    }
  }).filter(Boolean);
  
  const handleSocialClick = (link) => {
    eventBus.publish(events.SOCIAL_LINK_CLICKED, { 
      name: link.name,
      url: link.url
    });
  };
  
  const handleFooterLinkClick = (link) => {
    eventBus.publish(events.FOOTER_LINK_CLICKED, { 
      text: link.text,
      url: link.url
    });
  };

  // Find specific links
  const contactLink = footerLinks.find(link => link.text === 'Contact');
  const legalLinks = footerLinks.filter(link => link.text !== 'Contact');

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
          {contactLink && (
            <li>
              <a 
                href={contactLink.url} 
                className="text-gray-300 hover:text-neon-yellow transition-colors"
                onClick={() => handleFooterLinkClick(contactLink)}
              >
                {contactLink.text}
              </a>
            </li>
          )}
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
          <li>
            <div className="flex space-x-6 mt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  className="text-gray-300 hover:text-neon-yellow transition-colors"
                  rel="noopener noreferrer"
                  onClick={() => handleSocialClick(link)}
                >
                  {link.icon}
                </a>
              ))}
            </div>
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
          {legalLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                target="_blank"
                className="text-gray-300 hover:text-neon-yellow transition-colors"
                rel="noopener noreferrer"
                onClick={() => handleFooterLinkClick(link)}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}