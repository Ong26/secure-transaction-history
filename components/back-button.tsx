import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

type Props = {};

const BackButton = (props: Props) => {
	const router = useRouter();
	const back = () => {
		router.back();
	};
	return (
		<TouchableOpacity onPress={back}>
			<Ionicons name="arrow-back" size={24} color="white" />
		</TouchableOpacity>
	);
};

export default BackButton;

const styles = StyleSheet.create({});
