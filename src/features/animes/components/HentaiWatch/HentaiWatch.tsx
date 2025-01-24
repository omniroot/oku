import { IAnime } from "@features/animes/api/anime.interface.ts";
import { FC } from "react";
import styles from "./HentaiWatch.module.css";
import { HeadingSection } from "@components/ui/HeadingSection/HeadingSection.tsx";
import { openAnimeExternal } from "@/shared/utils/openAnimeSites.ts";
import { Button } from "@components/ui/Button/Button.tsx";
import { useExternalSites } from "@features/animes/hooks/useExternalSites.tsx";

interface IHentaiWatchProps {
	anime: IAnime;
}

export const HentaiWatch: FC<IHentaiWatchProps> = ({ anime }) => {
	const { openHentaiHaven } = useExternalSites();

	const openGoogle = (langauge: "ru" | "en") => {
		window.open(
			`https://www.google.com/search?q=${anime.name} ${langauge === "ru" ? "хентай" : "hentai"}`,
			"_blank",
		);
	};
	return (
		<HeadingSection title={`Watch`}>
			<div className={styles.hentai_watch}>
				<Button onClick={() => openHentaiHaven(anime.name)}>HentaiHaven</Button>
				<Button onClick={() => openAnimeExternal(anime.name, "nhentai")} variant="nhentai">
					NHentai
				</Button>
				<Button onClick={() => openAnimeExternal(anime.name, "hanime")} variant="hanime">
					HAnime
				</Button>
				<Button onClick={() => openGoogle("ru")} variant="secondary">
					Russian Google
				</Button>
				<Button onClick={() => openGoogle("en")} variant="secondary">
					English Google
				</Button>
			</div>
		</HeadingSection>
	);
};
