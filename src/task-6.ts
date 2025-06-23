function getFirstElement<T>(arr: T[]): T {
    return arr[0];
  }
  
  const num = getFirstElement<number>([1, 2, 3]);            // num: number
  const str = getFirstElement<string>(["a", "b", "c"]);      // str: string
  const bool = getFirstElement<boolean>([true, false, true]); // bool: boolean
  
  console.log(num);
  console.log(str);
  console.log(bool);
  

