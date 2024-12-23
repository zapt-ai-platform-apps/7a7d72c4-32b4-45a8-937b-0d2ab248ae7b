export default function FeatureItem(props) {
  return (
    <div class="bg-charcoal-gray rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
      <div class="flex items-center justify-center mb-6">
        <div class="w-16 h-16 bg-purple-custom rounded-full flex items-center justify-center">
          {props.icon}
        </div>
      </div>
      <h4 class="text-2xl font-semibold mb-4 text-center">{props.title}</h4>
      <p class="text-center text-lg">{props.description}</p>
    </div>
  );
}