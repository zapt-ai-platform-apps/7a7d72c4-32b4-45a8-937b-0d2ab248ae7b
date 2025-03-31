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
import { api } from '../api';

export default function FeaturesList() {
  // Get features from API
  const featuresData = api.getFeatures();
  
  // Map icons to components
  const iconMap = {
    FaMagic: <FaMagic size={32} className="text-dark-navy" />,
    FaShieldAlt: <FaShieldAlt size={32} className="text-dark-navy" />,
    FaUserFriends: <FaUserFriends size={32} className="text-dark-navy" />,
    FaPuzzlePiece: <FaPuzzlePiece size={32} className="text-dark-navy" />,
    FaCoins: <FaCoins size={32} className="text-dark-navy" />,
    FaRocket: <FaRocket size={32} className="text-dark-navy" />
  };

  const features = featuresData.map(feature => ({
    ...feature,
    icon: iconMap[feature.icon]
  }));

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