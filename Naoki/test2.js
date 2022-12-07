const degreeOfArray = arr => {
  const result = arr.reduce(
    (res, item, index) => {
      let freq, len;

      if (res[item] == undefined) {
        res[item] = {
          freq: 1,
          first: index,
          last: index
        };

        freq = len = 1;
      } else {
        freq = ++res[item].freq;
        res[item].last = index;        
        len = index - res[item].first + 1;
      }
      
      if (res.degree < freq || (res.degree == freq && res.shortLen > len)) {
        res.degree = freq;
        res.degreeItem = item;
        res.shortLen = len;
      }

      return res;
    }, 
    {
      degreeItem: 0,
      degree: 0,
      shortLen: 0
    }
  );

  return result.shortLen;
}

[
  [1, 2, 1, 3, 2],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 2, 3, 1, 2, 3, 1, 5]
].map(
  testCase => console.log(degreeOfArray(testCase))
);
