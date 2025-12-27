import type { Route } from "./+types/home";
import Header from "~/components/layout/Header";
import CountCard from "~/components/teams/CountCard";
import { 
  Groups as TeamIcon,
  People as MembersIcon,
  Folder as ProjectIcon,
  Pending as PendingIcon,
  CheckCircle as CompletedIcon 
} from '@mui/icons-material';
import ProjectCard from "~/components/teams/ProjectCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const countData = [
  { label: 'Total Teams', count: 6, icon: TeamIcon, style: `bg-red-100 text-red-800` },
  { label: 'Total Members', count: 50, icon: MembersIcon, style: `bg-blue-100 text-blue-800` },
  { label: 'Active Projects', count: 35, icon: ProjectIcon, style: `bg-blue-100 text-blue-800` },
  { label: 'Pending Tasks', count: 28, icon: PendingIcon, style: `bg-yellow-100 text-yellow-800` },
  { label: 'Task Completed', count: 2, icon: CompletedIcon, style: `bg-green-100 text-green-800` },
]

const projectData = [
  { title: 'Project Alpha', description: 'Description for Project Alpha', status: 'active', members: 10, tasks: 5 },
  { title: 'Project Beta', description: 'Description for Project Beta', status: 'pending', members: 8, tasks: 3 },
  { title: 'Project Gamma', description: 'Description for Project Gamma', status: 'active', members: 12, tasks: 7 },
  { title: 'Project Delta', description: 'Description for Project Delta', status: 'pending', members: 6, tasks: 2 },
  { title: 'Project Epsilon', description: 'Description for Project Epsilon', status: 'active', members: 15, tasks: 10 },
]

export default function Home() {
  return (
    <main className="w-full min-h-screen py-4 px-4 sm:px-4 lg:px-20">
      <Header title="Team Overview" description="Manage and collaborate with your teams" />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {countData.map((data, i) => (
          <CountCard key={i} title={data.label} count={data.count} icon={data.icon} style={data.style} />
        ))}
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 ">
        {projectData.map((data, i) => (
          <ProjectCard key={i} id={i} title={data.title} description={data.description} status={data.status} members={data.members} tasks={data.tasks} />
        ))}
      </div>
    </main>
  );
}