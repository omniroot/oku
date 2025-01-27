import { AnimeList } from "@components/business/AnimeList/AnimeList.tsx";
import { Button } from "@components/ui/Button/Button.tsx";
import { Loader } from "@components/ui/Loader/Loader.tsx";
import { AnimeVerticalCard } from "@features/animes/components/AnimeVerticalCard/AnimeVerticalCard.tsx";
import { useGetUserRates } from "@features/userRates/api/getUserRates/getUserRates.api.ts";
import { IUserRate } from "@features/userRates/api/getUserRates/getUserRates.types.ts";
import { IUserRateStatus } from "@features/userRates/types/userRates.types.ts";
import { Link } from "@tanstack/react-router";
import { FC, memo } from "react";
import styles from "./UserRates.module.css";

const filters: IUserRateStatus[] = ["watching", "planned", "completed", "on_hold", "dropped"];

interface IUserRatesProps {
	userId: string;
	status: IUserRateStatus;
}

export const UserRates: FC<IUserRatesProps> = memo(({ userId, status }) => {
	const {
		data: userRatesPages,
		isSuccess,
		fetchNextPage,
	} = useGetUserRates({
		variables: {
			userId: Number(userId),
			status,
		},
	});
	const userRates = userRatesPages?.pages.reduce<IUserRate[]>((acc, collections) => {
		for (const collection of collections) {
			const lastCollectionId = acc[acc.length - 1]?.id;

			if (lastCollectionId !== collection.id) {
				acc.push(collection);
			}
		}
		return acc;
	}, []);

	return (
		<div className={styles.user_rates}>
			<div className={styles.filters}>
				{filters.map((filter) => {
					return (
						<Link
							to="."
							search={{ status: filter }}
							className={styles.filter}
							data-active={filter === status}
						>
							{filter}
						</Link>
					);
				})}
			</div>

			{!isSuccess ? (
				<Loader fullscreen />
			) : (
				<AnimeList>
					{userRates?.map((rate) => {
						console.log(rate.anime.poster?.main2xUrl);

						return (
							<AnimeVerticalCard
								id={rate.anime.id}
								poster={rate.anime.poster?.main2xUrl}
								date={String(rate.anime.releasedOn.year || rate.anime.airedOn.year)}
								episodes={rate.anime.episodes}
								userEpisodes={rate.episodes}
								kind={rate.anime.kind}
								key={rate.anime.id}
								name={rate.anime.name}
							/>
						);
					})}
				</AnimeList>
			)}
			<Button onClick={() => fetchNextPage()} style={{ width: "100%" }}>
				More
			</Button>
		</div>
	);
});
