import React from 'react';
import { FaRobot, FaPuzzlePiece, FaDatabase, FaWallet, FaUsers } from 'react-icons/fa';
import { ImCog } from 'react-icons/im';
import FeatureItem from './FeatureItem';

export default function FeaturesList() {
  const features = [
    {
      icon: <FaUsers size={32} className="text-dark-navy" />,
      title: "Accessible to Everyone",
      description:
        "Our platform completely abstracts all coding and technical tasks away.",
    },
    {
      icon: <FaWallet size={32} className="text-dark-navy" />,
      title: "True Pay-As-You-Go",
      description:
        "Only pay for what you use - no subscription fees, no upfront costs, no hidden charges.",
    },
    {
      icon: <ImCog size={32} className="text-dark-navy" />,
      title: "Flexible AI Model Selection",
      description:
        "Choose between basic and advanced AI models to optimize costs based on your needs.",
    },
    {
      icon: <FaPuzzlePiece size={32} className="text-dark-navy" />,
      title: "Native Integrations",
      description:
        "Everything you need built-in: databases, user authentication, payments, analytics, error monitoring, and AI capabilities.",
    },
    {
      icon: <FaDatabase size={32} className="text-dark-navy" />,
      title: "Staging Database",
      description:
        "We provide a full staging database so that updates can be made with confidence.",
    },
    {
      icon: <FaRobot size={32} className="text-dark-navy" />,
      title: "Latest AI Models with Full Context",
      description:
        "We use state-of-the-art AI models, providing the models with your entire code to ensure they have full context.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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