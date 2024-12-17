import { lightBulb, users } from 'solid-heroicons/solid';
import { Icon } from 'solid-heroicons';

export default function FeaturesSection() {
  return (
    <div id="features" class="bg-dark-navy text-light-gray py-16">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-12">
          <h3 class="text-4xl font-semibold">
            Why Choose ZAPT?
          </h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="flex flex-col items-center">
            <div class="w-24 h-24 mb-6 flex items-center justify-center bg-purple-custom rounded-full">
              <Icon path={lightBulb} class="w-12 h-12 text-neon-yellow" />
            </div>
            <h3 class="text-2xl font-semibold mb-4 text-center">AI-Powered Development</h3>
            <p class="text-lg text-center">
              Using AI, our platform lets you create apps just by describing your ideas in plain English.
            </p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-24 h-24 mb-6 flex items-center justify-center bg-purple-custom rounded-full">
              <Icon path={users} class="w-12 h-12 text-neon-yellow" />
            </div>
            <h3 class="text-2xl font-semibold mb-4 text-center">No Technical Skills Required</h3>
            <p class="text-lg text-center">
              Simply tell ZAPT what you want to create, and our platform handles all the technical complexity automatically—like databases, user accounts, and payment systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}