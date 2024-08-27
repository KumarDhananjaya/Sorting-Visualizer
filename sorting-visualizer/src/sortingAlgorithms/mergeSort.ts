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
        // Update the array visually after each merge step
        setArray([...arr.slice(0, arr.length - sortedArray.length), ...sortedArray]);
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
  
      // Merge the remaining elements
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
  