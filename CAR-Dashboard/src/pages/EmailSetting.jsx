import React, { useState } from 'react';

const EmailSetting = () => {
  const [email, setEmail] = useState('user@example.com');
  const [newEmail, setNewEmail] = useState('');
  const [showCurrentEmail, setShowCurrentEmail] = useState(true);
  const [showChangeForm, setShowChangeForm] = useState(false);

  const handleShowChangeForm = () => {
    setShowCurrentEmail(false);
    setShowChangeForm(true);
  };

  const handleChangeEmail = (e) => {
    e.preventDefault();
    // Simulate email change logic
    alert(`Changing email from ${email} to ${newEmail}`);
    setEmail(newEmail);
    setNewEmail('');
    setShowCurrentEmail(true);
    setShowChangeForm(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Email Management</h2>
          
          {showCurrentEmail && (
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900">Current Email</label>
              <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">{email}</p>
              <button
                type="button"
                onClick={handleShowChangeForm}
                className="mt-2 text-sm text-blue-700 hover:underline focus:outline-none"
              >
                Change Email
              </button>
            </div>
          )}

          {showChangeForm && (
            <form onSubmit={handleChangeEmail}>
              <div className="mb-4">
                <label htmlFor="newEmail" className="block mb-2 text-sm font-medium text-gray-900">New Email</label>
                <input
                  id="newEmail"
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => {
                    setShowCurrentEmail(true);
                    setShowChangeForm(false);
                    setNewEmail('');
                  }}
                  className="text-sm text-gray-600 hover:underline focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Change Email
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailSetting;
