import React from 'react'
import Header from "~/components/layout/Header";
import ProjectCard from "~/components/projects/ProjectCard";
const projectData = [
    { title: 'Project Alpha', description: 'Description for Project Alpha', status: 'active', members: 10, tasks: 5 },
    { title: 'Project Beta', description: 'Description for Project Beta', status: 'pending', members: 8, tasks: 3 },
    { title: 'Project Gamma', description: 'Description for Project Gamma', status: 'active', members: 12, tasks: 7 },
    { title: 'Project Delta', description: 'Description for Project Delta', status: 'pending', members: 6, tasks: 2 },
    { title: 'Project Epsilon', description: 'Description for Project Epsilon', status: 'active', members: 15, tasks: 10 },
  ]

export default function projects() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Header title="Projects" description="Manage and collaborate on your projects" />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 ">
            {projectData.map((data, i) => (
                <ProjectCard key={i} id={i} title={data.title} description={data.description} status={data.status} members={data.members} tasks={data.tasks} />
            ))}
        </div>
    </div>
  )
}
