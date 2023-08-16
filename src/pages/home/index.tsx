import { useChangeLang, I18nText } from '@/locales/componentRedux';
import { View, Text, TouchableHighlight } from 'react-native';

export default () => {
  const changeLang = useChangeLang();
  return (
    <View>
      <Text style={{ backgroundColor: 'yellow' }}>asdfasdf</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: 'red',
        }}
      >
        <I18nText scope="China" />
        <TouchableHighlight onPress={() => changeLang('zh-Hans')}>
          <Text>中文</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => changeLang('en')}>
          <Text>英文</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};
