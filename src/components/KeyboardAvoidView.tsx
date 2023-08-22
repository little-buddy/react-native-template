import { PropsWithChildren, useEffect, useMemo } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  KeyboardController,
  AndroidSoftInputModes,
} from 'react-native-keyboard-controller';

export default ({ children }: PropsWithChildren) => {
  const inset = useSafeAreaInsets();

  const keyboardVerticalOffset = useMemo(
    () => inset.top + inset.bottom,
    [inset.top, inset.bottom]
  );

  // useEffect(() => {
  //   KeyboardController.setInputMode(
  //     AndroidSoftInputModes.SOFT_INPUT_ADJUST_PAN
  //   );
  //   return () => KeyboardController.setDefaultMode();
  // });

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={
        Platform.OS === 'ios' ? keyboardVerticalOffset : 0
      }
    >
      <TouchableWithoutFeedback
        onPress={() => {
          // In some ios, multiple inputs exist at the same time,
          //  and clicking on the blank area does not return
          if (Keyboard.isVisible()) {
            Keyboard.dismiss();
          }
        }}
      >
        <ScrollView style={styles.container}>{children}</ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
