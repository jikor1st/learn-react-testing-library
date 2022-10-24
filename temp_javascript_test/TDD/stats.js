/** before max */
// exports.max = (numbers) => {
//   let result = numbers[0];
//   numbers.forEach((n) => {
//     if (n > result) {
//       result = n;
//     }
//     return result;
//   });
// };

/** after max */
exports.max = (numbers) => Math.max(...numbers);

// min
exports.min = (numbers) => Math.min(...numbers);

/** before average */
// exports.avg = (numbers) => {
//   const sum = numbers.reduce((acc, current) => acc + current, 0);
//   return sum / numbers.length;
// };

/** after average */
// exports.avg = (numbers) =>
//   numbers.reduce(
//     (acc, current, index, array) =>
//       index === array.length - 1
//         ? (acc + current) / array.length
//         : acc + current,
//     0
// );

// exports.avg = (numbers) =>
//   numbers.reduce(
//     (acc, current, index, array) => acc + current / array.length,
//     0
//   );

exports.avg = (numbers) =>
  numbers.reduce(
    (acc, current, index, { length }) => acc + current / length,
    0
  );

/** sort */
exports.sort = (numbers) => numbers.sort((a, b) => a - b);

/** before median */
// exports.median = (numbers) => {
//   const middle = Math.floor(numbers.length / 2);

//   if (numbers.length % 2) {
//     // 홀수
//     return numbers[middle];
//   }
//   return (numbers[middle - 1] + numbers[middle]) / 2;
// };

/** after median */
exports.median = (numbers) => {
  const { length } = numbers;
  const middle = Math.floor(length / 2);
  return length % 2
    ? numbers[middle]
    : (numbers[middle - 1] + numbers[middle]) / 2;
};

/** before mode */
// exports.mode = (numbers) => {
//   const counts = new Map();
//   numbers.forEach((n) => {
//     const count = counts.get(n) || 0;
//     counts.set(n, count + 1);
//   });
//   const maxCount = Math.max(...counts.values());
//   const result = [...counts.keys()].find(
//     (number) => counts.get(number) === maxCount
//   );
//   return result;
// };

/** after mode */
// exports.mode = (numbers) => {
//   const counts = new Map();
//   numbers.forEach((n) => {
//     const count = counts.get(n) || 0;
//     counts.set(n, count + 1);
//   });
//   const maxCount = Math.max(...counts.values());
//   const modes = [...counts.keys()].filter(
//     (number) => counts.get(number) === maxCount
//   );

//   if (modes.length === modes.length) {
//     // 최빈값이 없음
//     return null;
//   }

//   if (modes.length > 1) {
//     // 최빈값이 여러개
//     return modes;
//   }

//   // 최빈값이 하나
//   return modes[0];
// };
exports.mode = (numbers) => {
  const counts = numbers.reduce(
    (acc, current) => acc.set(current, acc.get(current) + 1 || 1),
    new Map()
  );
  const maxCount = Math.max(...counts.values());
  const modes = [...counts.keys()].filter(
    (number) => counts.get(number) === maxCount
  );

  if (modes.length === numbers.length) {
    // 최빈값이 없음
    return null;
  }

  if (modes.length > 1) {
    // 최빈값이 여러개
    return modes;
  }

  // 최빈값이 하나
  return modes[0];
};
