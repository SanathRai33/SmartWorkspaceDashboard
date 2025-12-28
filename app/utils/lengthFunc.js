import { teams } from '../data/teams.js'
import { teamMembers } from '../data/members.js'

export const getTotalTeams = () => teams.length;

export const getTotalMembers = () => teamMembers.length;

export const getTotalInProgressTasks = (tasks) => {
  return tasks.filter(task => task.status === 'in-progress').length;
};

export const getTotalCompleteTask = (tasks) => {
  return tasks.filter(task => task.status === 'done').length;
}

export const getTotalPendingTask = (tasks) => {
  return tasks.filter(task => task.status === 'todo').length;
}