import React from 'react';
import {
  FaRobot,
  FaPuzzlePiece,
  FaDatabase,
  FaWallet,
  FaUsers,
  FaRocket,
} from 'react-icons/fa';
import FeatureItem from './FeatureItem';

export default function FeaturesList() {
  const features = [
    {
      icon: <FaUsers size={32} className="text-dark-navy" />,
      title: 'Built for Everyone, Not Just Developers',
      description:
        'Create professional apps through our easy-to-use platform—no coding or technical skills required.',
    },
    {
      icon: <FaRocket size={32} className="text-dark-navy" />,
      title: 'Production-Ready from Day One',
      description:
        'Every app comes with built-in error monitoring, analytics, database management, and essential integrations.',
    },
    {
      icon: <FaRobot size={32} className="text-dark-navy" />,
      title: 'Latest AI Models with Full Context',
      description:
        'We use state-of-the-art AI models, providing them with your entire code to ensure full context.',
    },
    {
      icon: <FaPuzzlePiece size={32} className="text-dark-navy" />,
      title: 'Native Integrations',
      description:
        'Everything you need built-in: databases, user authentication, payments, analytics, error monitoring, and AI capabilities.',
    },
    {
      icon: <FaWallet size={32} className="text-dark-navy" />,
      title: 'True Pay-As-You-Go',
      description:
        'Only pay for what you use—no subscription fees, upfront costs, or hidden charges.',
    },
    {
      icon: <FaDatabase size={32} className="text-dark-navy" />,
      title: 'Staging Database',
      description:
        'We provide a full staging database so that updates can be made with confidence.',
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
