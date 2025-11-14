import React, { createContext, useContext, useState, useCallback } from "react";
import Notification from "./Notification.jsx";

const NotificationContext = createContext(null);

export function NotificationProvider({ children }) {
  const [notification, setNotification] = useState(null);

  const notify = useCallback((messageOrObj, type = "info") => {
    if (!messageOrObj) return;
    const payload =
      typeof messageOrObj === "string"
        ? { message: messageOrObj, type }
        : { message: messageOrObj.message, type: messageOrObj.type || type };
    setNotification(payload);
  }, []);

  const onClose = useCallback(() => setNotification(null), []);

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      <Notification
        message={notification ? notification.message : null}
        type={notification ? notification.type : "info"}
        onClose={onClose}
      />
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  const ctx = useContext(NotificationContext);
  if (!ctx) throw new Error("useNotification must be used within a NotificationProvider");
  return ctx.notify;
}

export default NotificationProvider;
