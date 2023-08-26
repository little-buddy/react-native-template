import KeyboardView from '@/components/KeyboardView/KeyboardAvoidView';
// import KeyboardView from '@/components/KeyboardView/KeyboardAvoidView';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const KeyboardAvoidingComponent = () => {
  return (
    <KeyboardView>
      <View style={styles.inner}>
        <TextInput style={styles.textInput} />
        <TextInput style={styles.textInput} />
        <TextInput style={styles.textInput} />
        <TextInput style={styles.textInput} />
        <TextInput style={styles.textInput} />
        <TextInput style={styles.textInput} />
        <TextInput style={styles.textInput} />
        <TextInput style={styles.textInput} />
        <TextInput style={styles.textInput} />
        <TextInput style={styles.textInput} />
        <TextInput style={styles.textInput} />
        <TextInput style={styles.textInput} />
        <TextInput style={styles.textInput} />
        <TextInput style={styles.textInput} />
        <View style={styles.btnContainer}>
          <Button title="Submit" onPress={() => null} />
        </View>
      </View>
    </KeyboardView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    paddingHorizontal: 24,
    paddingTop: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});

export default KeyboardAvoidingComponent;
