import { MaterialScheme } from "@/shared/MaterialTheme/MaterialTheme.types.ts";
import { Hct, TonalPalette, argbFromHex, hexFromArgb } from "@material/material-color-utilities";

export function getMaterialScheme(sourceColor: string): {
	light: MaterialScheme;
	dark: MaterialScheme;
	neutral: TonalPalette;
} {
	const sourceHct = Hct.fromInt(argbFromHex(sourceColor));
	const primaryPalette = TonalPalette.fromHueAndChroma(sourceHct.hue, 36);
	const secondaryPalette = TonalPalette.fromHueAndChroma(sourceHct.hue, 16);
	const tertiaryPalette = TonalPalette.fromHueAndChroma(sourceHct.hue + 60, 24);
	const neutralPalette = TonalPalette.fromHueAndChroma(sourceHct.hue, 6);
	const neutralVariantPalette = TonalPalette.fromHueAndChroma(sourceHct.hue, 8);
	const errorPalette = TonalPalette.fromHueAndChroma(25, 84);

	const lightScheme: MaterialScheme = {
		primary: hexFromArgb(primaryPalette.tone(40)),
		onPrimary: hexFromArgb(primaryPalette.tone(100)),
		primaryContainer: hexFromArgb(primaryPalette.tone(90)),
		onPrimaryContainer: hexFromArgb(primaryPalette.tone(10)),
		primaryFixed: hexFromArgb(primaryPalette.tone(90)),
		primaryFixedDim: hexFromArgb(primaryPalette.tone(80)),
		onPrimaryFixed: hexFromArgb(primaryPalette.tone(10)),
		onPrimaryFixedVariant: hexFromArgb(primaryPalette.tone(30)),
		secondary: hexFromArgb(secondaryPalette.tone(40)),
		onSecondary: hexFromArgb(secondaryPalette.tone(100)),
		secondaryContainer: hexFromArgb(secondaryPalette.tone(90)),
		onSecondaryContainer: hexFromArgb(secondaryPalette.tone(10)),
		secondaryFixed: hexFromArgb(secondaryPalette.tone(90)),
		secondaryFixedDim: hexFromArgb(secondaryPalette.tone(80)),
		onSecondaryFixed: hexFromArgb(secondaryPalette.tone(10)),
		onSecondaryFixedVariant: hexFromArgb(secondaryPalette.tone(30)),
		tertiary: hexFromArgb(tertiaryPalette.tone(40)),
		onTertiary: hexFromArgb(tertiaryPalette.tone(100)),
		tertiaryContainer: hexFromArgb(tertiaryPalette.tone(90)),
		onTertiaryContainer: hexFromArgb(tertiaryPalette.tone(10)),
		tertiaryFixed: hexFromArgb(tertiaryPalette.tone(90)),
		tertiaryFixedDim: hexFromArgb(tertiaryPalette.tone(80)),
		onTertiaryFixed: hexFromArgb(tertiaryPalette.tone(10)),
		onTertiaryFixedVariant: hexFromArgb(tertiaryPalette.tone(30)),
		error: hexFromArgb(errorPalette.tone(40)),
		onError: hexFromArgb(errorPalette.tone(100)),
		errorContainer: hexFromArgb(errorPalette.tone(90)),
		onErrorContainer: hexFromArgb(errorPalette.tone(10)),
		background: hexFromArgb(neutralPalette.tone(98)),
		onBackground: hexFromArgb(neutralPalette.tone(10)),
		surface: hexFromArgb(neutralPalette.tone(98)),
		onSurface: hexFromArgb(neutralPalette.tone(10)),
		surfaceVariant: hexFromArgb(neutralVariantPalette.tone(90)),
		onSurfaceVariant: hexFromArgb(neutralVariantPalette.tone(30)),
		outline: hexFromArgb(neutralVariantPalette.tone(50)),
		outlineVariant: hexFromArgb(neutralVariantPalette.tone(80)),
		shadow: hexFromArgb(neutralPalette.tone(0)),
		scrim: hexFromArgb(neutralPalette.tone(0)),
		inverseSurface: hexFromArgb(neutralPalette.tone(20)),
		inverseOnSurface: hexFromArgb(neutralPalette.tone(95)),
		inversePrimary: hexFromArgb(primaryPalette.tone(80)),
		surfaceTint: hexFromArgb(primaryPalette.tone(80)),
	};

	const darkScheme: MaterialScheme = {
		primary: hexFromArgb(primaryPalette.tone(80)),
		onPrimary: hexFromArgb(primaryPalette.tone(20)),
		primaryContainer: hexFromArgb(primaryPalette.tone(30)),
		onPrimaryContainer: hexFromArgb(primaryPalette.tone(90)),
		primaryFixed: hexFromArgb(primaryPalette.tone(90)),
		primaryFixedDim: hexFromArgb(primaryPalette.tone(80)),
		onPrimaryFixed: hexFromArgb(primaryPalette.tone(10)),
		onPrimaryFixedVariant: hexFromArgb(primaryPalette.tone(30)),
		secondary: hexFromArgb(secondaryPalette.tone(80)),
		onSecondary: hexFromArgb(secondaryPalette.tone(20)),
		secondaryContainer: hexFromArgb(secondaryPalette.tone(30)),
		onSecondaryContainer: hexFromArgb(secondaryPalette.tone(90)),
		secondaryFixed: hexFromArgb(secondaryPalette.tone(90)),
		secondaryFixedDim: hexFromArgb(secondaryPalette.tone(80)),
		onSecondaryFixed: hexFromArgb(secondaryPalette.tone(10)),
		onSecondaryFixedVariant: hexFromArgb(secondaryPalette.tone(30)),
		tertiary: hexFromArgb(tertiaryPalette.tone(80)),
		onTertiary: hexFromArgb(tertiaryPalette.tone(20)),
		tertiaryContainer: hexFromArgb(tertiaryPalette.tone(30)),
		onTertiaryContainer: hexFromArgb(tertiaryPalette.tone(90)),
		tertiaryFixed: hexFromArgb(tertiaryPalette.tone(90)),
		tertiaryFixedDim: hexFromArgb(tertiaryPalette.tone(80)),
		onTertiaryFixed: hexFromArgb(tertiaryPalette.tone(0)),
		onTertiaryFixedVariant: hexFromArgb(tertiaryPalette.tone(30)),
		error: hexFromArgb(errorPalette.tone(80)),
		onError: hexFromArgb(errorPalette.tone(20)),
		errorContainer: hexFromArgb(errorPalette.tone(30)),
		onErrorContainer: hexFromArgb(errorPalette.tone(90)),
		background: hexFromArgb(neutralPalette.tone(6)),
		onBackground: hexFromArgb(neutralPalette.tone(90)),
		surface: hexFromArgb(neutralPalette.tone(6)),
		onSurface: hexFromArgb(neutralPalette.tone(90)),
		surfaceVariant: hexFromArgb(neutralVariantPalette.tone(30)),
		onSurfaceVariant: hexFromArgb(neutralVariantPalette.tone(80)),
		outline: hexFromArgb(neutralVariantPalette.tone(60)),
		outlineVariant: hexFromArgb(neutralVariantPalette.tone(30)),
		shadow: hexFromArgb(neutralPalette.tone(0)),
		scrim: hexFromArgb(neutralPalette.tone(0)),
		inverseSurface: hexFromArgb(neutralPalette.tone(90)),
		inverseOnSurface: hexFromArgb(neutralPalette.tone(20)),
		inversePrimary: hexFromArgb(primaryPalette.tone(40)),
		surfaceTint: hexFromArgb(primaryPalette.tone(80)),
	};

	return { light: lightScheme, dark: darkScheme, neutral: neutralPalette };
}

