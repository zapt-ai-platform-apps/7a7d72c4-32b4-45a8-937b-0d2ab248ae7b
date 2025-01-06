import React from 'react';

export default function FeaturedApps() {
  const apps = [
    {
      name: 'Football Subs',
      description: 'A tool for managing a kids football team',
      url: 'https://footballsubs.com/',
    },
    {
      name: 'Morzine Ski Resort',
      description: 'A website for resort visitors',
      url: 'https://morzine.org/',
    },
    {
      name: 'Construction Career Development',
      description: 'An app for young people to think about the construction sector',
      url: 'https://construct-career.zapt.app/',
    },
    {
      name: 'Administrate',
      description: 'A tool to help you manage your tasks efficiently',
      url: 'https://www.administrate.co.uk/',
    },
  ];

  return (
    <div className="mt-16">
      <h4 className="text-5xl font-bold mb-12 text-center text-neon-yellow">
        Some Examples of Apps Built by ZAPT Users
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-12">
        {apps.map((app, index) => (
          <a
            key={index}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-charcoal-gray rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 flex flex-col justify-between cursor-pointer transform hover:scale-105"
          >
            <div className="mb-6">
              <img src="https://images.unsplash.com/photo-1612222869049-d8ec83637a3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwzfHwlNjBsb2dvJTIwZm9yJTIwJTI0JTdCYXBwLm5hbWV8ZW58MHx8fHwxNzM2MTc2NjQ4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                
                alt={`${app.name} Logo`}
                data-image-request={`logo for ${app.name}`}
                className="w-full h-40 object-contain mb-4 box-border"
              />
              <h5 className="text-3xl font-semibold mb-2 text-neon-yellow">{app.name}</h5>
              <p className="text-lg text-light-gray">{app.description}</p>
            </div>
            <div className="mt-auto">
              <button className="w-full bg-neon-yellow text-dark-navy font-semibold py-3 px-6 rounded-full hover:bg-purple-custom hover:text-white transition-colors cursor-pointer">
                Visit
              </button>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}