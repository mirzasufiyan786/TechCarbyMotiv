import React from 'react';

const SettingPage2 = () => {
  // Static user information (replace with actual data)
  const user = {
    name: 'MIRZA SUFIYAN AHMAD',
    email: 'mirzasufiyan@example.com',
    location: 'SKP, Punjab'
  };

  // Static car information (replace with actual data)
  const cars = [
    {
      make: 'Toyota',
      model: 'Camry',
      year: 2020,
      color: 'Silver'
    },
    {
      make: 'Honda',
      model: 'Civic',
      year: 2018,
      color: 'Red'
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* User Profile Section */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">User Profile</h2>
            <div className="mb-4">
              <strong>Name:</strong> {user.name}
            </div>
            <div className="mb-4">
              <strong>Email:</strong> {user.email}
            </div>
            <div className="mb-4">
              <strong>Location:</strong> {user.location}
            </div>
          </div>
        </div>

        {/* Cars Section */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Cars</h2>
            {cars.map((car, index) => (
              <div key={index} className="mb-4">
                <div className="mb-2">
                  <strong>Make:</strong> {car.make}
                </div>
                <div className="mb-2">
                  <strong>Model:</strong> {car.model}
                </div>
                <div className="mb-2">
                  <strong>Year:</strong> {car.year}
                </div>
                <div className="mb-2">
                  <strong>Color:</strong> {car.color}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingPage2;
