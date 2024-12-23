import { FaSolidRobot, FaSolidPuzzlePiece, FaSolidDatabase, FaSolidWallet, FaSolidUsers } from 'solid-icons/fa';
import { ImCog } from 'solid-icons/im';
import FeatureItem from './FeatureItem';

export default function FeaturesList() {
  const features = [
    {
      icon: <FaSolidUsers size={32} class="text-dark-navy" />,
      title: "Accessible to Everyone",
      description:
        "Our platform completely abstracts all coding and technical tasks away.",
    },
    {
      icon: <FaSolidWallet size={32} class="text-dark-navy" />,
      title: "Pay-As-You-Go Pricing",
      description:
        "We are fully pay-as-you-go, so you never spend more than you use, with no upfront costs.",
    },
    {
      icon: <ImCog size={32} class="text-dark-navy" />,
      title: "Flexible AI Model Selection",
      description:
        "You can choose whether to use a basic or advanced AI model, so that you can keep small changes low cost.",
    },
    {
      icon: <FaSolidRobot size={32} class="text-dark-navy" />,
      title: "Latest AI Models with Full Context",
      description:
        "We use state-of-the-art AI models, providing the models with your entire code to ensure they have full context.",
    },
    {
      icon: <FaSolidPuzzlePiece size={32} class="text-dark-navy" />,
      title: "Native Integrations",
      description:
        "We provide database capabilities, authentication, payment functionalities, and AI APIs for your apps natively.",
    },
    {
      icon: <FaSolidDatabase size={32} class="text-dark-navy" />,
      title: "Staging Database",
      description:
        "We provide a full staging database, so that database updates can be made with confidence.",
    },

  ];

  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {features.map((feature) => (
        <FeatureItem
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}
