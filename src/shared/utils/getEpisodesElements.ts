export const getEpisodesElements = (maxEpisodes: number) => {
	const elements = Array.from({ length: maxEpisodes }, (_, i) => `${i + 1}`);

	return elements;
};

export const getEpisodesOptions = (maxEpisodes: number) => {
	const elements = Array.from({ length: maxEpisodes }, (_, i) => ({
		label: `${i + 1}`,
		value: `${i + 1}`,
	}));

	return elements;
};
