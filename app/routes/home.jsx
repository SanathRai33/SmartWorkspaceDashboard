import Header from "~/components/layout/Header";
import CountCard from "~/components/teams/CountCard";
import TeamCard from "~/components/teams/TeamCard";
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FileDownloadDoneOutlinedIcon from '@mui/icons-material/FileDownloadDoneOutlined';
import { teams } from "~/data/teams";
import { getTotalCompleteTask, getTotalInProgressTasks, getTotalMembers, getTotalPendingTask, getTotalTeams } from "../utils/lengthFunc";
import { getTeamProjects, getTeamTasks } from "../utils/countFunc";
import { useTaskContext } from "../contexts/TaskContext";
import { useMemo } from "react";

export function meta({ }) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const { tasks } = useTaskContext();

  const countData = useMemo(() => [
    {
      label: "Total Teams",
      count: getTotalTeams(),
      icon: GroupsOutlinedIcon,
      style: `bg-purple-100 text-purple-800`,
    },
    {
      label: "Total Members",
      count: getTotalMembers(),
      icon: PeopleAltOutlinedIcon,
      style: `bg-blue-100 text-blue-800`,
    },
    {
      label: "Active Tasks",
      count: getTotalInProgressTasks(tasks),
      icon: LoopOutlinedIcon,
      style: `bg-yellow-100 text-yellow-500`,
    },
    {
      label: "Pending Tasks",
      count: getTotalPendingTask(tasks),
      icon: AccessTimeOutlinedIcon,
      style: `bg-red-100 text-red-800`,
    },
    {
      label: "Task Completed",
      count: getTotalCompleteTask(tasks),
      icon: FileDownloadDoneOutlinedIcon,
      style: `bg-green-100 text-green-800`,
    },
  ], [tasks]);

  return (
    <main className="p-6 w-full min-h-screen">
      <Header
        title="Team Overview"
        description="Manage and collaborate with your teams"
      />
      <div className="overflow-x-auto w-full">
        <div className="inline-flex sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 min-w-max sm:min-w-0 mt-6">
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
      </div>
      <div className="py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 ">
        {teams.map((data, index) => (
          <TeamCard
            key={data.id}
            id={index}
            title={data.name}
            description={data.description}
            status="active"
            tasks={getTeamTasks(data.id).length}
            projects={getTeamProjects(data.id).length}
          />
        ))}
      </div>
    </main>
  );
}
