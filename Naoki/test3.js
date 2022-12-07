const selectStock = (saving, currentValue, futureValue) => {
  let profit = futureValue.map((item, index) => item - currentValue[index]);
  let temp = [];

  // remove negative profit stocks
  profit.forEach((item, index) => {
    if (item <= 0) temp.push(index);
  });

  temp.forEach(item => {
    currentValue.splice(item, 1);
    profit.splice(item, 1);
  });

  // remove overflowing stocks
  temp = [];
  currentValue.forEach((item, index) => {
    if (item > saving) temp.push(index);
  });

  temp.forEach(item => {
    currentValue.splice(item, 1);
    profit.splice(item, 1);
  });

  // search all possible cases
  let range = 1 << currentValue.length;
  let maximumProfit = Number.MIN_VALUE;

  for (let i = 0; i < range; i++) {
    let j = 0, y = i, sumOfInvest = sumOfProfit = 0;

    while (y > 0) {
      if ((y & 1) == 1) {
        sumOfInvest += currentValue[j];
        sumOfProfit += profit[j];

        if (sumOfInvest > saving) break;
      }
      j++;
      y >>= 1;
    }

    if (y > 0) continue;

    if (maximumProfit < sumOfProfit) maximumProfit = sumOfProfit;
  }

  return maximumProfit;
}

console.log(selectStock(250, [175, 133, 109, 210, 97], [200, 125, 128, 228, 133]));