export function applyMaterialTheme(
	scheme: { light: MaterialScheme; dark: MaterialScheme; neutral: TonalPalette },
	options: { type: "light" | "dark"; element?: HTMLElement } = {
		type: "light",
		element: document.body,
	},
): void {
	const { type, element = document.body } = options;
	const baseScheme = type === "light" ? scheme.light : scheme.dark;

	const cssVariables = [
		[`--md-background`, baseScheme.background],
		[`--md-error`, baseScheme.error],
		[`--md-error-container`, baseScheme.errorContainer],
		[`--md-inverse-on-surface`, baseScheme.inverseOnSurface],
		[`--md-inverse-primary`, baseScheme.inversePrimary],
		[`--md-inverse-surface`, baseScheme.inverseSurface],
		[`--md-on-background`, baseScheme.onBackground],
		[`--md-on-error`, baseScheme.onError],
		[`--md-on-error-container`, baseScheme.onErrorContainer],
		[`--md-on-primary`, baseScheme.onPrimary],
		[`--md-on-primary-container`, baseScheme.onPrimaryContainer],
		[`--md-on-primary-fixed`, baseScheme.onPrimaryFixed],
		[`--md-on-primary-fixed-variant`, baseScheme.onPrimaryFixedVariant],
		[`--md-on-secondary`, baseScheme.onSecondary],
		[`--md-on-secondary-container`, baseScheme.onSecondaryContainer],
		[`--md-on-secondary-fixed`, baseScheme.onSecondaryFixed],
		[`--md-on-secondary-fixed-variant`, baseScheme.onSecondaryFixedVariant],
		[`--md-on-surface`, baseScheme.onSurface],
		[`--md-on-surface-variant`, baseScheme.onSurfaceVariant],
		[`--md-on-tertiary`, baseScheme.onTertiary],
		[`--md-on-tertiary-container`, baseScheme.onTertiaryContainer],
		[`--md-on-tertiary-fixed`, baseScheme.onTertiaryFixed],
		[`--md-on-tertiary-fixed-variant`, baseScheme.onTertiaryFixedVariant],
		[`--md-outline`, baseScheme.outline],
		[`--md-outline-variant`, baseScheme.outlineVariant],
		[`--md-primary`, baseScheme.primary],
		[`--md-primary-container`, baseScheme.primaryContainer],
		[`--md-primary-fixed`, baseScheme.primaryFixed],
		[`--md-primary-fixed-dim`, baseScheme.primaryFixedDim],
		[`--md-scrim`, baseScheme.scrim],
		[`--md-secondary`, baseScheme.secondary],
		[`--md-secondary-container`, baseScheme.secondaryContainer],
		[`--md-secondary-fixed`, baseScheme.secondaryFixed],
		[`--md-secondary-fixed-dim`, baseScheme.secondaryFixedDim],
		[`--md-shadow`, baseScheme.shadow],
		[`--md-source-color`, "#ee715a"], // фиксированное значение
		[`--md-surface`, baseScheme.surface],
		[`--md-surface-bright`, hexFromArgb(scheme.neutral.tone(type === "light" ? 24 : 27))], // подогнано под #423735
		[`--md-surface-container`, hexFromArgb(scheme.neutral.tone(type === "light" ? 12 : 12))],
		[`--md-surface-container-high`, hexFromArgb(scheme.neutral.tone(type === "light" ? 17 : 17))],
		[
			`--md-surface-container-highest`,
			hexFromArgb(scheme.neutral.tone(type === "light" ? 22 : 23)),
		],
		[`--md-surface-container-low`, hexFromArgb(scheme.neutral.tone(type === "light" ? 10 : 11))],
		[`--md-surface-container-lowest`, hexFromArgb(scheme.neutral.tone(type === "light" ? 4 : 5))],
		[`--md-surface-dim`, hexFromArgb(scheme.neutral.tone(type === "light" ? 6 : 6))], // подогнано под #1a1110
		[`--md-surface-tint`, baseScheme.surfaceTint],
		[`--md-surface-variant`, baseScheme.surfaceVariant],
		[`--md-tertiary`, baseScheme.tertiary],
		[`--md-tertiary-container`, baseScheme.tertiaryContainer],
		[`--md-tertiary-fixed`, baseScheme.tertiaryFixed],
		[`--md-tertiary-fixed-dim`, baseScheme.tertiaryFixedDim],
	]
		.map(([name, value]) => `${name}: ${value};`)
		.join("\n");

	element.style.cssText = cssVariables;
	// console.log("Generated CSS Variables:\n", cssVariables);
}
