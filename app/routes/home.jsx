import Header from "~/components/layout/Header";
import CountCard from "~/components/teams/CountCard";
import ProjectCard from "~/components/projects/ProjectCard";
import {
  Groups as TeamIcon,
  People as MembersIcon,
  Folder as ProjectIcon,
  Pending as PendingIcon,
  CheckCircle as CompletedIcon,
} from "@mui/icons-material";
import { projects, tasks } from "~/data/workspaceData";

export function meta({ }) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const countData = [
  {
    label: "Total Teams",
    count: 6,
    icon: TeamIcon,
    style: `bg-red-100 text-red-800`,
  },
  {
    label: "Total Members",
    count: 50,
    icon: MembersIcon,
    style: `bg-blue-100 text-blue-800`,
  },
  {
    label: "Active Projects",
    count: 35,
    icon: ProjectIcon,
    style: `bg-blue-100 text-blue-800`,
  },
  {
    label: "Pending Tasks",
    count: 28,
    icon: PendingIcon,
    style: `bg-yellow-100 text-yellow-800`,
  },
  {
    label: "Task Completed",
    count: 2,
    icon: CompletedIcon,
    style: `bg-green-100 text-green-800`,
  },
];

// projects.map((data) => {
//   console.log(data)
// });

function totalTasks(projectId) {
  return tasks.filter(task => task.projectId === projectId).length;
}

export default function Home() {
  return (
    <main className="w-full min-h-screen py-4 px-4 sm:px-4 lg:px-20">
      <Header
        title="Team Overview"
        description="Manage and collaborate with your teams"
      />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {countData.map((data, i) => (
          <CountCard
            key={i}
            title={data.label}
            count={data.count}
            icon={data.icon}
            style={data.style}
          />
        ))}
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 ">
        {projects.map((data, i) => (
          <ProjectCard
            key={i}
            id={data.id}
            title={data.name}
            description={data.description || "Not set yet"}
            status={data.status || "Active"}
            members={data.members || 10}
            tasks={totalTasks(data.id)}
          />
        ))}
      </div>
    </main>
  );
}
