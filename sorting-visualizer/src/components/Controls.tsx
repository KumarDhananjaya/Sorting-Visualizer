import React from 'react';

interface ControlsProps {
  onStartSorting: () => void;
  onResetArray: () => void;
}

const Controls: React.FC<ControlsProps> = ({ onStartSorting, onResetArray }) => {
  return (
    <div>
      <button onClick={onResetArray}>Reset Array</button>
      <button onClick={onStartSorting}>Start Sorting</button>
    </div>
  );
};

export default Controls;
