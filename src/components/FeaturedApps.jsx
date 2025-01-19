import React from 'react';

export default function FeaturedApps() {
  const apps = [
    {
      name: 'Administrate',
      description: 'A tool to help you manage your tasks efficiently',
      url: 'https://www.administrate.co.uk/',
    },
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
      name: 'Construction Careers',
      description: 'An app for young people to think about the construction sector',
      url: 'https://construct-career.zapt.app/',
    },
    // NEWLY ADDED APPS:
    {
      name: 'UpGrade',
      description: 'A personalized revision timetable app designed to help you efficiently prepare for your examinations.',
      url: 'https://upgrade.zapt.app/',
    },
    {
      name: 'Risk Assist',
      description: 'Helps you identify, assess, and mitigate risks with ease using our advanced AI-driven platform.',
      url: 'https://riskassist.org/',
    },
  ];

  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12">
        {apps.map((app, index) => (
          <a
            key={index}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark-navy rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 sm:p-8 flex flex-col justify-between cursor-pointer transform hover:scale-105"
          >
            <div className="mb-6">
              <h5 className="text-4xl font-semibold mb-2 text-white text-center">{app.name}</h5>
              <p className="text-xl text-white text-center">{app.description}</p>
            </div>
            <div className="mt-auto">
              <button className="w-full bg-neon-yellow text-dark-navy font-semibold py-4 px-8 rounded-full hover:bg-purple-custom hover:text-white transition-colors cursor-pointer">
                Visit
              </button>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}