import React from 'react'

export default function ProjectCard({ id, title, description, status, members, tasks }: any) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-2">
        <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
          {status}
        </span>
      </div>
      <div className="mt-2 flex justify-between">
        <span className="text-sm text-gray-500">{members} members</span>
        <span className="text-sm text-gray-500">{tasks} tasks</span>
      </div>
    </div>
  )
}
