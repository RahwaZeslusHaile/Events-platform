import React, { useEffect } from "react";
import "../componentStyle/Notification.css";

export default function Notification({ message, type = "info", onClose }) {
  useEffect(() => {
    if (!message) return;
    const t = setTimeout(() => onClose && onClose(), 3500);
    return () => clearTimeout(t);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className={`notification ${type}`} role="status" aria-live="polite">
      {message}
      <button className="notification-close" onClick={onClose} aria-label="Close">×</button>
    </div>
  );
}
