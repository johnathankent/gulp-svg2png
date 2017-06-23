const helper_1 = require("./helper")
const expect = require('chai').expect
const svg2png = require('../')

module.exports = () => {
  describe('The "gulp-svg2png" plugin', function () {

    it('should convert a SVG to a PNG', function (done) {
      const filename = 'twitter.svg'
      const stream = svg2png()
      const image = helper_1["default"].createTestFile()

      stream.on('data', function (png) {
        expect(png.path).to.equal('./specs/assets/twitter.png')
        expect(helper_1["default"].isPNG(png.contents)).to.equal(true)
        done()
      })

      stream.on('error', function (err) {
        return console.error(err)
      })
      stream.write(image)
      stream.end()
    })

    it('should convert a SVG to a PNG by a defined scaling factor', function (done) {
      const filename = 'twitter.svg'
      const stream = svg2png({ width: 200, height: 300 })
      const image = helper_1["default"].createTestFile()

      stream.on('data', function (png) {
        helper_1["default"].hasDimensions(png.contents, 300, 200, function (err, has) {
          expect(has).to.equal(true)
          done()
        })
      })

      stream.write(image)
      stream.end()
    })
  })
}
