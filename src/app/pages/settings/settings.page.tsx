// import { Button } from "@ui/Button/Button.tsx";
// import { Divider } from "@ui/Divider/Divider.tsx";
// import { HeadingSection } from "@ui/HeadingSection/HeadingSection.tsx";
import { Typography } from "@components/ui/Typography/Typography.tsx";
import styles from "./settings.page.module.css";
// import { createLazyRoute } from "@tanstack/react-router";

import { createLazyRoute } from "@tanstack/react-router";
import { Button } from "@components/ui/Button/Button.tsx";
import { Divider } from "@components/ui/Divider/Divider.tsx";
import { HeadingSection } from "@components/ui/HeadingSection/HeadingSection.tsx";

export const SettingsPage = () => {
	return (
		<div className={styles.page}>
			<Typography>Settings page</Typography>
			<HeadingSection title="Preview theme">
				<div className={styles.preview_colors_content}>
					<div className={styles.preview_colors}>
						<section>
							<span>Background:</span>
							<Button circle className={styles.preview_primary}></Button>
							<Button circle className={styles.preview_secondary}></Button>
							<Button circle className={styles.preview_ternary}></Button>
							<Divider orientation="vertical" />
						</section>
						<section>
							<span>Text:</span>
							<Button circle className={styles.preview_text}></Button>
							<Button circle className={styles.preview_subtext}></Button>
							<Button circle className={styles.preview_alttext}></Button>
						</section>
					</div>
					<Divider spacing />
					<Button variant="primary">Primary Button</Button>
					<Button variant="secondary">Secondary Button</Button>
					<Button variant="tertiary">Tertiary Button</Button>
					<Button variant="outline">Outline Button</Button>
					<Button variant="outline" loading>
						Outline Button
					</Button>
					<Button variant="gradient">Gradient Button</Button>
					<Button variant="ghost">Ghost Button</Button>
					<Button variant="delete">Delete Button</Button>
				</div>
			</HeadingSection>
		</div>
	);
	// 	const { theme, changeTheme } = useSettings();
	// 	const onToggleHeaderClick = () => {
	// 		// toggleShowHeader();
	// 	};
	// 	return (
	// 		<div className={styles.settings_page}>
	// 			<span className={styles.settings_heading}>Settings</span>
	// 			<Button onClick={onToggleHeaderClick}>Toggle Header</Button>
	// 			<Select
	// 				defaultValue={{ value: theme, label: theme }}
	// 				onActiveChange={(newTheme) => changeTheme(newTheme as typeof theme)}
	// 				positionX="right"
	// 			>
	// 				<SelectContent>
	// 					{THEMES.map((theme) => {
	// 						return (
	// 							<SelectItem key={theme} value={theme}>
	// 								{theme}
	// 							</SelectItem>
	// 						);
	// 					})}
	// 				</SelectContent>
	// 			</Select>

	// 		</div>
	// 	);
};

export const Route = createLazyRoute("/settings")({
	component: SettingsPage,
});
