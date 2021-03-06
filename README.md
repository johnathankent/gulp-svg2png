# gulp-svg2png [![Build Status](https://travis-ci.org/johnathankent/gulp-svg2png.png?branch=master)](https://travis-ci.org/johnathankent/gulp-svg2png)

> A gulp plugin for converting SVGs to PNGs.


## Usage

First, install `gulp-svg2png` as a development dependency:

```shell
yarn add gulp-svg2png
```

Then, add it to your `gulpfile.js`:

```javascript
const svg2png = require('gulp-svg2png');

gulp.task('svg2png', function () {
  gulp.src('./specs/assets/**/*.svg')
    .pipe(svg2png())
    .pipe(gulp.dest('./build'));
});
```

## Arguments

### svg2png([options, verbose, concurrency])

`options`

The resizing options which will be passed directly to [svg2png](https://github.com/domenic/svg2png#exact-resizing-behavior).

`verbose`

Logs progress information (optional; default=true)

`concurrency`

Limit the amount of concurrent tasks processed at one time. (optional; default=null)

## Development

```sh
# install
yarn

# test
yarn test
```

## Changelog

See [HISTORY.md](https://github.com/akoenig/gulp-svg2png/blob/master/HISTORY.md)

## Author

* [André König](http://andrekoenig.info) (andre.koenig@posteo.de) - [See License](LICENSE.md)

## Contributors

See: https://github.com/johnathankent/gulp-svg2png/graphs/contributors
