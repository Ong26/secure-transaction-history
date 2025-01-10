import useSecureMask from "@/store/use-secure-mask";
import { StyleSheet } from "react-native";
import { Text, TextProps } from "./themed";

const MaskingText = ({ children, ...props }: TextProps) => {
	const { secureMask } = useSecureMask();
	return (
		<Text {...props} style={[styles.maskingText, props.style]}>
			{secureMask ? "*****" : children}
		</Text>
	);
};

const styles = StyleSheet.create({
	maskingText: {
		fontSize: 16,
	},
});

export default MaskingText;
