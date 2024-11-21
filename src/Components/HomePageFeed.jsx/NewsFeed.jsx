import { useState } from "react";
import FollowButton from "./FollowButton";

const NewsFeed = ({ news }) => {
  const [comments, setComments] = useState({});
  const [reactions, setReactions] = useState({});
  const [showComments, setShowComments] = useState({});

  const addComment = (id, comment) => {
    setComments((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), comment],
    }));
  };

  const addReaction = (id) => {
    setReactions((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const toggleComments = (id) => {
    setShowComments((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-center mb-8">News Feed</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {news?.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col"
          >
            <img
              className="w-full h-48 object-cover rounded-md mb-6"
              src={item.image}
              alt="news"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-4">{item.content}</p>

            <div className="flex justify-between items-center mb-4">
              <button
                onClick={() => addReaction(item.id)}
                className="flex items-center gap-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                👍 {reactions[item.id] || 0}
              </button>

              <button
                onClick={() => toggleComments(item.id)}
                className="flex items-center gap-2 text-sm bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
              >
                {showComments[item.id] ? "Hide Comments" : "Add Comment"}
              </button>
            </div>

            {/* Comments Dropdown */}
            {showComments[item.id] && (
              <div className="w-full text-left mt-4 space-y-2">
                <div className="text-sm font-medium text-gray-700 mb-2">Comments:</div>
                <div className="space-y-2">
                  {comments[item.id] && comments[item.id].map((comment, idx) => (
                    <p
                      key={idx}
                      className="text-sm text-gray-600 bg-gray-100 p-3 rounded-md"
                    >
                      {comment}
                    </p>
                  ))}
                  <div className="flex mt-2">
                    <input
                      type="text"
                      placeholder="Add your comment..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && e.target.value.trim() !== "") {
                          addComment(item.id, e.target.value);
                          e.target.value = '';
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
            <FollowButton />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
