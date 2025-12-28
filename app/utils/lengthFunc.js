import { teams } from '../data/teams.js'
import { teamMembers } from '../data/members.js'
import { tasks } from '../data/tasks.js'

export const getTotalTeams = () => teams.length;

export const getTotalMembers = () => teamMembers.length;

export const getTotalInProgressTasks = () => {
  return tasks.filter(task => task.status === 'in-progress').length;
};

export const getTotalCompleteTask = () => {
  return tasks.filter(task => task.status === 'done').length;
}

export const getTotalPendingTask = () => {
  return tasks.filter(task => task.status === 'todo').length;
}