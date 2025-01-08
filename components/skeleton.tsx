import { useEffect } from "react";
import { DimensionValue, StyleProp, StyleSheet, ViewStyle } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withRepeat, withTiming } from "react-native-reanimated";

type SkeletonProps = { width?: DimensionValue; height?: DimensionValue; delay?: number; style?: StyleProp<ViewStyle> };

const Skeleton = ({ width = "100%", height = "100%", delay = 0, style }: SkeletonProps) => {
	const opacity = useSharedValue(0.5);

	const animatedStyle = useAnimatedStyle(() => {
		const opacityTiming = withTiming(opacity.value, { duration: 1000 });
		return { opacity: withDelay(delay, withRepeat(opacityTiming, -1, true)) };
	});

	useEffect(() => {
		opacity.value = 0.8;
	}, []);

	return <Animated.View style={[style, { width, height }, styles.skeleton, animatedStyle]} />;
};

const styles = StyleSheet.create({
	skeleton: {
		backgroundColor: "#a3a3a3",
		borderRadius: 4,
	},
});

export default Skeleton;
