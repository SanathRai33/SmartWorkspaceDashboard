import { useParams, Link } from "react-router";
import { getProjectByTeamId } from "../utils/getFunc";
import { useEffect, useState, useMemo } from "react";
import ProjectCard from "../components/projects/ProjectCard";
import TeamDetailHeader from "../components/teams/TeamDetailHeader";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { FaArrowLeft, FaFilter } from "react-icons/fa";

export default function TeamDetails() {
    const { teamId } = useParams();
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState('all');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            try {
                setProjects(getProjectByTeamId(teamId));
            } catch (error) {
                console.error('Error loading projects:', error);
                setProjects([]);
            } finally {
                setLoading(false);
            }
        }, 800); 

        return () => clearTimeout(timer);
    }, [teamId]);

    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            const today = new Date();
            const endDate = new Date(project.endDate);
            const isActive = endDate > today;

            switch (filter) {
                case 'active':
                    return isActive;
                case 'completed':
                    return !isActive;
                default:
                    return true;
            }
        });
    }, [projects, filter]);

    const getProjectStatus = (project) => {
        const today = new Date();
        const endDate = new Date(project.endDate);
        return endDate > today ? 'active' : 'completed';
    };

    return (
        <div className="text-black w-full flex items-start py-2 lg:px-20 lg:py-10 justify-start flex-col gap-4">
            <div>
                <Link to='/' className="flex items-center justify-center gap-2 bg-slate-100 text-gray-600 px-1 py-2 rounded-md hover:shadow-sm">
                    <FaArrowLeft /> <span>Back to home</span>
                </Link>
            </div>
            <div>
                <h1 className="lg:text-4xl md:text-3xl text-2xl text-gray-800 font-bold">Team Detail</h1>
            </div>
            <TeamDetailHeader id={teamId} />

            {loading ? (
                <LoadingSpinner message="Loading team projects..." />
            ) : (
                <div className="flex flex-col px-5 gap-2 w-full">
                    <div className="flex items-center justify-between">
                        <h4 className="font-bold lg:text-2xl text-lg">Projects ({filteredProjects.length})</h4>

                        <div className="flex items-center gap-2">
                            <FaFilter className="text-gray-500" />
                            <select
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                className="px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="all">All Projects</option>
                                <option value="active">Active Projects</option>
                                <option value="completed">Completed Projects</option>
                            </select>
                        </div>
                    </div>

                    {filteredProjects.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-12 px-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                            <div className="text-gray-400 mb-4">
                                <FaFilter size={48} />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
                            <p className="text-gray-500 text-center">
                                {filter === 'all'
                                    ? "This team doesn't have any projects yet."
                                    : `No ${filter} projects found for this team.`
                                }
                            </p>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4 w-full">
                            {filteredProjects.map((project, index) => (
                                <div key={index} className="relative">
                                    <ProjectCard
                                        id={project.id}
                                        date={project.date}
                                        endDate={project.endDate}
                                        name={project.name}
                                        description={project.description}
                                        status={project.status}
                                    />
                                    <div className="absolute top-4 right-4">
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getProjectStatus(project) === 'completed'
                                            ? 'bg-gray-100 text-gray-800'
                                            : 'bg-green-100 text-green-800'
                                            }`}>
                                            {getProjectStatus(project) === 'completed' ? 'Completed' : 'Active'}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}