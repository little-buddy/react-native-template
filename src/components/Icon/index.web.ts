// Use prebuilt version of RNVI in dist folder
// @ts-ignore
import Icon from 'react-native-vector-icons/dist/AntDesign';

// Generate required css
// @ts-ignore
import iconFont from 'react-native-vector-icons/Fonts/AntDesign.ttf';
const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: AntDesign;
}`;

// Create stylesheet
const style: any = document.createElement('style');
// html5 noneed type
// style.type = 'text/css';

if ('styleSheet' in style) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);

export const AntdIcon = Icon;
