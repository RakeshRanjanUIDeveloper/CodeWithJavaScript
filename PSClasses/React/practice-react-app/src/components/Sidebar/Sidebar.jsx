import React, { useState } from "react";
import "./Sidebar.css";
import { Menu } from "lucide-react";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={handleToggleMenu}>
        <Menu />
      </button>
      {isOpen && (
        <nav className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Services</li>
            <li className="nav-item">Contact</li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;
