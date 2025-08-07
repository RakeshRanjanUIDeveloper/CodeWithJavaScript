import React, { useState } from 'react';
import './SapAgentDropdown.css';
import DropdownArrow from '../../../assets/icons/dropdown-arrow.png';

const SapAgentDropdown = ({ options = [], onSelect, placeholder = '', label = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onSelect(option);
  };

  const renderFirstOption = () => {
    if (options.length > 0) {
      const firstOption = options[0];
      if (firstOption.includes('Clients') || firstOption.includes('Contract')) {
        const parts = firstOption.split(' ');
        if (parts.length > 1) {
          return (
            <div className="first-option-wrapper">
              <span className="first-option-text">{parts[0]}</span>
              <span className="client-count">{parts[1].replace(/[()]/g, '')}</span>
            </div>
          );
        }
      }
      return firstOption;
    }
    return null;
  };

  return (
    <div className="custom-dropdown">
      {label && <label className="dropdown-label">{label}</label>}
      <div className={`dropdown-header ${selected ? 'selected' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <span>{selected || placeholder}</span>
        <img
          src={DropdownArrow}
          className={`arrow-icon ${isOpen ? 'rotate' : ''}`}
          alt="dropdown arrow"
        />
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option, index) => (
            <li
              key={option}
              onClick={() => {
                if (index !== 0) handleSelect(option);
              }}
              className={`dropdown-item ${index === 0 ? 'dropdown-header-item' : ''}`}
            >
              {index === 0 ? renderFirstOption() : option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SapAgentDropdown;