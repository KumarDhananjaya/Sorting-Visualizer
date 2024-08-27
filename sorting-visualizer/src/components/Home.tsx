import React from 'react';
import { ButtonContainer, Button } from '../styles/StyledComponents';
import AnimatedBackground from '../styles/AnimatedBackground'; // Import the new component
import { Container } from '../styles/StyledComponents'; // Import the container component

interface HomeProps {
    onSelectAlgorithm: (algorithm: string) => void;
}

const Home: React.FC<HomeProps> = ({ onSelectAlgorithm }) => {
    return (
        <Container>
            <AnimatedBackground />
            <div style={{ position: 'relative', zIndex: 1 }}>
                <h1>Select a Sorting Algorithm</h1>
                <ButtonContainer>
                    <Button onClick={() => onSelectAlgorithm('bubbleSort')}>Bubble Sort</Button>
                    <Button onClick={() => onSelectAlgorithm('quickSort')}>Quick Sort</Button>
                    <Button onClick={() => onSelectAlgorithm('mergeSort')}>Merge Sort</Button>
                </ButtonContainer>
                <ButtonContainer>
                    <Button onClick={() => onSelectAlgorithm('selectionSort')}>Selection Sort</Button>
                    <Button onClick={() => onSelectAlgorithm('insertionSort')}>Insertion Sort</Button>
                    <Button onClick={() => onSelectAlgorithm('heapSort')}>Heap Sort</Button>
                </ButtonContainer>
                <ButtonContainer>
                    <Button onClick={() => onSelectAlgorithm('countingSort')}>Counting Sort</Button>
                    <Button onClick={() => onSelectAlgorithm('radixSort')}>Radix Sort</Button>
                </ButtonContainer>
            </div>
        </Container>
    );
};

export default Home;
