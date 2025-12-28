import React, { useEffect, useState, useRef } from 'react'

const Filter = ({data, onFilter}) => {

    const [selected, setSelected] = useState('all')
    const [filtered, setFiltered] = useState(data)
    const [searchQuery, setSearchQuery] = useState('')
    const [sortBy, setSortBy] = useState('title-asc')
    const originalData = useRef(data)

    useEffect(() => {
        let filteredData = originalData.current;
        if (selected !== "all") {
            filteredData = filteredData.filter((task) => task.status === selected);
        }
        if (searchQuery) {
            filteredData = filteredData.filter((task) => 
                task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                task.description.toLowerCase().includes(searchQuery.toLowerCase()) 
            );
        }

        filteredData = [...filteredData].sort((a, b) => {
            switch (sortBy) {
                case 'title-asc':
                    return a.title.localeCompare(b.title);
                case 'title-desc':
                    return b.title.localeCompare(a.title);
                case 'start-newest':
                    return new Date(b.start) - new Date(a.start);
                case 'start-oldest':
                    return new Date(a.start) - new Date(b.start);
                case 'end-newest':
                    return new Date(b.end) - new Date(a.end);
                case 'end-oldest':
                    return new Date(a.end) - new Date(b.end);
                default:
                    return 0;
            }
        });

        setFiltered(filteredData);
        if (onFilter) {
            onFilter(filteredData);
        }
    }, [selected, searchQuery, sortBy])

    const handleChange = (e) => {
        setSelected(e.target.value)
    }
    
    const handleSortChange = (e) => {
        setSortBy(e.target.value)
    }
    
    const handleSearch = (e) =>{
        setSearchQuery(e.target.value);
    }

    return (
        <div className='w-full lg:h-20 bg-white text-gray-800 rounded-xl border border-slate-200 p-4 mb-6"'>
            <div className='flex flex-col sm:flex-row gap-4'>
                <div className='flex-1 relative'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" aria-hidden="true"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8">
                        </circle>
                    </svg>
                    <input type="search" placeholder="Search tasks..." value={searchQuery} onChange={handleSearch}
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                </div>
                <div className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="lucide lucide-funnel w-4 h-4 text-slate-400" aria-hidden="true">
                        <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                    </svg>
                    <select onChange={handleChange} value={selected} id="" className='p-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all cursor-pointer'>
                        <option className='text-sm' value="all">All Status</option>
                        <option className='text-sm' value="done">Complete</option>
                        <option className='text-sm' value="in-progress">In-Progress</option>
                        <option className='text-sm' value="todo">Pending</option>
                    </select>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="lucide lucide-arrow-up-down w-4 h-4 text-slate-400" aria-hidden="true">
                        <path d="m21 16-4 4-4-4"></path><path d="M17 20V4"></path><path d="m3 8 4-4 4 4"></path><path d="M7 4v16"></path>
                    </svg>
                    <select onChange={handleSortChange} value={sortBy} id="" className='p-2 bg-slate-50 border border-slate-200 rounded-lg max-w-40 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all cursor-pointer'>
                        <option className=' text-sm max-w-40 ' value="title-asc">Title A-Z</option>
                        <option className=' text-sm max-w-40 ' value="title-desc">Title Z-A</option>
                        <option className=' text-sm max-w-40 ' value="start-newest">Start Date (Newest)</option>
                        <option className=' text-sm max-w-40 ' value="start-oldest">Start Date (Oldest)</option>
                        <option className=' text-sm max-w-40 ' value="end-newest">End Date (Newest)</option>
                        <option className=' text-sm max-w-40 ' value="end-oldest">End Date (Oldest)</option>
                        {/* <option className=' text-sm max-w-40 ' value="status">Status</option> */}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Filter
