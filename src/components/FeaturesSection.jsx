import FeaturesHeader from './FeaturesHeader';
import FeaturesList from './FeaturesList';

export default function FeaturesSection() {
  return (
    <section id="features" class="bg-dark-navy text-light-gray py-16">
      <div class="max-w-6xl mx-auto px-6">
        <FeaturesHeader />
        <FeaturesList />
      </div>
    </section>
  );
}