const path = require('path');
const os = require('os');
const shell = require('gulp-shell');
const gulp = require('gulp');
const inject = require('gulp-inject');
const webpack = require('webpack');
const open = require('gulp-open');
const clean = require('gulp-clean');
const gls = require('gulp-live-server');

const config = require('./src/server/config/environment');

var webpackConfig;

var defaultStatsOptions = {
  colors: true,
  hash: false,
  timings: false,
  chunks: false,
  chunkModules: false,
  modules: false,
  children: true,
  version: true,
  cached: false,
  cachedAssets: false,
  reasons: false,
  source: false,
  errorDetails: false
};


gulp.task('env', shell.task([
  `./env.sh`
]));

gulp.task('webpack', ['clean', 'inject:js'], function (cb) {
  webpack(webpackConfig, function (err, stats) {
    if (err) {
      throw err; // hard error
    }
    console.log(stats.toString(defaultStatsOptions));
    if (!cb.called) {
      cb.called = true;
      cb();
    }
  });
});

gulp.task('server', ['webpack'], function () {
  const server = gls.new('./src/server/index.js');

  server.start();

  gulp.watch([path.join(webpackConfig.output.path, '/**/*.{html,css,js}')], function (file) {
    console.log('change public files');
    server.notify.apply(server, [file]);
  });

  gulp.watch(['./src/server/**/*.js'] , function() {
    server.start.bind(server)();
  });
});

gulp.task('inject:js', function () {
  return gulp.src('./src/client/config.js')
    .pipe(inject(gulp.src(['./src/client/states/**/index.js'], {read: false}), {
      starttag: '// injector',
      relative: true,
      endtag: '// endinjector',
      transform: function(filePath) {
        return 'APP.config(require(\'./' + filePath + '\'));';
      }
    }))
    .pipe(gulp.dest('./client'));
});

gulp.task('clean', function (cb) {
  webpackConfig = require('./src/client/webpack.config.js');
  return gulp.src(webpackConfig.output.path, {read: false})
    .pipe(clean());
});

gulp.task('default', ['env', 'server'], function () {
  var browser = os.platform() === 'linux' ? 'google-chrome' : (
    os.platform() === 'darwin' ? 'google chrome' : 'chrome');
  var options = {
    uri: 'http://localhost:' + config.PORT,
    app: browser
  };
  return gulp.src(__filename)
    .pipe(open(options));
});

gulp.task('build', ['env', 'webpack']);

