import React from "react";

import SecureMaskingFab from "@/components/secure-masking-fab";
import TransactionList from "@/components/transaction/list";
import { View } from "react-native";

const Page = () => {
	return (
		<View style={{ flex: 1 }}>
			<TransactionList />
			<SecureMaskingFab />
		</View>
	);
};

export default Page;
