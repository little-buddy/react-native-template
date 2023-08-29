import { PropsWithChildren, useCallback } from 'react';
import { View, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useWindowDimensions } from '@/hooks';
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
// @ts-ignore
import { AntdIcon } from '@/components/Icon';

const imgs = [
  'https://images.unsplash.com/photo-1692545921246-d36c3221518f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MzIyNzU5MQ&ixlib=rb-4.0.3&q=80&w=1920',
  'https://plus.unsplash.com/premium_photo-1690487695858-070ba0ef41f0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MzIyNzYxOA&ixlib=rb-4.0.3&q=80&w=1920',
  'https://images.unsplash.com/photo-1692562557018-376bfa995d95?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MzIyNzYzMg&ixlib=rb-4.0.3&q=80&w=1920',
];

const PageItem = ({
  index,
  length,
  progress,
}: PropsWithChildren<{
  progress: SharedValue<number>;
  index: number;
  length: number;
}>) => {
  const width = 4;

  const style = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];

    const outputRangeBg = [
      'rgba(255,255,255,0.7)',
      'rgba(99,93,247,1)',
      'rgba(255,255,255,0.7)',
    ];

    const outputRangeWidth = [width, width * 3, width];

    if (index === 0 && progress?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
    }

    return {
      backgroundColor: interpolateColor(
        progress?.value,
        inputRange,
        outputRangeBg
      ),
      width: interpolate(
        progress?.value,
        inputRange,
        outputRangeWidth,
        Extrapolate.CLAMP
      ),
    };
  }, [width]);

  return (
    <Animated.View
      style={[
        {
          height: width,
          borderRadius: width,
          marginHorizontal: width / 2,
        },
        style,
      ]}
    />
  );
};

function Index({ data = imgs }: PropsWithChildren<{ data?: any[] }>) {
  const { width } = useWindowDimensions();

  const animatedValue = useSharedValue(0);

  const height = width / 2;

  const animatedStyle = useCallback(
    (value: number) => {
      'worklet';
      const translateX = interpolate(value, [-1, 0, 1], [-width, 1, width]);
      const opacity = interpolate(value, [-0.75, 0, 1], [0, 1, 0]);
      return { opacity, transform: [{ translateX }] };
    },
    [width]
  );

  console.log('render');

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <AntdIcon />

      <View style={{ marginVertical: 12 }}>
        <Carousel
          width={width}
          height={height}
          autoPlay={true}
          data={data}
          scrollAnimationDuration={1500}
          onProgressChange={(_, absoluteProgress) =>
            (animatedValue.value = absoluteProgress)
          }
          customAnimation={animatedStyle}
          renderItem={({ item: uri }) => {
            return (
              <View
                style={{
                  width,
                  height,
                  paddingHorizontal: 12,
                  overflow: 'hidden',
                }}
              >
                <Image
                  source={{ uri }}
                  style={{ width: '100%', height: '100%', borderRadius: 4 }}
                  resizeMode="cover"
                />
              </View>
            );
          }}
        />
        <View
          style={{
            position: 'absolute',
            flex: 1,
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            bottom: 12,
          }}
        >
          {data.map((_, index) => (
            <PageItem
              key={index}
              progress={animatedValue}
              index={index}
              length={data.length}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

export default Index;
