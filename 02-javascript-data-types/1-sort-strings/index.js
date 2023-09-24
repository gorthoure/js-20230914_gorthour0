/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

const ru = "Ru-ru-u-kf-upper"
const en = "En-en-u-kf-upper"

export function sortStrings(arr, param = 'asc') {
  const copyArr = [...arr]
  if (param === 'desc') {
    copyArr.sort(sortDesc)
  } else copyArr.sort(sortAsc)
  return copyArr
}

const sortDesc = (a, b) => {
  return b.localeCompare(a, [ru, en], {sensitivity: 'case'})
}
const sortAsc = (a, b) => {
  return a.localeCompare(b, [ru, en], {sensitivity: 'case'})
}
