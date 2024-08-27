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
  