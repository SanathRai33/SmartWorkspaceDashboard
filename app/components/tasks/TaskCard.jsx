import React from 'react'
import { Calendar, Clock, ChevronRight } from 'lucide-react'
import { getMembersByTaskId } from '../../utils/getFunc'

export default function TaskCard({ id, title, description, status, end, start }) {
  const statusColors = {
    todo: 'bg-gray-100 text-gray-800 border-gray-300',
    'in-progress': 'bg-blue-100 text-blue-800 border-blue-300',
    done: 'bg-green-100 text-green-800 border-green-300',
    pending: 'bg-yellow-100 text-yellow-800 border-yellow-300'
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })
  }

  const Members = getMembersByTaskId(id)


  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:border-gray-300 hover:shadow-sm transition-all">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
          <p className="text-gray-600 text-xs mt-1 line-clamp-2 lg:min-h-8">{description}</p>
        </div>
        <ChevronRight className="h-4 w-4 text-gray-400 ml-2 shrink-0" />
      </div>

      <div className="flex items-center justify-between mb-3">
        <span className={`px-2 py-1 text-xs font-medium rounded-full border ${statusColors[status] || statusColors.todo}`}>
          {status.replace('-', ' ').toUpperCase()}
        </span>
      </div>

      <div className="flex items-center text-xs text-gray-500 border-t border-gray-100 py-1">
        {Members.map((mem, index) => (
          <div
            key={mem.id}
            className={`bg-gray-200 text-black rounded-full border-l border-gray-300 w-8 h-8 flex justify-center items-center ${index > 0 ? '-ml-2' : ''}`}
          >
            {mem.name.split(' ').map(word => word.charAt(0)).join('').slice(0, 2).toUpperCase()}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-100 pt-3">
        <div className="flex items-center justify-between mr-4">
          <Calendar className="h-3 w-3 mr-1" />
          <span>{formatDate(start)}</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-3 w-3 mr-1" />
          <span>{formatDate(end)}</span>
        </div>
      </div>
    </div>
  )
}