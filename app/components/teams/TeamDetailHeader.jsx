import React from 'react'
import { getTeamByTeamId } from '../../utils/getFunc'

export default function TeamDetailHeader({ id }) {
    const team = getTeamByTeamId(id)
    
    if (!team) return <div className='bg-white shadow hover:shadow-lg w-full h-40 rounded-2xl p-6'>Team not found</div>

    return (
        <div className='bg-white shadow hover:shadow-lg w-full rounded-2xl p-6'>
            <div className='flex items-start justify-between'>
                <div>
                    <div className='lg:flex md:flex items-center lg:space-x-3'>
                        <div className='h-12 w-12 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xl'>
                            {team.name.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold text-gray-900'>{team.name}</h1>
                            <p className='text-gray-600 mt-1'>{team.description}</p>
                        </div>
                    </div>
                </div>
                <div className='text-right w-18'>
                    <div className='text-sm text-gray-500'>Team ID</div>
                    <div className='text-lg font-mono text-gray-800'>{team.id}</div>
                </div>
            </div>
        </div>
    )
}