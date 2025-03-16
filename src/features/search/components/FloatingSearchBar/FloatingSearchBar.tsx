// import { useDebounce } from "@uidotdev/usehooks";
// import { motion } from "motion/react";
// import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
// import styles from "./FloatingSearchBar.module.css";
// import { Loader } from "@ui/Loader/Loader.tsx";
// import { useGetAnimes } from "@features/animes/api/getAnimes/getAnimes.api.ts";
// import { SearchIcon } from "@/shared/assets/icons/SearchIcon.tsx";
// import { AnimeList } from "@components/business/AnimeList/AnimeList.tsx";
// import { Button } from "@components/ui/Button/Button.tsx";
// import { AnimeVerticalCard } from "@features/animes/components/AnimeVerticalCard/AnimeVerticalCard.tsx";

// export const FloatingSearchBar = () => {
// 	const [searchAnimesQuery, setSearchAnimesQuery] = useState(
// 		localStorage.getItem("last_search") || "",
// 	);

// 	const {
// 		data: searchAnimes,
// 		refetch: refetchSearchAnimes,
// 		isFetching: searchAnimesIsLoading,
// 	} = useGetAnimes({
// 		enabled: false,
// 		variables: { search: searchAnimesQuery, limit: 15 },
// 	});
// 	const debouncedSearchAnimesQuery = useDebounce(searchAnimesQuery, 700);
// 	const inputRef = useRef<HTMLInputElement>(null);
// 	const { toggleOpen } = useSearchStore();

// 	const onSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
// 		setSearchAnimesQuery(event.target.value);
// 	};

// 	useEffect(() => {
// 		if (
// 			debouncedSearchAnimesQuery !== "" &&
// 			debouncedSearchAnimesQuery !== localStorage.getItem("last_search")
// 		) {
// 			console.log("SEARCHED", debouncedSearchAnimesQuery);

// 			refetchSearchAnimes();
// 			localStorage.setItem("last_search", debouncedSearchAnimesQuery);
// 		}
// 	}, [debouncedSearchAnimesQuery, refetchSearchAnimes]);

// 	useEffect(() => {
// 		inputRef.current?.focus();
// 	}, [searchAnimesIsLoading]);

// 	useEffect(() => {
// 		document.body.style.overflow = "hidden";

// 		return () => {
// 			document.body.style.overflow = "auto";
// 		};
// 	}, []);

// 	const onSearchSubmit = (event: FormEvent<HTMLFormElement> | null) => {
// 		if (event) {
// 			event.preventDefault();
// 			event.stopPropagation();
// 		}
// 		refetchSearchAnimes();
// 	};

// 	return (
// 		<motion.div
// 			className={styles.container}
// 			initial={{ opacity: 0 }}
// 			animate={{ opacity: 1 }}
// 			exit={{ opacity: 0 }}
// 			transition={{ duration: 0.2 }}
// 			onClick={() => toggleOpen()}
// 		>
// 			<motion.div
// 				className={styles.floating_search_bar}
// 				initial={{ y: -50 }}
// 				animate={{ y: 0 }}
// 				exit={{ y: -50 }}
// 				transition={{ duration: 0.2 }}
// 				onClick={(event) => event.stopPropagation()}
// 			>
// 				<form className={styles.search_form} onSubmit={onSearchSubmit}>
// 					<input
// 						className={styles.search_input}
// 						value={searchAnimesQuery}
// 						placeholder={localStorage.getItem("last_search") || "Search"}
// 						onChange={onSearchInputChange}
// 						disabled={searchAnimesIsLoading}
// 						ref={inputRef}
// 					/>
// 					<div className={styles.search_actions}>
// 						<Button className={styles.search_button} onClick={() => onSearchSubmit(null)}>
// 							<SearchIcon />
// 						</Button>
// 					</div>
// 				</form>
// 				{searchAnimesIsLoading ? (
// 					<Loader fullscreen />
// 				) : (
// 					<AnimeList>
// 						{searchAnimes?.map((anime) => {
// 							return (
// 								<AnimeVerticalCard
// 									key={anime.id}
// 									id={anime.id}
// 									poster={anime.poster.mainUrl}
// 									name={anime.name}
// 									episodes={anime.episodes}
// 									// anime={{ id: anime.id, poster: anime.poster.main2xUrl, name: anime.name }}
// 									onClick={() => toggleOpen()}
// 								/>
// 							);
// 						})}
// 					</AnimeList>
// 				)}
// 			</motion.div>
// 		</motion.div>
// 	);
// };
