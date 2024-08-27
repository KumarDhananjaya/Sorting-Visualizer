import React from 'react';
import { ButtonContainer, Button } from '../styles/StyledComponents';

interface HomeProps {
  onSelectAlgorithm: (algorithm: string) => void;
}

const Home: React.FC<HomeProps> = ({ onSelectAlgorithm }) => {
  return (
    <div>
      <h1>Select a Sorting Algorithm</h1>
      <ButtonContainer>
        <Button onClick={() => onSelectAlgorithm('bubbleSort')}>Bubble Sort</Button>
        <Button onClick={() => onSelectAlgorithm('quickSort')}>Quick Sort</Button>
        <Button onClick={() => onSelectAlgorithm('mergeSort')}>Merge Sort</Button>
      </ButtonContainer>
    </div>
  );
};

export default Home;
