/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const pathKeys = path.split('.')
    let currObj=obj
    pathKeys.forEach((pathKey)=>{
      if (pathKey in obj) {
      currObj = obj[pathKeys]
    }
    })
    return currObj
}
