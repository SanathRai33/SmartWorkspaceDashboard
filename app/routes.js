import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("tasks", "routes/tasks.jsx"),
  route("projects", "routes/projects.jsx"),
];
