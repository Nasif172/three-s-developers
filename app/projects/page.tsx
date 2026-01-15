'use client';

// FIX: We use '../' to tell the computer to go UP one folder
import PropertyCard from '../components/PropertyCard';
import projectsData from '../data/projects.json';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-800 mb-2 text-center">Current Projects</h1>
        <p className="text-center text-gray-500 mb-12">Explore our RAJUK-approved land projects</p>
        
        {/* The Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <PropertyCard
              key={project.id}
              id={project.id}
              title={project.title}
              location={project.location}
              status={project.status}
              price={project.price}
              plotSize={project.plotSize}
              roadWidth={project.roadWidth}
              category={project.category}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
