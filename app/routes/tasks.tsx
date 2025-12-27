import React from "react";
import Header from "~/components/layout/Header";
import TaskCard from "~/components/tasks/TaskCard";

export default function tasks() {
  return (
    <section className="w-full min-h-screen py-4 px-4 sm:px-4 lg:px-20">
      <Header title="Task Board" description="Organize and track your tasks" />
      <div>
        <TaskCard />
      </div>
    </section>
  );
}
