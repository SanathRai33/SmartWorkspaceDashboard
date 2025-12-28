import { projects } from "~/data/projects";
import { tasks } from "../data/tasks";
import { teams } from "../data/teams";
import { teamMembers } from "../data/members";

export function getTeamByTeamId(teamId){
  return teams.find((t) => t.id == teamId);
}

export function getProjectByTeamId(teamId) {
  return projects.filter((pro) => pro.teamId == teamId);
}

export function getDoneTaskByProjectId(projectId) {
  const total = tasks.filter((task) => task.projectId == projectId);
  const done = total.filter((t) => t.status == "done").length;

  return { total: total.length, done };
}

export function getMembersByTaskId(taskId){
  return teamMembers.filter((mem) => mem.taskIds.includes(taskId));
}

export function getStatusCountById(projectId) {
  const total = tasks.filter((task) => task.projectId == projectId);

  const todo = total.filter((t) => t.status == "todo").length;
  const progress = total.filter((t) => t.status == "in-progress").length;
  const done = total.filter((t) => t.status == "done").length;

  return { todo, progress, done}
}