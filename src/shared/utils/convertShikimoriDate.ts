export const convertShikimoriDate = (date: string) => {
	const year = date.slice(0, 4).padStart(2, "0");
	const month = date.slice(5, 7).padStart(2, "0");
	const day = date.slice(8, 10).padStart(2, "0");

	return {
		year,
		month,
		day,
	};
};
