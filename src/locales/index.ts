import { I18n } from 'i18n-js';
import { getLocales } from 'react-native-localize';
import en from './dicts/en.json';
import zhHans from './dicts/zhHans.json';
import eventBus from '@/utils/event';

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

export const changeLang = (lang: string) => {
	i18n.locale = lang;
	eventBus.emit(eventBus.EVENT_NAME.LANG);
};

export default i18n;
