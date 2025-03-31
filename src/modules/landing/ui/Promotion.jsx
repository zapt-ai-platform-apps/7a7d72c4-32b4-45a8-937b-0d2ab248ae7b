import React from 'react';

export default function Promotion() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-8 w-full py-16 bg-charcoal-gray">
      <a
        href="https://www.futurepedia.io/tool/zapt?utm_source=zapt_embed"
        className="inline-block w-64 h-14 bg-teal-500 p-1 rounded"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://www.futurepedia.io/api/image-widget?toolId=399c93a5-2e95-4240-9b5e-a862f5384d8f"
          alt="ZAPT | Featured on Futurepedia"
          className="w-full h-full"
        />
      </a>
      <a
        href="https://www.producthunt.com/posts/zapt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-zapt"
        target="_blank"
        className="inline-block w-64 h-14 p-1 rounded"
        rel="noopener noreferrer"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=428074&theme=light"
          alt="ZAPT - Create amazing apps in seconds | Product Hunt"
          className="w-full h-full"
        />
      </a>
    </div>
  );
}