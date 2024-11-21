
import React, { useState } from "react";

const FollowButton = ({ userId }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => setIsFollowing(!isFollowing);

  return (
    <button
      onClick={toggleFollow}
      className={`px-4 py-2 rounded ${
        isFollowing ? "bg-red-500" : "bg-blue-500"
      } text-white`}
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </button>
  );
};

export default FollowButton;
