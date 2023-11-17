import React, { useEffect } from "react";

const Toast = ({ message, showToast, hideToast }) => {
  useEffect(() => {
    if (showToast) {
      const timeout = setTimeout(() => {
        hideToast();
      }, 3000); // Display toast for 3 seconds

      return () => clearTimeout(timeout);
    }
  }, [showToast, hideToast]);

  return (
    <div className={`toast ${showToast ? "show" : ""}`}>
      <div className="toast-content">{message}</div>
    </div>
  );
};

export default Toast;
