const stockPairs = (stocksProfit, target) => {
  let profits = {};
  let total = 0;

  for (let i = 0; i < stocksProfit.length; i++) {
    let first = stocksProfit[i];

    if (profits[first] == undefined) {
      for (let j = i + 1; j < stocksProfit.length; j++) {
        let second = stocksProfit[j];
        
        if (profits[second] == undefined && first + second == target) {
          total++;
          profits[first] = profits[second] = true;
        }
      }
    }
  }

  return total;
}

console.log(stockPairs([5, 7, 9, 13, 11, 6, 6, 3, 3], 12));
