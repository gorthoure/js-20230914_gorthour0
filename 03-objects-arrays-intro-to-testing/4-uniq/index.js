/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
    const newArr = []
  if (typeof arr==='object') {
    for (let value of arr) {
      if (!newArr.includes(value)) {
        newArr.push(value)
      }
    }
  }
    return newArr
}
