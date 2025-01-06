import React from 'react';

export default function AppList() {
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
    <div className="mt-12">
      <h4 className="text-3xl font-semibold mb-8 text-center">Apps Built with ZAPT</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {apps.map((app, index) => (
          <a
            key={index}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-charcoal-gray rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <h5 className="text-2xl font-semibold mb-4">{app.name}</h5>
            <p className="text-lg text-light-gray">{app.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}