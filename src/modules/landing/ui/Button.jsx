import React from 'react';
import { eventBus } from '@/modules/core/events';
import { events } from '../events';

export default function Button({ children, onClick, href, type = 'button', eventName }) {
  const baseClasses = "bg-neon-yellow text-dark-navy font-bold py-3 px-8 rounded-full hover:bg-purple-custom hover:text-white transition-colors cursor-pointer";

  const handleClick = (e) => {
    // If an event name is provided, publish it
    if (eventName) {
      eventBus.publish(events.CTA_CLICKED, { eventName });
    }
    
    // Call the original onClick handler if provided
    if (onClick) {
      onClick(e);
    }
  };

  if (href) {
    return (
      <a href={href} className={baseClasses} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={handleClick} className={baseClasses}>
      {children}
    </button>
  );
}