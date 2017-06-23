var fs = require("fs")
var os = require("os")
var path = require("path")
var gutil = require("gulp-util")
var imagesize = require('imagesize')
module.exports = () => {
  const Helper = function () {}

  //  * Checks if a given buffer is valid data from a PNG.
  //  * @param  {Buffer} buffer The PNG data.
  //  * @return {boolean}
  Helper.isPNG = function (buffer) {
    const mNumber = '89504E470D0A1A0A' // magic number of a PNG
    const contents = buffer.toString('hex').toUpperCase()
    return (contents.substring(0, mNumber.length) === mNumber)
  }

  //  * Checks if the dimensions of an image matches
  //  * given dimensions.
  //  * @param  {string} image Path to the image.
  //  * @param  {number} width The expected width.
  //  * @param  {number} height The expected height.
  //  * @param  {function} callback
  Helper.hasDimensions = function (image, height, width) {
    return new Promise((resolve, reject) => {
      const temp = path.join(os.tmpdir(), 'test.png')
      fs.writeFileSync(temp, image)
      imagesize(fs.createReadStream(temp), function (err, result) {
        if (err) reject(err)
        fs.unlinkSync(temp)
        resolve((result.width === width && result.height === height))
      })
    })
  }

  //  * Creates a vinyl file descriptor for testing.
  //  * @return {object}
  Helper.createTestFile = function () {
    return new gutil.File({
      cwd: './specs/assets/',
      base: './specs/assets/',
      path: './specs/assets/twitter.svg',
      contents: fs.readFileSync('./specs/assets/twitter.svg')
    })
  }
  return Helper
}
