export const compose = (...fns) => (...args) => fns.reduceRight((p, c) => c(p), fns.pop()(...args))

export const intersect = (obj1, obj2) => {
  const o = {};
  Object.entries(keys2).forEach((key, val) => {
    if (obj1.hasOwnProperty(key)){
      o[key] = val;
    }
  });
  return o;
}

export const mixinCreator = (propTypes) => (Component) => class extends Component{
  static propTypes = {...Component.propTypes, ...propTypes}
}
