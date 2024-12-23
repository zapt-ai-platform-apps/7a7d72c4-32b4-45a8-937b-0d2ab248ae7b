import { FaSolidRobot, FaSolidPuzzlePiece, FaSolidDatabase, FaSolidWallet, FaSolidUsers } from 'solid-icons/fa';
import { ImCog } from 'solid-icons/im';
import FeatureItem from './FeatureItem';

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaSolidRobot size={48} class="text-neon-yellow" />,
      title: "Latest AI Models with Full Context",
      description: "We use state-of-the-art AI models, providing the models with your entire code to ensure they have full context."
    },
    {
      icon: <FaSolidPuzzlePiece size={48} class="text-neon-yellow" />,
      title: "Native Integrations",
      description: "We provide database capabilities, authentication, payment functionalities, and AI APIs for your apps natively."
    },
    {
      icon: <FaSolidDatabase size={48} class="text-neon-yellow" />,
      title: "Staging Database",
      description: "We provide a full staging database, so that database updates can be made with confidence."
    },
    {
      icon: <FaSolidWallet size={48} class="text-neon-yellow" />,
      title: "Pay-As-You-Go Pricing",
      description: "We are fully pay-as-you-go, so you never spend more than you use, with no upfront costs."
    },
    {
      icon: <ImCog size={48} class="text-neon-yellow" />,
      title: "Flexible AI Model Selection",
      description: "You can choose whether to use a basic or advanced AI model, so that you can keep small changes low cost."
    },
    {
      icon: <FaSolidUsers size={48} class="text-neon-yellow" />,
      title: "Accessible to Everyone",
      description: "ZAPT is accessible for anyone, even non-technical users. Anyone can now turn their app ideas into reality."
    },
  ];

  return (
    <section id="features" class="bg-dark-navy text-light-gray py-16">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-12">
          <h3 class="text-5xl font-semibold mb-6">Why Choose ZAPT?</h3>
          <p class="text-lg max-w-2xl mx-auto">Discover the features that make ZAPT the perfect choice for creating powerful AI-driven applications effortlessly.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map(feature => (
            <FeatureItem
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}