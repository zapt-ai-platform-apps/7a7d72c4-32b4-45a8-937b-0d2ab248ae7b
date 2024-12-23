import { Component } from 'solid-js';

const FeatureItem = (props) => {
  return (
    <div class="flex flex-col items-center">
      <div class="w-24 h-24 mb-6 flex items-center justify-center bg-purple-custom rounded-full">
        {props.icon}
      </div>
      <h3 class="text-2xl font-semibold mb-4 text-center">{props.title}</h3>
      <p class="text-lg text-center">
        {props.description}
      </p>
    </div>
  );
};

export default FeatureItem;