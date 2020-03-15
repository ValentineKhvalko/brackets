module.exports = function check(str, bracketsConfig) {
  const result = [];

  str.split('').forEach((symbol) => {
    const currentBracketPair = bracketsConfig.find((pair) => {
      return pair.some((pairBracket) => pairBracket === symbol);
    });

    if (symbol === currentBracketPair[1]) {
      if (currentBracketPair[0] === result[result.length-1]) {
        result.pop();
      } else {
        result.push(symbol);
      }
    } else {
      result.push(symbol);
    }
  });

  return !result.length;
};
  
