export const insertionSort = async (array: number[], setArray: React.Dispatch<React.SetStateAction<number[]>>, speed: number): Promise<void> => {
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
  