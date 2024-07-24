import React, { useState } from 'react';

const NotificatioSetting = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New Car Arrivals',
      description: 'Check out our latest models in the showroom!',
      timestamp: '2024-07-17T09:30:00Z',
    },
    {
      id: 2,
      title: 'Service Update',
      description: 'Scheduled maintenance on July 20th, 2024.',
      timestamp: '2024-07-15T14:45:00Z',
    },
    {
      id: 3,
      title: 'Special Offers',
      description: "Don't miss our summer sale starting next week!",
      timestamp: '2024-07-10T10:00:00Z',
    },
  ]);

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl text-secondaryR font-bold mb-4">Notifications</h2>
          
          {notifications.map((notification) => (
            <div key={notification.id} className="mb-4 p-4 bg-gray-50 rounded-lg relative">
              <div className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></div>
              <h3 className="text-lg font-medium text-gray-900">{notification.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{notification.description}</p>
              <p className="text-xs text-gray-400">{new Date(notification.timestamp).toLocaleString()}</p>
            </div>
          ))}

          {notifications.length === 0 && (
            <p className="text-sm text-gray-500">No notifications at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificatioSetting;

 
