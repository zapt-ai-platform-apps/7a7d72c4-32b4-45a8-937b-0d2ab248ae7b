import { createSignal } from 'solid-js';

export default function SummarySection() {
  return (
    <section id="summary" class="bg-purple-custom text-white py-16 px-6">
      <div class="max-w-6xl mx-auto">
        <h3 class="text-4xl font-bold mb-6 text-center text-neon-yellow">What is ZAPT?</h3>
        <p class="text-xl text-center leading-relaxed">
          ZAPT empowers you to transform your ideas into powerful applications effortlessly, without any coding required. Build and customize your own apps in minutes using the latest AI technologies.
        </p>
      </div>
    </section>
  );
}