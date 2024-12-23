export default function FeatureItem(props) {
  return (
    <div class="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div class="flex items-center justify-center mb-6">
        <div class="w-16 h-16 bg-neon-yellow rounded-full flex items-center justify-center">
          {props.icon}
        </div>
      </div>
      <h4 class="text-2xl font-bold mb-4 text-center text-dark-navy">{props.title}</h4>
      <p class="text-center text-lg text-gray-600">{props.description}</p>
    </div>
  );
}