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
      <h4 className="text-4xl font-semibold mb-8 text-center text-white">
        Some Examples of Apps Built by ZAPT Users
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {apps.map((app, index) => (
          <a
            key={index}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-charcoal-gray rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
          >
            <div>
              <h5 className="text-2xl font-bold mb-4 text-neon-yellow">{app.name}</h5>
              <p className="text-lg text-light-gray">{app.description}</p>
            </div>
            <div className="mt-6">
              <button className="w-full bg-neon-yellow text-dark-navy font-semibold py-2 px-4 rounded-full hover:bg-purple-custom hover:text-white transition-colors cursor-pointer">
                Visit
              </button>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}