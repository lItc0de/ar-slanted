export function doExpensiveTask(num) {
  let result = 0;
  for (let i = 0; i < Math.pow(num, 10); i++) {
    result += result / i;
  }
  return result;
}
