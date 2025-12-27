import React from "react";
import { FaArrowRight, FaFolder, FaUser } from "react-icons/fa";

const ProjectCard = ({ id, title, description, status, members, tasks }) => {

    const colorPalette = ["bg-pink-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500"];

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full h-62 hover:shadow-lg">
      <div className="flex items-start justify-between mb-4">
        <h1 className={`text-xl font-bold text-white mb-2 ${colorPalette[id % colorPalette.length]} w-10 h-10 flex items-center justify-center rounded-md`}>
        {title.charAt(0).toUpperCase() + title.slice(1, 2).toUpperCase()}
      </h1>
      <span className="text-sm text-gray-500 ">
        <FaArrowRight className="cursor-pointer" />
      </span>
      </div>
      <h2 className="text-lg font-semibold text-black">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <span
        className={`inline-block px-2 py-1 text-xs rounded-full mt-2 ${
          status === "active"
            ? "bg-green-100 text-green-800"
            : "bg-yellow-100 text-yellow-800"
        }`}
      >
        {status}
      </span>
      <div className="mt-4 flex items-end justify-between">
        <p className="text-gray-600 mt-4">
          <FaUser className="inline-block mr-2 text-gray-500" />
          <span>Members: {members}</span>
        </p>
        <p className="text-gray-600">
            <FaFolder className="inline-block mr-2 text-yellow-600" />
          <span>Tasks: {tasks}</span>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
