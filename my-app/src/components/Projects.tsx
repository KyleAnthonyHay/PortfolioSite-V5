'use client';

import Image from 'next/image';
import Link from 'next/link';

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
    {
      id: 5,
      title: 'MunchMap',
      image: '/projects/MunchMap.png',
      landscape: true,
    },
    {
      id: 6,
      title: 'QuizCraft',
      image: '/projects/QuizCraft.png',
      landscape: true,
    },
  ];

  return (
    <section className="pb-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
  <Link
    key={project.id}
    href={`/projects/${project.id}`}
    className="group relative bg-[#F5F5F5] rounded-[20px] overflow-hidden aspect-[6/4]"
  >
            
              <div className="absolute inset-0 flex items-start justify-center pt-16">
                <div className={`relative transform transition-transform duration-800 ${project.landscape ? 'w-[75%] aspect-[16/9] hover:scale-101' : 'w-[45%] aspect-[9/19] hover:-translate-y-3'}`}>
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 