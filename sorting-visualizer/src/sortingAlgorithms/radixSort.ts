export const radixSort = async (array: number[], setArray: React.Dispatch<React.SetStateAction<number[]>>, speed: number): Promise<void> => {
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
  