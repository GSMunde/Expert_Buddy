import { useState } from "react";
import { useAuth } from "../Context/AuthContext";

const Profile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(user);
  const [notificationPreferences, setNotificationPreferences] = useState(true);
  const [isProfilePrivate, setIsProfilePrivate] = useState(false);

  // Handle changes in profile fields
  const handleEdit = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  // Toggle for notification preferences
  const handleNotificationToggle = () => {
    setNotificationPreferences((prev) => !prev);
  };

  // Toggle for privacy settings
  const handlePrivacyToggle = () => {
    setIsProfilePrivate((prev) => !prev);
  };

  // Save profile settings
  const saveProfile = () => {
    alert("Profile Saved!");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Profile Management
        </h1>

        {/* Profile Customization */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Profile Customization</h2>
          <div className="mb-4">
            <label className="block text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              value={profile?.name || ""}
              onChange={handleEdit}
              className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={profile?.email || ""}
              onChange={handleEdit}
              className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-600">Role</label>
            <input
              type="text"
              name="role"
              value={profile?.role || ""}
              onChange={handleEdit}
              className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Notification Preferences</h2>
          <div className="flex items-center mb-4">
            <label className="mr-3 text-gray-600">Enable Notifications</label>
            <input
              type="checkbox"
              checked={notificationPreferences}
              onChange={handleNotificationToggle}
              className="w-6 h-6 rounded-full bg-gray-300 focus:outline-none"
            />
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Privacy Settings</h2>
          <div className="flex items-center mb-4">
            <label className="mr-3 text-gray-600">Make Profile Private</label>
            <input
              type="checkbox"
              checked={isProfilePrivate}
              onChange={handlePrivacyToggle}
              className="w-6 h-6 rounded-full bg-gray-300 focus:outline-none"
            />
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={saveProfile}
          className="bg-blue-500 text-white p-3 w-full rounded-lg hover:bg-blue-600 transition"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Profile;
