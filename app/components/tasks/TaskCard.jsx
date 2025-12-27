import React from "react";

const DocumentationCard = () => {
  const docsData = [
    {
      title: "Write API documentation",
      description: "Complete OpenAPI specs for all endpoints",
      category: "documentation",
      author: "Jordan",
      date: "Jan 15"
    },
    {
      title: "Implement user authentication",
      description: "Add JWT-based auth with refresh tokens",
      category: "backend",
      author: "Alex",
      date: "Jan 14"
    },
    {
      title: "Design dashboard UI",
      description: "Create responsive layout with dark mode",
      category: "frontend",
      author: "Sam",
      date: "Jan 13"
    },
    {
      title: "Setup CI/CD pipeline",
      description: "Configure GitHub Actions for deployment",
      category: "devops",
      author: "Taylor",
      date: "Jan 12"
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      documentation: "bg-blue-100 text-blue-800",
      backend: "bg-purple-100 text-purple-800",
      frontend: "bg-green-100 text-green-800",
      devops: "bg-orange-100 text-orange-800"
    };
    return  "bg-gray-100 text-gray-800";
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {docsData.map((doc, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 p-4 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${getCategoryColor(doc.category)}`}>
                {doc.category}
              </span>
              <span className="text-xs text-gray-500">{doc.date}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{doc.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{doc.description}</p>
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-medium text-gray-700">
                  {doc.author.charAt(0)}
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700">{doc.author}</span>
              </div>
              <button className="text-sm text-blue-600 font-medium hover:text-blue-800">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentationCard;