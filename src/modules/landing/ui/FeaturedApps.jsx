import React from 'react';
import { api } from '../api';
import { eventBus } from '@/modules/core/events';
import { events } from '../events';

export default function FeaturedApps() {
  const apps = api.getFeaturedApps();

  const handleAppClick = (appName) => {
    eventBus.publish(events.APP_CLICKED, { appName });
  };

  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-12">
        {apps.map((app, index) => (
          <a
            key={index}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark-navy rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col justify-between cursor-pointer transform hover:scale-[1.02] group"
            onClick={() => handleAppClick(app.name)}
          >
            <div className="mb-4">
              <h5 className="text-2xl md:text-3xl font-bold mb-2 text-white text-center group-hover:text-neon-yellow transition-colors">
                {app.name}
              </h5>
              <p className="text-base md:text-lg text-white/80 text-center">{app.description}</p>
            </div>
            <div className="mt-4">
              <button className="w-full bg-neon-yellow text-dark-navy font-semibold py-3 px-6 rounded-full hover:bg-purple-custom hover:text-white transition-colors cursor-pointer text-sm md:text-base">
                Visit App
              </button>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}