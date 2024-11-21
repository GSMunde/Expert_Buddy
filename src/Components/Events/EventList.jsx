import { useState } from "react";
// import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const EventList = ({ events }) => {
  const [search, setSearch] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [rsvpCounts, setRsvpCounts] = useState({});
  const [filter, setFilter] = useState({ location: "All", category: "All" });
  const eventsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  // Filter events based on search query and filters
  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(search.toLowerCase());
    const matchesLocation = filter.location === "All" || event.location === filter.location;
    const matchesCategory = filter.category === "All" || event.category === filter.category;

    return matchesSearch && matchesLocation && matchesCategory;
  });

  // Paginate filtered events
  const startIndex = (currentPage - 1) * eventsPerPage;
  const paginatedEvents = filteredEvents.slice(startIndex, startIndex + eventsPerPage);
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  const handleRsvp = (eventId) => {
    setRsvpCounts((prev) => ({
      ...prev,
      [eventId]: (prev[eventId] || 0) + 1,
    }));
  };

  return (
    <div className="bg-gray-50 min-h-screen p-5">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Upcoming Events</h1>

      {/* Search Bar and Filters */}
      <div className="flex flex-col sm:flex-row justify-between mb-6">
        <input
          type="text"
          placeholder="Search events..."
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 w-full max-w-md mb-4 sm:mb-0"
        />

        {/* Filters */}
        <div className="flex gap-4">
          <select
            className="border p-2 rounded-lg"
            value={filter.location}
            onChange={(e) => setFilter({ ...filter, location: e.target.value })}
          >
            <option value="All">All Locations</option>
            <option value="Virtual">Virtual</option>
            <option value="Physical">Physical</option>
          </select>

          <select
            className="border p-2 rounded-lg"
            value={filter.category}
            onChange={(e) => setFilter({ ...filter, category: e.target.value })}
          >
            <option value="All">All Categories</option>
            <option value="Tech">Tech</option>
            <option value="Business">Business</option>
            <option value="Health">Health</option>
          </select>
        </div>
      </div>


      {/* Grid of Events */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {paginatedEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              className="w-full h-48 object-cover"
              src={event.image}
              alt={event.title}
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h2>
              <p className="text-gray-600">
                <span className="font-bold">Date and Time:</span> {new Date(event.date).toLocaleString()}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Location:</span> {event.location}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-bold">Capacity:</span> {event.capacity} people
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-bold">Prerequisites:</span> {event.prerequisites || "None"}
              </p>
              <button
                onClick={() => setSelectedEvent(event)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Learn More
              </button>
              <button
                onClick={() => handleRsvp(event.id)}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300 mt-2"
              >
                RSVP ({rsvpCounts[event.id] || 0})
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 gap-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg ${currentPage === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"}`}
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg ${currentPage === totalPages ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"}`}
        >
          Next
        </button>
      </div>

      {/* Modal Dialog for Event Details */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 transform scale-95 animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4">{selectedEvent.title}</h2>
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-gray-700">
              <span className="font-bold">Date:</span> {new Date(selectedEvent.date).toLocaleString()}
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Location:</span> {selectedEvent.location}
            </p>
            <p className="text-gray-700 mt-4">{selectedEvent.description}</p>
            <p className="text-gray-700 mt-4">
              <span className="font-bold">Speakers:</span> {selectedEvent.speakers.join(", ")}
            </p>
            <p className="text-gray-700 mt-4">
              <span className="font-bold">Capacity:</span> {selectedEvent.capacity}
            </p>
            <p className="text-gray-700 mt-4">
              <span className="font-bold">Prerequisites:</span> {selectedEvent.prerequisites || "None"}
            </p>
            <div className="flex justify-end mt-6">
              <button
                onClick={() => setSelectedEvent(null)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventList;
