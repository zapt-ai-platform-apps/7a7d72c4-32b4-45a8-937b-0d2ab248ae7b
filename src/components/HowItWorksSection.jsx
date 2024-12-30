import { FaRobot, FaBolt } from 'react-icons/fa';
import { ImCog } from 'react-icons/im';

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <ImCog size={40} className="text-purple-custom" />,
      title: "1. Request an Update",
      description: "Submit a request to update your app using our intuitive interface.",
    },
    {
      icon: <FaRobot size={40} className="text-purple-custom" />,
      title: "2. AI Generates Code",
      description: "Our advanced AI processes your request and generates the updated code seamlessly.",
    },
    {
      icon: <FaBolt size={40} className="text-purple-custom" />,
      title: "3. See Changes Instantly",
      description: "Your app is updated instantly, allowing you to see changes in real-time.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-dark-navy text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold mb-12 text-center">How It Works</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h4 className="text-2xl font-semibold mb-2">{step.title}</h4>
              <p className="text-lg">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}