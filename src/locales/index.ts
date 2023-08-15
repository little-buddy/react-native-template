import { I18n } from 'i18n-js';
import { getLocales } from 'react-native-localize';
import en from './dicts/en.json';
import zhHans from './dicts/zh-Hans.json';

const locale = getLocales()[0].languageCode;

const i18n = new I18n(
	{
		en,
		['zh-Hans']: zhHans,
	},
	{
		defaultLocale: locale,
		locale,
	}
);

export default i18n;
