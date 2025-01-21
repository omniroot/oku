import { SearchIcon } from "@/shared/assets/icons/SearchIcon.tsx";
import { SettingsIcon } from "@/shared/assets/icons/SettingsIcon.tsx";
import { Typography } from "@components/ui/Typography/Typography.tsx";
import { useSearchStore } from "@features/search/store/search.store.ts";
import { useHeader } from "@features/storage/stores/header.storage";
import { AnimatePresence } from "motion/react";
import styles from "./Header.module.css";

export const Header = () => {
	const { toggleOpen } = useSearchStore();
	const { title, icon } = useHeader();
	return (
		<header className={styles.header}>
			<AnimatePresence mode="popLayout">
				<div
					className={styles.left}
					// initial={{ opacity: 0 }}
					// animate={{ opacity: 1 }}
					// exit={{ opacity: 0 }}
				>
					{icon && icon}
					<Typography size="title" weight="title">
						{title}
					</Typography>
				</div>
			</AnimatePresence>
			<div className={styles.right}>
				<SearchIcon onClick={() => toggleOpen()} />
				<SettingsIcon />
			</div>
		</header>
	);
};
