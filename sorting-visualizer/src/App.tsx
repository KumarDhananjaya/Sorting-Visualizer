import React, { useState } from "react";
import ArrayDisplay from "./components/ArrayDisplay";
import Controls from "./components/Controls";
import SpeedControl from "./components/SpeedControl";
import Home from "./components/Home";
import { bubbleSort } from "./sortingAlgorithms/bubbleSort";
import { quickSort } from "./sortingAlgorithms/quickSort";
import { mergeSort } from "./sortingAlgorithms/mergeSort";
import { selectionSort } from "./sortingAlgorithms/selectionSort"; // Import selectionSort
import { insertionSort } from "./sortingAlgorithms/insertionSort"; // Import insertionSort
import { heapSort } from "./sortingAlgorithms/heapSort"; // Import heapSort
import { countingSort } from "./sortingAlgorithms/countingSort"; // Import countingSort
import { radixSort } from "./sortingAlgorithms/radixSort"; // Import radixSort
import { algorithmInfo, SortingAlgorithm } from "./data/algorithmInfo"; // Import type and data
import {
  AlgorithmInfoContainer,
  AlgorithmHeading,
  AlgorithmSubHeading,
  AlgorithmParagraph,
  CodeBlock,
} from "./styles/StyledComponents"; // Import styled components

const App: React.FC = () => {
  const [array, setArray] = useState<number[]>(generateRandomArray(50));
  const [speed, setSpeed] = useState<number>(100);
  const [algorithm, setAlgorithm] = useState<SortingAlgorithm | null>(null);

  const startSorting = async () => {
    if (algorithm === "bubbleSort") {
      await bubbleSort(array, setArray, speed);
    } else if (algorithm === "quickSort") {
      await quickSort(array, setArray, speed);
    } else if (algorithm === "mergeSort") {
      await mergeSort(array, setArray, speed);
    } else if (algorithm === "selectionSort") {
      await selectionSort(array, setArray, speed); // Handle selectionSort
    } else if (algorithm === "insertionSort") {
      await insertionSort(array, setArray, speed); // Handle insertionSort
    } else if (algorithm === "heapSort") {
      await heapSort(array, setArray, speed); // Handle heapSort
    } else if (algorithm === "countingSort") {
      await countingSort(array, setArray, speed); // Handle countingSort
    } else if (algorithm === "radixSort") {
      await radixSort(array, setArray, speed); // Handle radixSort
    }
  };

  const resetArray = () => {
    setArray(generateRandomArray(50));
  };

  return (
    <div>     
      {algorithm ? (
        <>
          <div style={{ textAlign: "center" }}>
            <SpeedControl setSpeed={setSpeed} />
            <Controls onStartSorting={startSorting} onResetArray={resetArray} />
            <ArrayDisplay array={array} />
          </div>

          {/* Animated Algorithm Info Section */}
          <AlgorithmInfoContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AlgorithmHeading>{algorithmInfo[algorithm].name}</AlgorithmHeading>
            <AlgorithmParagraph>
              {algorithmInfo[algorithm].description}
            </AlgorithmParagraph>
            <AlgorithmSubHeading>Time Complexity</AlgorithmSubHeading>
            <AlgorithmParagraph>
              Best: {algorithmInfo[algorithm].complexity.best}
            </AlgorithmParagraph>
            <AlgorithmParagraph>
              Average: {algorithmInfo[algorithm].complexity.average}
            </AlgorithmParagraph>
            <AlgorithmParagraph>
              Worst: {algorithmInfo[algorithm].complexity.worst}
            </AlgorithmParagraph>
            <AlgorithmSubHeading>Space Complexity</AlgorithmSubHeading>
            <AlgorithmParagraph>
              {algorithmInfo[algorithm].spaceComplexity}
            </AlgorithmParagraph>
            <AlgorithmSubHeading>Code Implementation</AlgorithmSubHeading>
            <CodeBlock>
              <code>{algorithmInfo[algorithm].code}</code>
            </CodeBlock>
          </AlgorithmInfoContainer>
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
