export default function getDuplicate(x, y) {
  if (!Array.isArray(x) && !Array.isArray(y)) {
    return 0;
  }
  let newArray = [];
  newArray.push([...new Set(x.concat(y))]);
  return newArray;
}
