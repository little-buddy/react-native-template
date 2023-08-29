import { PropsWithChildren } from 'react';
import { Text, TextStyle } from 'react-native';

export default ({
  style,
  ...props
}: PropsWithChildren<{ style?: TextStyle }>) => (
  <Text
    style={[
      style,
      {
        fontFamily: 'Pacifico-Regular',
      },
    ]}
    {...props}
  />
);
