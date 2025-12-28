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