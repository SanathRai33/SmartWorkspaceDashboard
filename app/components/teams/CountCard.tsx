import React from 'react'

const CountCard = ({ title, count, style, icon: Icon }: any) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-64 hover:shadow-lg">
      <div className={`mb-4 w-10 h-10 flex items-center justify-center rounded-md text-4xl ${style}`}>
        <Icon />
      </div>
      <h2 className="text-lg font-semibold text-black">{title}</h2>
      <p className="text-2xl font-bold text-gray-600">{count}</p>
    </div>
  )
}

export default CountCard