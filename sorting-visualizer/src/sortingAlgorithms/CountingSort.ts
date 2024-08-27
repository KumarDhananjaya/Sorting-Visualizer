export const countingSort = async (array: number[], setArray: React.Dispatch<React.SetStateAction<number[]>>, speed: number): Promise<void> => {
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
  