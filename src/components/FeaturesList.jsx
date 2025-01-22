import React from 'react';
import {
  FaMagic,
  FaShieldAlt,
  FaPuzzlePiece,
  FaCoins,
  FaRocket,
  FaUserFriends
} from 'react-icons/fa';
import FeatureItem from './FeatureItem';

export default function FeaturesList() {
  const features = [
    {
      icon: <FaMagic size={32} className="text-dark-navy" />,
      title: 'Smart AI That Understands You',
      description: 'Describe your app in plain English - our AI handles all the technical complexity behind the scenes',
    },
    {
      icon: <FaShieldAlt size={32} className="text-dark-navy" />,
      title: 'Built-In Protection & Reliability',
      description: 'Automatic error monitoring and backups keep your app running smoothly 24/7',
    },
    {
      icon: <FaUserFriends size={32} className="text-dark-navy" />,
      title: 'Designed for Everyone',
      description: 'Create professional apps through our simple interface - no technical skills needed',
    },
    {
      icon: <FaPuzzlePiece size={32} className="text-dark-navy" />,
      title: 'Everything Included',
      description: 'Get databases, user logins, payments, and analytics ready-to-use in your app',
    },
    {
      icon: <FaCoins size={32} className="text-dark-navy" />,
      title: 'Only Pay for What You Use',
      description: 'No subscriptions or hidden fees - simple pricing based on your actual usage',
    },
    {
      icon: <FaRocket size={32} className="text-dark-navy" />,
      title: 'Launch Faster',
      description: 'Go from idea to live app in hours instead of months with our AI-powered platform',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {features.map((feature, index) => (
        <FeatureItem
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}