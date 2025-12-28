import React, { useEffect, useState } from "react";
import Header from "~/components/layout/Header";
import TaskCard from "~/components/tasks/TaskCard";
import LoadingSpinner from "~/components/ui/LoadingSpinner";
import { useTaskContext } from "../contexts/TaskContext";

export default function Tasks() {
  const { tasks, updateTaskStatus } = useTaskContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const getTasksByStatus = (status) => {
    return tasks.filter(task => task.status === status);
  };

  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData('text/plain', taskId);
  };

  const handleDrop = (e, newStatus) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('text/plain');
    updateTaskStatus(taskId, newStatus);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  if (loading) {
    return (
      <section className="p-6 w-full min-h-screen">
        <Header title="Task Board" description="Organize and track your tasks" />
        <LoadingSpinner message="Loading task board..." />
      </section>
    );
  }

  return (
    <section className="p-6 w-full min-h-screen">
      <Header title="Task Board" description="Organize and track your tasks" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
        {/* Todo Column */}
        <div 
          className="bg-gray-50 rounded-lg p-4 min-h-96"
          onDrop={(e) => handleDrop(e, 'todo')}
          onDragOver={handleDragOver}
        >
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
            <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
            Todo ({getTasksByStatus('todo').length})
          </h3>
          <div className="space-y-3">
            {getTasksByStatus('todo').map((task) => (
              <div
                key={task.id}
                draggable
                onDragStart={(e) => handleDragStart(e, task.id)}
                className="cursor-move"
              >
                <TaskCard 
                  id={task.id} 
                  title={task.title} 
                  description={task.description} 
                  status={task.status} 
                  end={task.end} 
                  start={task.start} 
                />
              </div>
            ))}
          </div>
        </div>

        {/* In Progress Column */}
        <div 
          className="bg-blue-50 rounded-lg p-4 min-h-96"
          onDrop={(e) => handleDrop(e, 'in-progress')}
          onDragOver={handleDragOver}
        >
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            In Progress ({getTasksByStatus('in-progress').length})
          </h3>
          <div className="space-y-3">
            {getTasksByStatus('in-progress').map((task) => (
              <div
                key={task.id}
                draggable
                onDragStart={(e) => handleDragStart(e, task.id)}
                className="cursor-move"
              >
                <TaskCard 
                  id={task.id} 
                  title={task.title} 
                  description={task.description} 
                  status={task.status} 
                  end={task.end} 
                  start={task.start} 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Done Column */}
        <div 
          className="bg-green-50 rounded-lg p-4 min-h-96"
          onDrop={(e) => handleDrop(e, 'done')}
          onDragOver={handleDragOver}
        >
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            Done ({getTasksByStatus('done').length})
          </h3>
          <div className="space-y-3">
            {getTasksByStatus('done').map((task) => (
              <div
                key={task.id}
                draggable
                onDragStart={(e) => handleDragStart(e, task.id)}
                className="cursor-move"
              >
                <TaskCard 
                  id={task.id} 
                  title={task.title} 
                  description={task.description} 
                  status={task.status} 
                  end={task.end} 
                  start={task.start} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
