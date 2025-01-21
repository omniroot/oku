import { FloatingSearchBar } from "@features/search/components/FloatingSearchBar/FloatingSearchBar.tsx";
import { useSearchStore } from "@features/search/store/search.store.ts";
import { useMediaQuery } from "@uidotdev/usehooks";
import { AnimatePresence } from "motion/react";

export const SearchLayout = () => {
	const isMobile = useMediaQuery("only screen and (max-width: 768px)");
	const { isOpened, toggleOpen } = useSearchStore();
	return (
		<>
			{/* {(isTablet || isDesktop) && <FloatingSearchButton />} */}
			<AnimatePresence>{isMobile && isOpened && <FloatingSearchBar />}</AnimatePresence>
		</>
	);
};
