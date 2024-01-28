// Sidebar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ item, isTopLevel }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (isTopLevel) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <li>
      <div onClick={handleToggle}>
        {item.children ? <span>{isOpen ? '[-] ' : '[+] '}</span> : null}
        <Link to={item.path}>{item.name}</Link>
      </div>
      {isOpen && item.children && (
        <ul className="list-unstyled pl-3">
          {item.children.map((child) => (
            <SidebarItem key={child.path} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

const Sidebar = ({ pages }) => {
  return (
    <nav id="sidebar" className="bg-light">
      <div className="p-4">
        <h5>Sidebar</h5>
        <ul className="list-unstyled components">
          {pages.map((page) => (
            <SidebarItem key={page.path} item={page} isTopLevel={true} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
