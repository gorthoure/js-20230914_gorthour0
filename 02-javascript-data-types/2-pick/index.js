/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  const copyObj={};
  for (let [key,value] of Object.entries(obj)) {
    fields.find((element) => {
      if (element===key){
        copyObj[key]=value
      }
    })
  }



  return copyObj
};
