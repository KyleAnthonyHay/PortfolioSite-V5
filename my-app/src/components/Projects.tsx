'use client';

import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Selah Note',
      image: '/projects/selah-note.png',
    },
    {
      id: 2,
      title: 'Expense Tracker',
      image: '/projects/expense-tracker.png',
    },
    {
      id: 3,
      title: 'The Wall',
      image: '/projects/the-wall.png',
    },
    {
      id: 4,
      title: 'Country Viewer',
      image: '/projects/country-viewer.png',
    },
  ];

  return (
    <section className="pb-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#F5F5F5] rounded-[20px] overflow-hidden aspect-[4/3]"
            >
              <div className="absolute inset-0 flex items-start justify-center pt-8">
                <div className="relative w-[45%] aspect-[9/19]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={project.id <= 2}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 