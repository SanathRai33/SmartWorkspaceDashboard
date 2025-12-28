import React from 'react'
import { getDoneTaskByProjectId, getStatusCountById } from '../../utils/getFunc'
import { FaCheck, FaClock, FaFolder } from 'react-icons/fa';

function ProjectCard({ id, date, endDate, name, description, status }) {

    const count = getStatusCountById(id);
    const totalTasks = count.todo + count.progress + count.done;
    const progress = totalTasks > 0 ? Math.floor((count.done / totalTasks) * 100) : 0;

    const getProgressColor = (progress) => {
        if (progress < 25) return '#ef4444'; 
        if (progress < 50) return '#eab308'; 
        if (progress < 90) return '#0ea5e9'; 
        return '#22c55e'; 
    };

    const isCompleted = status === 'completed';

    return (
        <div className='bg-white rounded-xl w-full shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow'>
            <div className='flex items-start justify-between mb-4'>
                <div className='flex-1'>
                    <h1 className='text-lg font-bold text-gray-900'>{name}</h1>
                    <p className='text-sm text-gray-600 mt-1 min-h-10'>{description}</p>
                </div>
            </div>
            
            <div className='flex flex-col space-y-2 p-4 bg-amber-50 rounded-t-lg'>
                <div className='flex justify-between'>
                    <span className='text-sm font-medium text-gray-700'>Progress</span>
                    <span className='text-sm font-bold text-gray-900'>{progress}%</span>
                </div>
                <div className='w-full bg-gray-200 h-2 rounded-full overflow-hidden'>
                    <div 
                        className='h-full rounded-full transition-all duration-500'
                        style={{ 
                            width: `${progress}%`, 
                            backgroundColor: getProgressColor(progress) 
                        }}
                    ></div>
                </div>
            </div>

            <div className='flex justify-between items-center p-4 bg-slate-50 rounded-b-lg text-black gap-2'>
                <div className='flex-1 shadow-md p-2 rounded-md text-blue-700 flex items-center justify-center gap-1 bg-blue-50'>
                    <FaFolder className="text-sm"/> 
                    <span className="text-xs">Todo: {count.todo}</span>
                </div>
                <div className='flex-1 shadow-md p-2 rounded-md text-yellow-700 flex items-center justify-center gap-1 bg-yellow-50'>
                    <FaClock className="text-sm"/>
                    <span className="text-xs">Progress: {count.progress}</span>
                </div>
                <div className='flex-1 shadow-md p-2 rounded-md text-green-700 flex items-center justify-center gap-1 bg-green-50'>
                    <FaCheck className="text-sm"/>
                    <span className="text-xs">Done: {count.done}</span>
                </div>
            </div>
            
            <div className='flex items-center justify-between pt-4 border-t border-gray-100'>
                <div className='flex flex-col items-center'>
                    <div className='text-xs font-medium text-green-500'>Start Date</div>
                    <span className='text-xs font-medium text-green-600'>{date}</span>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='text-xs font-medium text-red-500'>End Date</div>
                    <span className='text-xs font-medium text-red-600'>{endDate}</span>
                </div>
                <div className='flex items-center space-x-2'>
                    <div className={`h-2 w-2 rounded-full ${isCompleted ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                    <span className='text-xs font-medium text-gray-600'>
                        {isCompleted ? 'Completed' : 'Active'}
                    </span>
                </div>
            </div>
            
            <div className='flex items-center justify-end pt-4 border-t border-gray-100'>
                <button className='text-sm font-medium text-blue-600 hover:text-blue-800'>
                    View Details →
                </button>
            </div>
        </div>
    )
}

export default ProjectCard