import { tasks } from "~/data/tasks";
import { projects } from "~/data/projects";
import { teamMembers } from "~/data/members";

export function totalTasks(projectId) {
  return tasks.filter((task) => task.projectId === projectId).length;
}

export function getProjectTasks(projectId) {
  return tasks.filter((task) => task.projectId === projectId);
}

export function getTeamMembers(teamId) {
  const teamProjects = getTeamProjects(teamId);
  const projectIds = teamProjects.map(p => p.id);
  const teamTasks = tasks.filter(task => projectIds.includes(task.projectId));
  const memberIds = new Set();
  teamTasks.forEach(task => {
    task.memberIds.forEach(memberId => memberIds.add(memberId));
  });
  return Array.from(memberIds).map(memberId => teamMembers.find(m => m.id === memberId)).filter(Boolean);
}

export function getTeamProjects(teamId) {
  return projects.filter(project => project.teamId === teamId);
}

export function getTeamTasks(teamId) {
  const teamProjects = getTeamProjects(teamId);
  const projectIds = teamProjects.map(p => p.id);
  const allTask = tasks.filter(task => projectIds.includes(task.projectId));
  return allTask.filter(task => task.status == "in-progress");
}
