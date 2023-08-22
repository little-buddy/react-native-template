import { PropsWithChildren, useEffect } from 'react';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import KeyboardManager from 'react-native-keyboard-manager';

export default ({ children }: PropsWithChildren) => {
  useEffect(() => {
    if (Platform.OS === 'ios') {
      KeyboardManager.setEnable(true);

      return () => {
        KeyboardManager.setEnable(false);
      };
    }
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
