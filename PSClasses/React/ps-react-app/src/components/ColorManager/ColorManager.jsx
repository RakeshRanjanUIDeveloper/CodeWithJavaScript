import React, { useState } from 'react';
import './ColorManager.css';

const initialData = [
  { id: 1, color: 'green' },
  { id: 2, color: 'red' },
  { id: 3, color: 'magenta' },
  { id: 4, color: 'green' },
  { id: 5, color: 'yellow' },
];

const ColorManager = () => {
  const [data, setData] = useState(initialData);
  const [hiddenGreenIds, setHiddenGreenIds] = useState([]);
  const [hideAllGreen, setHideAllGreen] = useState(false);
  const [nextId, setNextId] = useState(initialData.length + 1);

  const handleReset = () => {
    setData(initialData);
    setHiddenGreenIds([]);
    setHideAllGreen(false);
    setNextId(initialData.length + 1);
  };

  const handleGreenToggle = (id) => {
    setHiddenGreenIds((prev) =>
      prev.includes(id) ? prev.filter((gid) => gid !== id) : [...prev, id]
    );
  };

  const handleAllGreenToggle = () => {
    setHideAllGreen((prev) => !prev);
  };

  const handleAddRed = () => {
    const newItem = { id: nextId, color: 'red' };
    setData((prev) => [...prev, newItem]);
    setNextId((id) => id + 1);
  };

  const isVisible = (item) => {
    if (item.color === 'green') {
      if (hideAllGreen) return false;
      if (hiddenGreenIds.includes(item.id)) return false;
    }
    return true;
  };

  return (
    <div className="color-manager">
      <button onClick={handleReset}>Reset</button>

      <div className="controls">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={hideAllGreen}
            onChange={handleAllGreenToggle}
          />
          Hide All Green
        </label>
      </div>

      <div className="color-grid">
        {data.map((item) => (
          <div key={item.id}>
            {item.color === 'green' && !hideAllGreen && (
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={hiddenGreenIds.includes(item.id)}
                  onChange={() => handleGreenToggle(item.id)}
                />
                Hide green #{item.id}
              </label>
            )}
            {isVisible(item) && (
              <div
                className={`color-box ${item.color}`}
                onClick={item.color === 'red' ? handleAddRed : undefined}
              >
                {item.color}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorManager;
