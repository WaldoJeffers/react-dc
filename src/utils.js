export const intersect = (obj1, obj2) => {
  const o = {};
  Object.entries(keys2).forEach((key, val) => {
    if (obj1.hasOwnProperty(key)){
      o[key] = val;
    }
  });
  return o;
}
