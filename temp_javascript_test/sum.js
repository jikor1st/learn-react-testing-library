function sum(a, b) {
  return a + b;
}

/** before sumOf */
// function sumOf(numbers) {
//   let result = 0;
//   numbers.forEach((n) => {
//     result += n;
//   });
//   return result;
// }

/** after sumOf */
function sumOf(numbers) {
  return numbers.reduce((acc, current) => acc + current, 0);
}

exports.sum = sum;
exports.sumOf = sumOf;
