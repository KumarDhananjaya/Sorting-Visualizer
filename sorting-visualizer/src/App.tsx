import React, { useState } from 'react';
import ArrayDisplay from './components/ArrayDisplay';
import Controls from './components/Controls';
import SpeedControl from './components/SpeedControl';
import Home from './components/Home';
import { bubbleSort } from './sortingAlgorithms/bubbleSort';
import { quickSort } from './sortingAlgorithms/quickSort';
import { mergeSort } from './sortingAlgorithms/mergeSort';

const App: React.FC = () => {
  const [array, setArray] = useState<number[]>(generateRandomArray(50));
  const [speed, setSpeed] = useState<number>(100);
  const [algorithm, setAlgorithm] = useState<string | null>(null);

  const startSorting = async () => {
    if (algorithm === 'bubbleSort') {
      await bubbleSort(array, setArray, speed);
    } else if (algorithm === 'quickSort') {
      await quickSort(array, setArray, speed);
    } else if (algorithm === 'mergeSort') {
      await mergeSort(array, setArray, speed);
    }
  };

  const resetArray = () => {
    setArray(generateRandomArray(50));
  };

  return (
    <div>
      {algorithm ? (
        <>
          <SpeedControl setSpeed={setSpeed} />
          <Controls onStartSorting={startSorting} onResetArray={resetArray} />
          <ArrayDisplay array={array} />
        </>
      ) : (
        <Home onSelectAlgorithm={setAlgorithm} />
      )}
    </div>
  );
};

const generateRandomArray = (size: number): number[] => {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 500));
};

export default App;
