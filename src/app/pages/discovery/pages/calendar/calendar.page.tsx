import { convertShikimoriDate } from "@/shared/utils/convertShikimoriDate.ts";
import { getPosterImage } from "@/shared/utils/getPosterImage.ts";
import { AnimeList } from "@components/business/AnimeList/AnimeList.tsx";
import { Loader } from "@components/ui/Loader/Loader.tsx";
import { AnimeVerticalCard } from "@features/animes/components/AnimeVerticalCard/AnimeVerticalCard.tsx";
import { useGetCalendar } from "@features/calendar/api/calendar.api.ts";
import { ICalendar } from "@features/calendar/api/calendar.interface.ts";
import { createLazyRoute } from "@tanstack/react-router";
import { HeadingSection } from "@ui/HeadingSection/HeadingSection.tsx";
import styles from "./calendar.page.module.css";

const convertCalendar = (calendars: ICalendar[] | undefined) => {
	let days: { [key: string]: ICalendar[] } = {};

	calendars?.map((item) => {
		const _dayOfTheWeek = new Date(item.next_episode_at).toLocaleString("ru", {
			weekday: "long",
			day: "numeric",
			month: "long",
		});
		days = {
			...days,
			[_dayOfTheWeek]: [...(days[_dayOfTheWeek] || []), item as ICalendar],
		};
	});

	return days;
};

export const CalendarPage = () => {
	const { data: calendar, isFetching } = useGetCalendar();
	const days = convertCalendar(calendar);

	return (
		<div className={styles.discovery_calendar_fragment}>
			{!days && !calendar && isFetching && <Loader fullscreen />}
			{days &&
				Object.keys(days).map((key) => (
					<HeadingSection title={key.toLocaleUpperCase()} key={key}>
						<AnimeList>
							{days[key].map((anime) => {
								// console.log({ anime });

								return (
									<AnimeVerticalCard
										key={anime.anime.id}
										id={String(anime.anime.id)}
										name={anime.anime.name}
										poster={getPosterImage(anime.anime.image.x96)}
										episodes={anime.anime.episodes}
										kind={anime.anime.kind}
										date={
											convertShikimoriDate(anime.anime.released_on || anime.anime.aired_on).year
										}
									/>
								);
							})}
						</AnimeList>
					</HeadingSection>
				))}
		</div>
	);
};

export const Route = createLazyRoute("/discovery/calendar")({
	component: CalendarPage,
});
