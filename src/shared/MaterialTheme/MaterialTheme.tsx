import {
	getMaterialScheme,
	applyMaterialTheme,
} from "@/shared/MaterialTheme/MaterialTheme.utils.ts";
import { IUIColor } from "@components/ui/UIProvider/UIProvider.types.ts";
import { useState, useEffect, useContext, createContext } from "react";
import "./MaterialTheme.module.css";
interface IProps {
	defaultColor?: string;
	type?: "dark" | "light";
}

const MaterialThemeContext = createContext<
	| {
			color: string;
			changeColor: (color: string) => void;
			getVar: (name: string | undefined, type?: "background" | "color") => string | undefined;
	  }
	| undefined
>(undefined);

export const MaterialThemeProvider = ({
	children,
	defaultColor = "#ee715a",
	type = "dark",
}: IProps & { children: React.ReactNode }) => {
	const [color, setColor] = useState(() => {
		const savedColor = localStorage.getItem("material-theme-color");
		return savedColor || defaultColor;
	});

	useEffect(() => {
		const scheme = getMaterialScheme(color);
		console.log(`Scheme generated from ${color} color! `, scheme);
		applyMaterialTheme(scheme, { type });
		localStorage.setItem("material-theme-color", color);
	}, [color, type]);

	const changeColor = (color: string) => {
		const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
		if (hexPattern.test(color)) {
			setColor(color);
			console.log("Apply theme: ", color);
		} else {
			console.error(
				"Недопустимый HEX-цвет. Используйте формат #RRGGBB или #RGB, используется цвет по умолчанию или #ee715a",
			);
			setColor(defaultColor || "#ee715a");
		}
	};

	const getVar = (name: IUIColor | string | undefined, type: "background" | "color" = "color") => {
		if (!name) return;
		const convertedName = name.toLocaleLowerCase().replaceAll("_", "-");
		// console.log({ convertedName });

		return `var(--md-${type === "color" ? "on-" : ""}${convertedName})`;
	};

	return (
		<MaterialThemeContext.Provider value={{ color, changeColor, getVar }}>
			{children}
		</MaterialThemeContext.Provider>
	);
};

export const useMaterialTheme = () => {
	const context = useContext(MaterialThemeContext);
	if (!context) {
		throw new Error("useMaterialTheme must be used within a MaterialThemeProvider");
	}
	return context;
};
