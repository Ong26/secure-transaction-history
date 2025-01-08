import React from "react";

import TransactionList from "@/components/transaction/list";
import { View } from "react-native";
type Props = {};

const Page = (props: Props) => {
	return (
		<View style={{ flex: 1 }}>
			<TransactionList />
		</View>
	);
};

export default Page;
