import { FaSolidRobot, FaSolidBolt } from 'solid-icons/fa';
import { ImCog } from 'solid-icons/im';

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <ImCog size={40} class="text-purple-custom" />,
      title: "1. Request an Update",
      description: "Submit a request to update your app using our intuitive interface.",
    },
    {
      icon: <FaSolidRobot size={40} class="text-purple-custom" />,
      title: "2. AI Generates Code",
      description: "Our advanced AI processes your request and generates the updated code seamlessly.",
    },
    {
      icon: <FaSolidBolt size={40} class="text-purple-custom" />,
      title: "3. See Changes Instantly",
      description: "Your app is updated instantly, allowing you to see changes in real-time.",
    },
  ];

  return (
    <section id="how-it-works" class="bg-dark-navy text-white py-16 px-6">
      <div class="max-w-6xl mx-auto">
        <h3 class="text-4xl font-bold mb-12 text-center">How It Works</h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div class="flex flex-col items-center text-center">
              <div class="flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h4 class="text-2xl font-semibold mb-2">{step.title}</h4>
              <p class="text-lg">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}