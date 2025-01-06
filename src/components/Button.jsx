import React from 'react';

export default function Button({ children, onClick, href, type = 'button' }) {
  const baseClasses = "bg-neon-yellow text-dark-navy font-bold py-3 px-8 rounded-full hover:bg-purple-custom hover:text-white transition-colors cursor-pointer";

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}