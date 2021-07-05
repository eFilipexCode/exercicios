function calculateMed(arr) {
    let totalSum = 0;
    let totalNegativeNumbers = 0;
    let totalPositiveNumbers = 0;
  
    for (let i = 0; i < arr.length; i++) {
      totalSum += arr[i];
      if (arr[i] < 0)
        totalNegativeNumbers++
      else
        totalPositiveNumbers++
    };
  
    return {
      med: (totalSum / arr.length).toFixed(2),
      totalNegativeNumbers,
      totalPositiveNumbers
    }
  };
  
  const test1 = calculateMed([1, 2, 3]);
  console.log(test1.med == 2 && test1.totalNegativeNumbers === 0 && test1.totalPositiveNumbers === 3);
  
  const test2 = calculateMed([-1, 2, 3]);
  console.log(test2.med == 1.33 && test2.totalNegativeNumbers === 1 && test2.totalPositiveNumbers === 2);
  
  const test3 = calculateMed([-8, 12, 30, -7, 13, 34]);
  console.log(test3.med == 12.33 && test3.totalNegativeNumbers === 2 && test3.totalPositiveNumbers === 4)