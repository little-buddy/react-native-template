import {
  Platform,
  useWindowDimensions as useWindowDimensionsRn,
} from 'react-native';

export const useIsWeb = () => {
  return Platform.OS === 'web';
};

export const useWindowDimensions = () => {
  const res = useWindowDimensionsRn();
  const isWeb = useIsWeb();
  if (isWeb) {
    const dom = document.getElementById('root');
    const { width, height } = dom?.getBoundingClientRect() as DOMRect;
    res.width = width;
    res.height = height;
  }

  return res;
};
