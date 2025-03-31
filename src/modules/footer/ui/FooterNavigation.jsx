import React from 'react';
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

  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
      <div className="flex space-x-6">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            className="text-white hover:text-neon-yellow transition duration-300 cursor-pointer"
            rel="noopener noreferrer"
            onClick={() => handleSocialClick(link)}
          >
            {link.icon}
          </a>
        ))}
      </div>
      
      {footerLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          className="text-white hover:text-neon-yellow transition duration-300 cursor-pointer"
          rel="noopener noreferrer"
          onClick={() => handleFooterLinkClick(link)}
        >
          {link.text}
        </a>
      ))}
    </div>
  );
}