import { useEffect, useState } from 'react';
import { Text, TextProps } from 'react-native';
import i18n from './index';
import eventBus from '@/utils/event';

interface I18nTextProps {
	word: string;
}

export const changeLang = (lang: string) => {
	i18n.locale = lang;
	eventBus.emit(eventBus.EVENT_NAME.LANG);
};

export const I18nText = ({ word, ...props }: I18nTextProps & TextProps) => {
	const [_, setCount] = useState(0);

	useEffect(() => {
		const fn = () => {
			setCount(c => c + 1);
		};

		eventBus.on(eventBus.EVENT_NAME.LANG, fn);
		return () => {
			eventBus.off(eventBus.EVENT_NAME.LANG, fn);
		};
	}, []);

	return <Text {...props}>{i18n.t(word)}</Text>;
};
