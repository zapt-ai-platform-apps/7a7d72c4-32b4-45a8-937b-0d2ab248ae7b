import React from 'react';

export default function VideoSection() {
  return (
    <section className="bg-dark-navy py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white">
          See ZAPT in Action
        </h3>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-light-gray">
          Watch how easily you can create powerful apps without any coding
        </p>
        <div className="relative pt-[56.25%] w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/F5JALeswTNA"
            title="ZAPT Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}