import { tasks } from "~/data/tasks";
import { projects } from "~/data/projects";
import { teamMembers } from "~/data/members";

export function totalTasks(projectId) {
  return tasks.filter((task) => task.projectId === projectId).length;
}

export function getProjectTasks(projectId) {
  return tasks.filter((task) => task.projectId === projectId);
}

// function getProjectMembers(projectId) {
//   const project = projects.find(p => p.id === projectId);
//   if (!project) return [];
  
//   return teamMembers.filter(member => member.teamId === project.teamId);
// }

export function getTeamMembers(teamId) {
  return teamMembers.filter(member => member.teamId === teamId);
}

export function getTeamProjects(teamId) {
  return projects.filter(project => project.teamId === teamId);
}

export function getTeamTasks(teamId) {
  const teamProjects = getTeamProjects(teamId);
  const projectIds = teamProjects.map(p => p.id);
  return tasks.filter(task => projectIds.includes(task.projectId));
}
