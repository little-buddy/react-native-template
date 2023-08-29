import { View, Image, StyleSheet, Text, Button } from 'react-native';
import { PacificoText } from '@/components/Text';
import { globalStyle } from '@/style';
import { useNavigation } from '@react-navigation/native';

const GoBack = () => {
  const navigation = useNavigation();

  return <Button title="Go Back" onPress={() => navigation.goBack()} />;
};

export default () => (
  <View style={[globalStyle.flex1, globalStyle.vharound, style.container]}>
    <View style={style.f0fBox}>
      <PacificoText style={style.f0ftext}>4</PacificoText>
      <Image
        style={style.f0fimg}
        source={require('@/assets/img/goodies-fire.png')}
      />
      <PacificoText style={style.f0ftext}>4</PacificoText>
    </View>
    <Image style={style.hey} source={require('@/assets/img/goodies-hey.png')} />
    <View>
      <Text style={style.text}>What are you doing here?!</Text>
      <GoBack />
    </View>
  </View>
);

const style = StyleSheet.create({
  container: {
    paddingVertical: '20%',
    backgroundColor: '#fff',
  },
  f0fBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  f0ftext: {
    fontSize: 100,
    color: '#FF4F03',
    fontWeight: '400',
  },
  f0fimg: {
    width: 120,
    height: 120,
    marginHorizontal: 12,
  },
  hey: {
    width: 95,
    height: 64,
  },
  text: {
    color: '#4A3993',
  },
});
