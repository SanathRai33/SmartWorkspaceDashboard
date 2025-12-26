export const workspaceData = {
  teams: [
    {
      id: "team-1",
      name: "Frontend Team",
      projects: [
        {
          id: "project-1",
          name: "Dashboard UI",
          tasks: [
            {
              id: "task-1",
              title: "Create layout structure",
              status: "todo"
            },
            {
              id: "task-2",
              title: "Build navigation bar",
              status: "in-progres"
            },
            {
              id: "task-3",
              title: "Finalize desgin review",
              status: "done"
            }
          ]
        },
        {
          id: "project-2",
          name: "Landing Page",
          tasks: [
            {
              id: "task-4",
              title: "Hero section",
              status: "todo"
            },
            {
              id: "task-5",
              title: "Responsive fixes",
              status: "in-progress"
            }
          ]
        }
      ]
    },
    {
      id: "team-2",
      name: "Backend Team",
      projects: [
        {
          id: "project-3",
          name: "API Development",
          tasks: [
            {
              id: "task-6",
              title: "Setup server",
              status: "done"
            },
            {
              id: "task-7",
              title: "Create task endpoints",
              status: "todo"
            }
          ]
        }
      ]
    }
  ]
};
