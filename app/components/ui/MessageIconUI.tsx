import React from "react";

interface Props {
  children: React.ReactNode;
  notificationCount: number;
}
const MessageIconUI = ({ children, notificationCount }: Props) => {
  return (
    <div className="relative">
      {notificationCount > 0 && (
        <span className="absolute z-[-1] text-white text-sm -top-2 -right-5 w-6 h-6  flex items-center justify-center bg-blue-400 rounded-full">
          {notificationCount}
        </span>
      )}
      {children}
    </div>
  );
};

export default MessageIconUI;
