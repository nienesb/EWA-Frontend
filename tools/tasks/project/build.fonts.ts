import * as gulp from 'gulp';

import Config from '../../config';

/**
 * Executes the build process, building the font files.
 */
export = () => {
  return gulp.src(Config.FONTS_SRC).pipe(gulp.dest(Config.FONTS_DEST));
};
