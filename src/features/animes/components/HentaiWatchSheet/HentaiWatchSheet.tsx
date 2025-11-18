import { openAnimeExternal } from "@/shared/utils/openAnimeSites.ts";
import { BottomSheet } from "@components/ui/BottomSheet/BottomSheet.tsx";
import { Button } from "@components/ui/Button/Button.tsx";
import type { IAnime } from "@features/animes/api/anime.interface.ts";
import { useExternalSites } from "@features/animes/hooks/useExternalSites.tsx";
import type { FC } from "react";
import styles from "./HentaiWatchSheet.module.css";

interface IHentaiWatchSheetProps {
	anime: IAnime;
	isShow: boolean;
	onOutsideClick: () => void;
}
export const HentaiWatchSheet: FC<IHentaiWatchSheetProps> = ({
	anime,
	isShow,
	onOutsideClick,
}) => {
	const { openHentaiHaven } = useExternalSites();
	const openGoogle = (langauge: "ru" | "en") => {
		if (langauge === "ru") {
			window.open(`https://www.google.com/search?q=${anime.russian} хентай`, "_blank");
		} else {
			window.open(`https://www.google.com/search?q=${anime.name} hentai`, "_blank");
		}
	};

	return (
		<BottomSheet
			isShow={isShow}
			onOutsideClick={onOutsideClick}
			title="Watch"
			className={styles.content}
		>
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
		</BottomSheet>
	);
};
