import { notFound } from 'next/navigation';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';

const projects = [
  { id: 1, title: 'SelahNote', image: '/projects/selah-note.png', description: 'SelahNote is an AI notetaker for sermons. It provides file organization, recording summaries, and file upload capabilities to streamline the process of taking notes during sermons.' },
  { id: 2, title: 'Expense Tracker', image: '/projects/expense-tracker.png', description: 'ExpenseTracker is a finance analytics tool that gathers data from an API and displays your monthly transactions on a graph. It also allows you to assign transaction categories for organization.' },
  { id: 3, title: 'The Wall', image: '/projects/the-wall.png', description: 'TheWall is a social board application that displays users’ posts to a collective feed called "The Wall." Users can sign up using Gmail.' },
  { id: 4, title: 'Country Viewer', image: '/projects/country-viewer.png', description: 'Allows you to view all the countries of the world and their relevant data. Country-relative population is automatically updated via a country data gathering API.' },
];

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id.toString() }));
}

interface ProjectPageProps {
  params: { id: string };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const idNum = parseInt(params.id, 10);
  const project = projects.find((p) => p.id === idNum);
  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
    <div className="absolute top-12 left-12">
      <Link href="/" className="text-gray-600 hover:text-gray-800 inline-block p-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </Link>
    </div>
    <section className="pt-40 pb-40">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 space-y-8">
        {/* Project Card */}
        <div className="group relative bg-[#F5F5F5] rounded-[20px] overflow-hidden aspect-[6/4] mx-auto max-w-[720px]">
          <div className="absolute inset-0 flex items-start justify-center pt-16">
            <div className="relative w-[45%] aspect-[9/19] transform transition-transform duration-800 hover:-translate-y-3">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <h1 className="text-[32px] font-medium">{project.title}</h1>
        <p className="text-[20px] leading-[1.6] text-[#666666]">{project.description}</p>
      </div>
      <Footer />
    </section>
    </>
  );
}
