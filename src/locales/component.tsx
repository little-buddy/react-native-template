import { useEffect, useState } from 'react';
import { Text, TextProps } from 'react-native';
import {
	TranslateOptions,
	NumberToCurrencyOptions,
	NumberToDelimitedOptions,
	NumberToPercentageOptions,
	NumberToRoundedOptions,
	NumberToHumanSizeOptions,
	NumberToHumanOptions,
} from 'i18n-js';
import i18n from './index';
import eventBus from '@/utils/event';

const useI18nEffect = () => {
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
};

interface I18nTextProps {
	scope: string | string[];
	config?: TranslateOptions;
}

export const I18nText = ({
	scope,
	config,
	...props
}: I18nTextProps & TextProps) => {
	useI18nEffect();

	return <Text {...props}>{i18n.t(scope, config)}</Text>;
};

interface I18nNumberFormatProps {
	scope?: string;
	value?: number;
}

export const I18nNumberFormat = ({
	scope = 'currency',
	value,
	...props
}: I18nNumberFormatProps & TextProps) => {
	useI18nEffect();

	return <Text {...props}>{i18n.l(scope, value)}</Text>;
};

interface I18nNumberProps extends TextProps {
	value: number;
}

export const I18nCurrency = ({
	value,
	config,
	...props
}: { config: Partial<NumberToCurrencyOptions> } & I18nNumberProps) => {
	useI18nEffect();

	return <Text {...props}>{i18n.numberToCurrency(value, config)}</Text>;
};

export const I18nPercentage = ({
	value,
	config,
	...props
}: { config: Partial<NumberToPercentageOptions> } & I18nNumberProps) => {
	useI18nEffect();

	return <Text {...props}>{i18n.numberToPercentage(value, config)}</Text>;
};

// 千分位加符号
export const I18nDelimited = ({
	value,
	config,
	...props
}: { config: Partial<NumberToDelimitedOptions> } & I18nNumberProps) => {
	useI18nEffect();

	return <Text {...props}>{i18n.numberToDelimited(value, config)}</Text>;
};

// 根据数字位数取舍
export const I18nRounded = ({
	value,
	config,
	...props
}: { config: Partial<NumberToRoundedOptions> } & I18nNumberProps) => {
	useI18nEffect();

	return <Text {...props}>{i18n.numberToRounded(value, config)}</Text>;
};

// Byte 单位
export const I18nHumanSize = ({
	value,
	config,
	...props
}: { config: Partial<NumberToHumanSizeOptions> } & I18nNumberProps) => {
	useI18nEffect();

	return <Text {...props}>{i18n.numberToHumanSize(value, config)}</Text>;
};

// be more readable by human
export const I18nHuman = ({
	value,
	config,
	...props
}: { config: Partial<NumberToHumanOptions> } & I18nNumberProps) => {
	useI18nEffect();

	return <Text {...props}>{i18n.numberToHuman(value, config)}</Text>;
};

// Date by moment.js
// timeAgoInWords
// toTime
// strftime
