import React from 'react'
import Header from "~/components/layout/Header";
import ProjectCard from "../components/projects/ProjectCard";
import { projects } from '../data/projects';
export default function Projects() {


  return (
    <div className="p-6 w-full bg-gray-100 min-h-screen">
      <Header title="Projects" description="Manage and collaborate on your projects" />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 ">
        {projects.map((project, index) => (
          <ProjectCard key={index} id={project.id} date={project.date} endDate={project.endDate} name={project.name} description={project.description} />

        ))}
      </div>
    </div>
  )
}
