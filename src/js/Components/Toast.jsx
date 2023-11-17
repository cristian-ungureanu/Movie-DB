import React, { useEffect } from "react";
import classNames from "classnames";

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
    <div
      className={classNames("toast", { show: showToast })}
      role="alert"
      aria-live="polite"
    >
      <div className="toast-content">{message}</div>
    </div>
  );
};

export default Toast;
