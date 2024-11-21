import { useState } from "react";

const Settings = () => {
  // States for the settings
  const [profile, setProfile] = useState({ name: "John Doe", email: "john.doe@example.com", role: "student" });
  const [notificationPreferences, setNotificationPreferences] = useState(true);
  const [isProfilePrivate, setIsProfilePrivate] = useState(false);

  // Handle profile input change
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // Toggle notification preferences
  const handleNotificationToggle = () => {
    setNotificationPreferences((prev) => !prev);
  };

  // Toggle privacy settings
  const handlePrivacyToggle = () => {
    setIsProfilePrivate((prev) => !prev);
  };

  // Save changes to settings (can integrate with API later)
  const saveSettings = () => {
    alert("Settings Saved!");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10 lg:p-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">Settings</h1>

        {/* User Settings Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">User Settings</h2>

          {/* Profile Customization */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Profile Customization</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-600">Name</label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleProfileChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleProfileChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-600">Role</label>
                <select
                  name="role"
                  value={profile.role}
                  onChange={handleProfileChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="student">Student</option>
                  <option value="tutor">Tutor</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Notification Preferences</h3>
            <div className="flex items-center">
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
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Privacy Settings</h3>
            <div className="flex items-center">
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
            onClick={saveSettings}
            className="bg-blue-500 text-white py-3 w-full rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            Save Settings
          </button>
        </div>

        {/* Onboarding Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Onboarding Section</h2>

          {/* Getting Started Guide */}
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Getting Started Guide</h3>
            <ul className="list-disc pl-6 text-gray-600 mt-2">
              <li>Complete your profile setup</li>
              <li>Browse available resources</li>
              <li>Participate in discussions and activities</li>
            </ul>
          </div>

          {/* FAQs */}
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Frequently Asked Questions</h3>
            <ul className="text-gray-600 mt-2">
              <li className="mb-2">Q: How do I reset my password?</li>
              <li>A: You can reset your password from the account settings page.</li>
              <li className="mb-2">Q: How can I join a course?</li>
              <li>A: Browse the courses section and enroll in any course of your choice.</li>
            </ul>
          </div>

          {/* Tutorials */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800">Tutorials</h3>
            <p className="text-gray-600 mt-2">
              Watch these tutorials to get started:
              <ul className="list-disc pl-6 text-gray-600">
                <li>
                  <a href="/#" className="text-blue-500">How to Create Your First Course</a>
                </li>
                <li>
                  <a href="/#" className="text-blue-500">How to Navigate the Dashboard</a>
                </li>
                <li>
                  <a href="/#" className="text-blue-500">How to Join Discussions</a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
