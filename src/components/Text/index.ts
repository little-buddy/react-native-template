// @ts-ignore
import PacificoRegular from '@/assets/font/Pacifico-Regular.ttf';
import { Platform } from 'react-native';

export { default as PacificoText } from './PacificoText';

const createStyle = (font: string, name: string) => {
  const fontStyles = `@font-face {
        src: url(${font});
        font-family: ${name};
      }`;

  // Create stylesheet
  const style: any = document.createElement('style');
  // html5 noneed type
  // style.type = 'text/css';

  if ('styleSheet' in style) {
    style.styleSheet.cssText = fontStyles;
  } else {
    style.appendChild(document.createTextNode(fontStyles));
  }

  // Inject stylesheet
  document.head.appendChild(style);
};

if (Platform.OS === 'web') {
  createStyle(PacificoRegular, 'Pacifico-Regular');
}
