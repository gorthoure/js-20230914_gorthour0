/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (typeof obj==='object') {
    const copyObj = {};
    for (let [key, value] of Object.entries(obj)) {
      copyObj[value] = key
    }
    return copyObj
  } else return undefined
}
