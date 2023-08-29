const Fontmin = require('fontmin');
const path = require('path');

const fontmin = new Fontmin()
  .src(path.resolve(__dirname, '../src/assets/font/*.ttf'))
  .dest(path.resolve(__dirname, '../scripts/fonts'))
  .use(
    Fontmin.glyph({
      text: '4',
      hinting: false,
    })
  );

fontmin.run((err, file) => {
  if (err) {
    console.error(err);
    return;
  }

  //   fs.cp
});
