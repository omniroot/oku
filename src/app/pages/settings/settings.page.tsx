import { Typography } from "@components/ui/Typography/Typography.tsx";
import styles from "./settings.page.module.css";

import { Accordion } from "@components/ui/Accordion/Accordion.tsx";
import { Box } from "@components/ui/Box/Box.tsx";
import { Button } from "@components/ui/Button/Button.tsx";
import { Divider } from "@components/ui/Divider/Divider.tsx";
import { HeadingSection } from "@components/ui/HeadingSection/HeadingSection.tsx";
import { Input } from "@components/ui/Input/Input.tsx";
import { createLazyRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { useMaterialTheme } from "@/shared/MaterialTheme/MaterialTheme.tsx";
import { useHeader } from "@features/storage/stores/header.storage.ts";
import { useNotifications } from "@features/notifications/stores/notifications.store.tsx";

export const SettingsPage = () => {
	const { color, changeColor } = useMaterialTheme();
	const { setTitle } = useHeader();
	const [newColor, setNewColor] = useState(color);

	const { addNotification } = useNotifications();

	const not = useCallback(() => {
		addNotification({ message: `HI ${Math.random()}` });
	}, [addNotification]);

	useEffect(() => {
		setTitle("Settings");
	}, [setTitle]);

	return (
		<div className={styles.page}>
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
					<Input value={newColor} onChange={setNewColor} onSubmit={() => changeColor(newColor)} />
					<Accordion title="Colors">
						<Box color="primary" backgroundColor="primary">
							primary
						</Box>
						<Box color="primary_container" backgroundColor="primary_container">
							primary container
						</Box>
						<Box color="secondary" backgroundColor="secondary">
							secondary
						</Box>
						<Box color="secondary_container" backgroundColor="secondary_container">
							secondary container
						</Box>
						<Box color="tertiary" backgroundColor="tertiary">
							tertiary
						</Box>
						<Box color="tertiary_container" backgroundColor="tertiary_container">
							tertiary container
						</Box>
						<Box color="error" backgroundColor="error">
							error
						</Box>
						<Box color="error_container" backgroundColor="error_container">
							error container
						</Box>
						<Box color="surface" backgroundColor="surface">
							surface
						</Box>
						<Box color="surface_container" backgroundColor="surface_container">
							surface container
						</Box>
						<Box color="surface_container_high" backgroundColor="surface_container_high">
							surface container high
						</Box>
					</Accordion>
					<Accordion title="Buttons">
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
						<Button variant="error">Error Button</Button>
					</Accordion>
					<Accordion title="Typography">
						<Typography variant="display" size="large">
							display large
						</Typography>
						<Typography variant="display" size="medium">
							display medium
						</Typography>
						<Typography variant="display" size="small">
							display small
						</Typography>
						<Divider spacing />
						<Typography variant="headline" size="large">
							headline large
						</Typography>
						<Typography variant="headline" size="medium">
							headline medium
						</Typography>
						<Typography variant="headline" size="small">
							headline small
						</Typography>
						<Divider spacing />
						<Typography variant="title" size="large">
							title large
						</Typography>
						<Typography variant="title" size="medium">
							title medium
						</Typography>
						<Typography variant="title" size="small">
							title small
						</Typography>
						<Divider spacing />
						<Typography variant="body" size="large">
							body large
						</Typography>
						<Typography variant="body" size="medium">
							body medium
						</Typography>
						<Typography variant="body" size="small">
							body small
						</Typography>
						<Divider spacing />
						<Typography variant="label" size="large">
							label large
						</Typography>
						<Typography variant="label" size="medium">
							label medium
						</Typography>
						<Typography variant="label" size="small">
							label small
						</Typography>
					</Accordion>
				</div>
				<Accordion title="Accrodion">
					<Typography variant="label" size="large">
						label size large
					</Typography>
					<Typography variant="label" size="medium">
						label size medium
					</Typography>
					<Typography variant="label" size="small">
						label size small
					</Typography>
					<div className={styles.block} style={{ backgroundColor: "var(--tertiary)" }}>
						<Typography variant="headline" color="tertiary">
							Typography
						</Typography>
					</div>
					{/* <div className={styles.block} style={{ backgroundColor: getMd("primary") }}>
					<span style={{ color: getMd("on-primary") }}>new</span>
				</div> */}
				</Accordion>

				<Button onClick={not}>Add notificaition</Button>
				<Button onClick={not} style={{ backgroundColor: "var(--color-primary)" }}>
					Add notificaition
				</Button>

				<div
					className={styles.block}
					style={{ backgroundColor: "var(--surface_container_lowest)" }}
				>
					surface_container_lowest
				</div>
				<div className={styles.block} style={{ backgroundColor: "var(--surface)" }}>
					<Typography color="surface">surface</Typography>
				</div>
				<div className={styles.block} style={{ backgroundColor: "var(--surface_container_low)" }}>
					<Typography color="surface">surface_container_low</Typography>
				</div>
				<div className={styles.block} style={{ backgroundColor: "var(--surface_container)" }}>
					surface_container
				</div>
				<div className={styles.block} style={{ backgroundColor: "var(--surface_container_high)" }}>
					surface_container_high
				</div>
				<div
					className={styles.block}
					style={{ backgroundColor: "var(--surface_container_highest)" }}
				>
					surface_container_highest
				</div>
				<div className={styles.block} style={{ backgroundColor: "var(--secondary)" }}>
					<Typography color="secondary">hello world</Typography>
				</div>

				<div className={styles.block} style={{ backgroundColor: "var(--tertiary)" }}>
					<Typography color="tertiary">hello world</Typography>
				</div>
				<div className={styles.block} style={{ backgroundColor: "var(--error)" }}>
					<Typography color="error">hello world</Typography>
				</div>
				<div className={styles.block} style={{ backgroundColor: "var(--error_container)" }}>
					<Typography color="error_container">hello world</Typography>
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
