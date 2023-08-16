import { PropsWithChildren } from 'react';
import { View, ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default ({
  children,
  style,
  ...props
}: PropsWithChildren<ViewProps>) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      {...props}
      style={{
        ...(style as object),
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      {children}
    </View>
  );
};
