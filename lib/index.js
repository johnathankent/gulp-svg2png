module.exports = () => {
  //  * Checks if the given file is a SVG.
  //  * @param  {buffer} svg The SVG file object.
  //  * @return {Boolean}
  SVG.is = function (data) {
    let snippet
    data = data.toString('hex')
    for (let i = 0; i < data.length; i = i + 1) {
      snippet = data.slice(i, (i + 2)).toString('hex')
      if ('73' === snippet) {
        i = i + 2
        snippet = data.slice(i, (i + 2)).toString('hex')
        if ('76' === snippet) {
          i = i + 2
          snippet = data.slice(i, (i + 2)).toString('hex')
          if ('67' === snippet) {
            return true
          }
        }
      }
    }
    return false
  }
  return SVG
}
