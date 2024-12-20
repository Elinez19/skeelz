// components/ui/sidebar.tsx

import React from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, children, className }) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-30 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"} ${className}`}
      >
        <button
          className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
