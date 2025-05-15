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
import { Checkbox } from "@components/ui/Checkbox/Checkbox.tsx";
import { ColorPreview } from "@components/ui/ColorPreview/ColorPreview.tsx";
import { ListView } from "@components/ui/ListView/ListView.tsx";
import smileys from "~/public/smileys.json";

interface IToken {
	type: string;
	value: string;
}

function isDigit(char: string) {
	return /[0-9]/.test(char);
}

// Проверяем, является ли символ буквой
function isLetter(char: string) {
	return /[a-zA-Z]/.test(char);
}

const lexing = (input: string) => {
	const tokens: IToken[] = [];
	let i = 0;

	while (i < input.length) {
		const char = input[i];

		if (isDigit(char)) {
			let number = "";
			while (i < input.length && isDigit(input[i])) {
				number += input[i];
				i++;
			}
			tokens.push({ type: "number", value: number });
			continue;
		}

		// Распознаем текст
		if (isLetter(char)) {
			let text = "";
			while (i < input.length && (isLetter(input[i]) || isDigit(input[i]))) {
				text += input[i];
				i++;
			}
			tokens.push({ type: "text", value: text });
			continue;
		}

		// Распознаем эмодзи или одиночный ':'
		if (char === ":") {
			let emoji = ":";
			const start = i; // Сохраняем начальную позицию
			i++;
			while (i < input.length && input[i] !== ":") {
				emoji += input[i];
				i++;
			}
			if (i < input.length && input[i] === ":") {
				emoji += ":";
				i++;
				tokens.push({ type: "emoji", value: emoji });
			} else {
				// Если нет закрывающего ':', возвращаем i назад и добавляем только ':'
				tokens.push({ type: "operator", value: ":" });
				i = start + 1; // Возвращаемся к символу после начального ':'
			}
			continue;
		}

		// Для всех остальных символов
		tokens.push({ type: "unknown", value: char });
		i++;
	}
	return tokens;
};

const parsing = (tokens: IToken[]) => {
	let result = "";

	const add = (text: string, newText: string) => {
		if (text[-1] !== " ") text += " ";
		return (text += newText);
	};

	tokens.map((token) => {
		if (token.type == "unknown") return;

		if (token.type == "emoji") {
			const path = smileys.find((s) => s.bbcode === token.value)?.path;
			result = add(result, `<img src="https://shikimori.one${path}" alt="${token.value}" />`);
			return;
		}
		result = add(result, token.value);
	});

	return result;
};

export const decodeShikimori = (text: string) => {
	const tokens = lexing(text);
	return parsing(tokens);
};

export const SettingsPage = () => {
	const { color, changeColor } = useMaterialTheme();
	const { setTitle } = useHeader();
	const [newColor, setNewColor] = useState(color);
	const [checked, setIsChecked] = useState(true);
	const [value, setValue] = useState("<test> hello :heart: world ");
	const [lexer, setLexer] = useState("");

	const { addNotification } = useNotifications();

	const not = useCallback(() => {
		addNotification({ message: `HI ${Math.random()}` });
	}, [addNotification]);

	useEffect(() => {
		setTitle("Settings");
	}, [setTitle]);

	return (
		<div className={styles.page}>
			<HeadingSection title="Change color">
				<ListView orientation="horizontal">
					<Box style={{ width: "100%" }}>
						<Input
							value={newColor}
							onChange={setNewColor}
							onSubmit={() => changeColor(newColor)}
							classNames={{ form: styles.color_input }}
						/>
					</Box>
					<Box alignItems="center">
						<ColorPreview color={newColor} />
					</Box>
				</ListView>
			</HeadingSection>

			<HeadingSection title="Preview theme">
				<div className={styles.preview_colors_content}>
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

				<Checkbox
					checked={checked}
					onChange={() => {
						setIsChecked(!checked);
					}}
				/>

				<Input value={value} onChange={(e) => setValue(e)} />
				<Button onClick={() => setLexer(parsing(lexing(value)))}>Lexer</Button>
				<span>{lexer}</span>

				<Button onClick={not}>Add notificaition</Button>
				<Button onClick={not} style={{ backgroundColor: "var(--color-primary)" }}>
					Add notificaition
				</Button>
			</HeadingSection>
		</div>
	);
};

export const Route = createLazyRoute("/settings")({
	component: SettingsPage,
});
