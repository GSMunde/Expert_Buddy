
import { useState } from "react";


const ResourceList = ({ resources }) => {
  const [search, setSearch] = useState("");
  const [bookmarkedResources, setBookmarkedResources] = useState([]);

  // Filter resources based on search input
  const filteredResources = resources.filter((res) =>
    res.title.toLowerCase().includes(search.toLowerCase())
  );

  // Handle bookmarking
  const toggleBookmark = (resourceId) => {
    setBookmarkedResources((prev) => {
      if (prev.includes(resourceId)) {
        return prev.filter((id) => id !== resourceId);
      }
      return [...prev, resourceId];
    });
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search resources..."
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 w-full max-w-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Filtered Resources List */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {filteredResources.map((resource) => (
          <div
            key={resource.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img className="w-full h-48 object-cover" src={resource.image} alt={resource.title} />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{resource.title}</h2>
              <p className="text-gray-600">
                <span className="font-bold">Type:</span> {resource.type}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-bold">Category:</span> {resource.category}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-bold">Description:</span> {resource.description}
              </p>
              <div className="mb-4">
                <button
                  onClick={() => toggleBookmark(resource.id)}
                  className={`${
                    bookmarkedResources.includes(resource.id) ? "bg-yellow-500" : "bg-gray-300"
                  } text-white px-4 py-2 rounded-lg w-full`}
                >
                  {bookmarkedResources.includes(resource.id) ? "Bookmarked" : "Bookmark"}
                </button>
              </div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600 transition"
              >
                Preview
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg w-full mt-2 hover:bg-green-600 transition"
              >
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceList;
