import React from "react";

const UserTag = ({ role }) => {
  const tagColors = {
    admin: "bg-red-500",
    tutor: "bg-green-500",
    student: "bg-blue-500",
  };

  return (
    <span className={`text-white px-2 py-1 rounded ${tagColors[role]}`}>
      {role.toUpperCase()}
    </span>
  );
};

export default UserTag;
