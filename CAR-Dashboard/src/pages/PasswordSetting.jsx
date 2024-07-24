
import React, { useState } from 'react';

const Passwordsetting = () => {
  const [currentPassword, setCurrentPassword] = useState('current_password'); // Simulated current password
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const handleShowCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const handleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleShowConfirmNewPassword = () => {
    setShowConfirmNewPassword(!showConfirmNewPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === confirmNewPassword) {
      // Simulate password change logic
      alert(`Changing password to: ${newPassword}`);
      // Reset form fields or show success message as needed
      setNewPassword('');
      setConfirmNewPassword('');
    } else {
      alert('New password and confirmation do not match');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Password Management</h2>

          {/* Current Password Field */}
          <div className="mb-4">
            <label htmlFor="currentPassword" className="block mb-2 text-sm font-medium text-gray-900">
              Current Password
            </label>
            <div className="relative">
              <input
                id="currentPassword"
                type={showCurrentPassword ? 'text' : 'password'}
                value={currentPassword}
                readOnly
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <button
                type="button"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-blue-500 focus:outline-none"
                onClick={handleShowCurrentPassword}
              >
                {showCurrentPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {/* New Password Field */}
          <div className="mb-4">
            <label htmlFor="newPassword" className="block mb-2 text-sm font-medium text-gray-900">
              New Password
            </label>
            <div className="relative">
              <input
                id="newPassword"
                type={showNewPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
              <button
                type="button"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-blue-500 focus:outline-none"
                onClick={handleShowNewPassword}
              >
                {showNewPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {/* Confirm New Password Field */}
          <div className="mb-6">
            <label htmlFor="confirmNewPassword" className="block mb-2 text-sm font-medium text-gray-900">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                id="confirmNewPassword"
                type={showConfirmNewPassword ? 'text' : 'password'}
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
              <button
                type="button"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-blue-500 focus:outline-none"
                onClick={handleShowConfirmNewPassword}
              >
                {showConfirmNewPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-2.5"
          >
            Change Password
          </button>
        </div>
      </div>
      {/* ------------------------ */}
      <div>
    
     </div>
      {/* --------------------------- */}
    </div>
  );
};

export default Passwordsetting;
