import { PropsWithChildren, useEffect } from 'react';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import KeyboardManager from 'react-native-keyboard-manager';
import {
  KeyboardController,
  AndroidSoftInputModes,
} from 'react-native-keyboard-controller';

export default ({ children }: PropsWithChildren) => {
  useEffect(() => {
    if (Platform.OS === 'ios') {
      KeyboardManager.setEnable(true);

      return () => {
        KeyboardManager.setEnable(false);
      };
    }

    KeyboardController.setInputMode(
      AndroidSoftInputModes.SOFT_INPUT_ADJUST_PAN
    );
    return () => KeyboardController.setDefaultMode();
  });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>{children}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
