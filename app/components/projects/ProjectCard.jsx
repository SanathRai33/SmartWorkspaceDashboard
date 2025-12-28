import React from 'react'
import { getDoneTaskByProjectId } from '../../utils/getFunc'

function ProjectCard({ id, date, endDate, name, description }) {

    const doneTask = getDoneTaskByProjectId(id);

    const progress = Math.floor((doneTask.done / doneTask.total) * 100)

    const color = progress < 25 ? 'red' : progress < 50 ? 'yellow' : progress < 90 ? 'skyBlue' : 'grren'

    return (
        <div className='bg-white rounded-xl w-full shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow'>
            <div className='flex items-start justify-between mb-4'>
                <div className='flex-1'>
                    <h1 className='text-lg font-bold text-gray-900'>{name}</h1>
                    <p className='text-sm text-gray-600 mt-1'>{description}</p>
                </div>
            </div>
            <div className='flex flex-col space-y-2 p-4 bg-amber-50 rounded-lg'>
                <div className='flex justify-between'>
                    <span className='text-sm font-medium text-gray-700'>Progress</span>
                    <span className='text-sm font-bold text-gray-900'>{progress}%</span>
                </div>
                <div className='w-full bg-gray-200 h-2 rounded-full overflow-hidden'>
                    <div className='bg-green-500 h-full rounded-full transition-all duration-500'
                        style={{ width: `${progress}%`, backgroundColor: color }}
                    ></div>
                </div>
            </div>
            <div className='flex items-center justify-between pt-4 border-t border-gray-100'>
                <div className='flex flex-col items-center space-x-2'>
                    <div className='text-xs font-medium text-green-500'>State Date</div>
                    <span className='text-xs font-medium text-green-600'>{date}</span>
                </div>
                <div className='flex flex-col items-center space-x-2'>
                    <div className='text-xs font-medium text-red-500'>End Date</div>
                    <span className='text-xs font-medium text-red-600'>{endDate}</span>
                </div>
            </div>
            <div className='flex items-center justify-between pt-4 border-t border-gray-100'>
                {
                    progress < 100 ?
                        (
                            <div className='flex items-center space-x-2'>
                                <div className='h-2 w-2 rounded-full bg-green-500'></div>
                                <span className='text-xs font-medium text-gray-600'>Active</span>
                            </div>
                        ) :
                        (
                            <></>
                        )
                }
                <button className='text-sm font-medium text-blue-600 hover:text-blue-800'>
                    View Details →
                </button>
            </div>
        </div>
    )
}

export default ProjectCard