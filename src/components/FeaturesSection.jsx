import FeaturesHeader from './FeaturesHeader';
import FeaturesList from './FeaturesList';

export default function FeaturesSection() {
  return (
    <section id="features" class="bg-white text-dark-navy py-16">
      <div class="max-w-6xl mx-auto px-6">
        <FeaturesHeader />
        <FeaturesList />
      </div>
    </section>
  );
}