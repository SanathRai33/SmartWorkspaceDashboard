import React from "react";
import Header from "~/components/layout/Header";
import TaskCard from "~/components/tasks/TaskCard";
import { tasks } from "../data/tasks";

export default function Tasks() {
  return (
    <section className="p-6 w-full min-h-screen">
      <Header title="Task Board" description="Organize and track your tasks" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-4 lg:gap-x-2 gap-y-4 py-6">
        {tasks.map((task, index) => (
          <TaskCard key={index} id={task.id} title={task.title} description={task.description} status={task.status} end={task.end} start={task.start} />
        ))}
      </div>
    </section>
  );
}
