export default function getOnlyNumber(x, y) {
    if (!Array.isArray(x) && !Array.isArray(y)) {
      return 0;
    }
    let newArray = [];
    newArray.push(x?.filter((item) => !y?.includes(item)));
    return newArray;
  }
  
  