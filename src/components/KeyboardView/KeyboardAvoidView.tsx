import { PropsWithChildren, ReactInstance, memo } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  ViewProps,
  ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface KeyboardInnerProps {
  needNested?: boolean;
  NestedComponent?: ReactInstance;
  nestedProps?: any;
}

const KeyboardInner = memo(
  ({
    needNested,
    NestedComponent,
    nestedProps,
    children,
  }: PropsWithChildren<KeyboardInnerProps>) => {
    const { style, ...props } = nestedProps;

    return needNested ? (
      // @ts-ignore
      <NestedComponent style={[styles.container, style]} {...props}>
        {children}
      </NestedComponent>
    ) : (
      children
    );
  }
);

export default ({
  needNested = true,
  NestedComponent = ScrollView,
  nestedProps = {},
  children,
  style,
  ...props
}: PropsWithChildren<KeyboardInnerProps & ViewProps>) => {
  const inset = useSafeAreaInsets();
  const keyboardVerticalOffset = inset.top + inset.bottom;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={
        Platform.OS === 'ios' ? keyboardVerticalOffset : 0
      }
      style={[styles.container, style]}
      {...props}
    >
      <KeyboardInner
        needNested={needNested}
        NestedComponent={NestedComponent}
        {...nestedProps}
      >
        {children}
      </KeyboardInner>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
