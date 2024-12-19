import { FaSolidDollarSign } from 'solid-icons/fa';

export default function DetailsSection() {
  return (
    <div class="bg-gradient-to-r from-purple-custom to-dark-navy text-light-gray py-16 px-6">
      <div class="max-w-6xl mx-auto flex flex-col items-center">
        <FaSolidDollarSign size={64} class="text-neon-yellow mb-4" />
        <h3 class="text-4xl font-semibold mb-6 text-center">
          Pay As You Go Usage
        </h3>
        <p class="text-lg text-center mb-6 max-w-2xl">
          We offer 'pay as you go' usage for building your apps using AI, but you get your first 5 app update requests free.
        </p>
        <p class="text-lg text-center max-w-2xl">
          We use the latest o1 model from ChatGPT to build your app.
        </p>
      </div>
    </div>
  );
}