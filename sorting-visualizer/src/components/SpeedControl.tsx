import React from 'react';

interface SpeedControlProps {
  setSpeed: (speed: number) => void;
}

const SpeedControl: React.FC<SpeedControlProps> = ({ setSpeed }) => {
  return (
    <input
      type="range"
      min="10"
      max="500"
      step="10"
      onChange={(e) => setSpeed(Number(e.target.value))}
    />
  );
};

export default SpeedControl;
