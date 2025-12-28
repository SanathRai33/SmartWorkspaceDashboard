import React from "react";
import { FaArrowRight, FaProjectDiagram, FaTasks } from "react-icons/fa";
import { Link } from "react-router";

const TeamCard = ({ id, title, description, status, tasks, projects }) => {

  const colorPalette = ["bg-pink-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500", "bg-indigo-500"];
  const teamInitials = title.split(' ').map(word => word.charAt(0)).join('').slice(0, 2).toUpperCase();

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center space-x-4">
          <div className={`${colorPalette[id % colorPalette.length]} w-12 h-12 rounded-xl flex items-center justify-center shadow-md`}>
            <span className="text-white font-bold text-lg">{teamInitials}</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          </div>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <FaArrowRight className="text-gray-500 hover:text-gray-700" />
        </button>
      </div>

      <div className="mb-5">
        <span className={`inline-block px-3 py-1.5 text-sm font-medium rounded-full ${status === "active" ? "bg-green-100 text-green-800" :
            status === "inactive" ? "bg-gray-100 text-gray-800" :
              "bg-blue-100 text-blue-800"
          }`}>
          {status}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-1">
        <div className="bg-gray-100 rounded-lg px-3 py-1 h-fit">
          <div className="flex items-center">
            <FaProjectDiagram className="mr-2 text-yellow-500" />
            <span className="text-sm font-medium text-gray-600">Projects</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{projects}</p>
        </div>

        <div className="bg-gray-100 rounded-lg px-3 py-1 h-fit">
          <div className="flex items-center">
            <FaTasks className="text-green-500 mr-2" />
            <span className="text-sm font-medium text-gray-600">Tasks</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{tasks}</p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <Link to={`/team/team-${id+1}`}>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-800 px-3 py-1.5 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer">
            View Team →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TeamCard;