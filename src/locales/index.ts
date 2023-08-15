import { I18n } from 'i18n-js';
import { getLocales } from 'react-native-localize';
import enUs from './en_US.json';
import zhCn from './zh_CN.json';

const locale = getLocales()[0].languageTag.replace(/-/g, '_');

const i18n = new I18n(
	{
		en_US: enUs,
		zh_CN: zhCn,
	},
	{
		defaultLocale: locale,
		locale,
	}
);

export default i18n;
