export const algorithmInfo = {
    bubbleSort: {
      name: "Bubble Sort",
      description: "Bubble Sort is a simple comparison-based algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
      complexity: {
        best: "O(n)",
        average: "O(n^2)",
        worst: "O(n^2)"
      },
      spaceComplexity: "O(1)",
      code: `
  export const bubbleSort = async (
    array: number[],
    setArray: React.Dispatch<React.SetStateAction<number[]>>,
    speed: number
  ): Promise<void> => {
    const arr = [...array];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, speed));
        }
      }
    }
  };
      `,
    },
    quickSort: {
      name: "Quick Sort",
      description: "Quick Sort is a divide-and-conquer algorithm. It picks a pivot and partitions the array around the pivot such that elements smaller than the pivot are on the left, and elements greater are on the right. It recursively sorts the sub-arrays.",
      complexity: {
        best: "O(n log n)",
        average: "O(n log n)",
        worst: "O(n^2)"
      },
      spaceComplexity: "O(log n)",
      code: `
  export const quickSort = async (
    array: number[],
    setArray: React.Dispatch<React.SetStateAction<number[]>>,
    speed: number
  ): Promise<void> => {
    const arr = [...array];
    const partition = async (low: number, high: number): Promise<number> => {
      const pivot = arr[high];
      let i = low - 1;
      for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
          setArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, speed));
        }
      }
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      setArray([...arr]);
      return i + 1;
    };
    const quickSortHelper = async (low: number, high: number) => {
      if (low < high) {
        const pi = await partition(low, high);
        await quickSortHelper(low, pi - 1);
        await quickSortHelper(pi + 1, high);
      }
    };
    await quickSortHelper(0, arr.length - 1);
  };
      `,
    },
    mergeSort: {
      name: "Merge Sort",
      description: "Merge Sort is a divide-and-conquer algorithm. It recursively splits the array in half and merges them back together in sorted order. It guarantees O(n log n) performance for all cases.",
      complexity: {
        best: "O(n log n)",
        average: "O(n log n)",
        worst: "O(n log n)"
      },
      spaceComplexity: "O(n)",
      code: `
  export const mergeSort = async (
    array: number[],
    setArray: React.Dispatch<React.SetStateAction<number[]>>,
    speed: number
  ): Promise<void> => {
    const arr = [...array];
    const merge = async (left: number[], right: number[]): Promise<number[]> => {
      let sortedArray: number[] = [];
      let leftIndex = 0;
      let rightIndex = 0;
      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          sortedArray.push(left[leftIndex]);
          leftIndex++;
        } else {
          sortedArray.push(right[rightIndex]);
          rightIndex++;
        }
        setArray([...arr.slice(0, arr.length - sortedArray.length), ...sortedArray]);
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
      sortedArray = [...sortedArray, ...left.slice(leftIndex), ...right.slice(rightIndex)];
      return sortedArray;
    };
    const mergeSortHelper = async (arrayToSort: number[]): Promise<number[]> => {
      if (arrayToSort.length <= 1) return arrayToSort;
      const middleIndex = Math.floor(arrayToSort.length / 2);
      const left = await mergeSortHelper(arrayToSort.slice(0, middleIndex));
      const right = await mergeSortHelper(arrayToSort.slice(middleIndex));
      return await merge(left, right);
    };
    const sortedArray = await mergeSortHelper(arr);
    setArray([...sortedArray]);
  };
      `,
    }
  };
  