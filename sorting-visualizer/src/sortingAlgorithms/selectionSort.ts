export const selectionSort = async (array: number[], setArray: React.Dispatch<React.SetStateAction<number[]>>, speed: number): Promise<void> => {
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
  