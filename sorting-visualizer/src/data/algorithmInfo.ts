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
    },
    selectionSort: {
      name: "Selection Sort",
      description: "Selection Sort is a comparison-based algorithm. It repeatedly selects the minimum element from the unsorted portion of the list and moves it to the beginning.",
      complexity: {
        best: "O(n^2)",
        average: "O(n^2)",
        worst: "O(n^2)"
      },
      spaceComplexity: "O(1)",
      code: `
  export const selectionSort = async (
    array: number[],
    setArray: React.Dispatch<React.SetStateAction<number[]>>,
    speed: number
  ): Promise<void> => {
    const arr = [...array];
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
    }
  };
      `,
    },
    insertionSort: {
      name: "Insertion Sort",
      description: "Insertion Sort builds the final sorted array one item at a time by repeatedly picking the next item and inserting it into the correct position within the sorted portion.",
      complexity: {
        best: "O(n)",
        average: "O(n^2)",
        worst: "O(n^2)"
      },
      spaceComplexity: "O(1)",
      code: `
  export const insertionSort = async (
    array: number[],
    setArray: React.Dispatch<React.SetStateAction<number[]>>,
    speed: number
  ): Promise<void> => {
    const arr = [...array];
    for (let i = 1; i < arr.length; i++) {
      const key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
      arr[j + 1] = key;
      setArray([...arr]);
    }
  };
      `,
    },
    heapSort: {
      name: "Heap Sort",
      description: "Heap Sort converts the array into a heap data structure, repeatedly extracts the maximum element, and reconstructs the heap until the array is sorted.",
      complexity: {
        best: "O(n log n)",
        average: "O(n log n)",
        worst: "O(n log n)"
      },
      spaceComplexity: "O(1)",
      code: `
  export const heapSort = async (
    array: number[],
    setArray: React.Dispatch<React.SetStateAction<number[]>>,
    speed: number
  ): Promise<void> => {
    const arr = [...array];
    const heapify = async (n: number, i: number) => {
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      if (left < n && arr[left] > arr[largest]) {
        largest = left;
      }
      if (right < n && arr[right] > arr[largest]) {
        largest = right;
      }
      if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, speed));
        await heapify(n, largest);
      }
    };
    const sort = async () => {
      const n = arr.length;
      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(n, i);
      }
      for (let i = n - 1; i >= 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, speed));
        await heapify(i, 0);
      }
    };
    await sort();
  };
      `,
    },
    countingSort: {
      name: "Counting Sort",
      description: "Counting Sort is a non-comparison-based algorithm that counts the occurrences of each value in the array and then places each value in its correct position.",
      complexity: {
        best: "O(n + k)",
        average: "O(n + k)",
        worst: "O(n + k)"
      },
      spaceComplexity: "O(n + k)",
      code: `
  export const countingSort = async (
    array: number[],
    setArray: React.Dispatch<React.SetStateAction<number[]>>,
    speed: number
  ): Promise<void> => {
    const arr = [...array];
    const max = Math.max(...arr);
    const count = new Array(max + 1).fill(0);
    for (const num of arr) {
      count[num]++;
    }
    let index = 0;
    for (let i = 0; i < count.length; i++) {
      while (count[i] > 0) {
        arr[index++] = i;
        count[i]--;
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
    }
  };
      `,
    },
    radixSort: {
      name: "Radix Sort",
      description: "Radix Sort processes the digits of numbers, sorting them by each digit’s significance, starting from the least significant digit to the most significant digit.",
      complexity: {
        best: "O(nk)",
        average: "O(nk)",
        worst: "O(nk)"
      },
      spaceComplexity: "O(n + k)",
      code: `
  export const radixSort = async (
    array: number[],
    setArray: React.Dispatch<React.SetStateAction<number[]>>,
    speed: number
  ): Promise<void> => {
    const arr = [...array];
    const max = Math.max(...arr);
    let exp = 1;
    const radixSortHelper = async (exp: number) => {
      const output = new Array(arr.length).fill(0);
      const count = new Array(10).fill(0);
  
      for (const num of arr) {
        count[Math.floor(num / exp) % 10]++;
      }
  
      for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
      }
  
      for (let i = arr.length - 1; i >= 0; i--) {
        output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
        count[Math.floor(arr[i] / exp) % 10]--;
      }
  
      for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
    };
  
    while (Math.floor(max / exp) > 0) {
      await radixSortHelper(exp);
      exp *= 10;
    }
  };
      `,
    },
  };
  