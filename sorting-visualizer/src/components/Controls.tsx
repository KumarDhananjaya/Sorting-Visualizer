import React from 'react';
import { ButtonContainer, Button } from '../styles/StyledComponents'; // Import styled components

interface ControlsProps {
  onStartSorting: () => void;
  onResetArray: () => void;
}

const Controls: React.FC<ControlsProps> = ({ onStartSorting, onResetArray }) => {
  return (
    <ButtonContainer>
      <Button onClick={onResetArray}>Reset Array</Button>
      <Button onClick={onStartSorting}>Start Sorting</Button>
    </ButtonContainer>
  );
};

export default Controls;
