import { useParams, Link } from "react-router";
import { getProjectByTeamId } from "../utils/getFunc";
import { useEffect, useState } from "react";
import ProjectCard from "../components/projects/ProjectCard";
import TeamDetailHeader from "../components/teams/TeamDetailHeader";
import { FaArrowLeft } from "react-icons/fa";

export default function TeamDetails() {
    const { teamId } = useParams();
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(getProjectByTeamId(teamId))
    }, [teamId])

    return (
        <div className="text-black w-full flex items-start px-20 py-10 justify-start flex-col gap-4">
            <div>
                <Link to='/' className="flex items-center justify-center gap-2 bg-slate-100 text-gray-600 px-1 py-2 rounded-md hover:shadow-sm">
                    <FaArrowLeft /> <span>Back to home</span>
                </Link>
            </div>
            <div>
                <h1 className="text-4xl text-gray-800 font-bold">Team Deatil</h1>
            </div>
            <TeamDetailHeader id={teamId} />
            <div className="flex flex-col px-5 gap-2 w-full">
                <h4 className="font-bold text-2xl">Projects ({projects.length})</h4>
                <div className="flex flex-col gap-4 w-full">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} id={project.id} date={project.date} endDate={project.endDate} name={project.name} description={project.description} />
                    ))}
                </div>
            </div>
        </div>
    );
}