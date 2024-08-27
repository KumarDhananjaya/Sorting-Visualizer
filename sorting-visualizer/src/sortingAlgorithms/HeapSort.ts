export const heapSort = async (array: number[], setArray: React.Dispatch<React.SetStateAction<number[]>>, speed: number): Promise<void> => {
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
  