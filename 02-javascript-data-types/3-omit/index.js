/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const copyObj={...obj};
  for (let [key] of Object.entries(obj)) {
    fields.find((element) => {
      if (element===key){
        delete copyObj[key]
      }
    })
  }
  return copyObj
};
