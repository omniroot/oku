import { FC } from "react";

interface ITypographyProps
	extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	size: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
}
export const Typography: FC<ITypographyProps> = ({ children, size = "xs", ...props }) => {
	return (
		<span style={{ fontSize: `var(--text-size-${size})` }} {...props}>
			{children}
		</span>
	);
};
