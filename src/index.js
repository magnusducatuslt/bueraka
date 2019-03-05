module.exports = function check(str, bracketsConfig) {
  const conf = new Map(bracketsConfig)
  const string = str.split('')
  const result = string.reduce((array, item) => {
    if (array.length === 0) {
      return conf.has(item) ? [...array, item] : [...array, item]
    } else {
      if (conf.get(array[array.length - 1]) === item) {
        array.pop()
        return [...array]
      } else {
        return [...array, item]
      }
    }
  }, [])
  return result.length === 0 ? true : false
}
