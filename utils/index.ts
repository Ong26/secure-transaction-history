export const generateArray = (length: number) => {
	return new Array(length).fill((_: unknown, i: number) => i);
};
