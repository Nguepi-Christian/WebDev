import React, { useState, useEffect } from 'react';

const NotificationComponent = ({ targetDate }) => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      if (currentDate >= targetDate) {
        setShowNotification(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  return (
    <div>
      {showNotification && <p>Notification: L'heure est atteinte!</p>}
    </div>
  );
};

export default NotificationComponent;