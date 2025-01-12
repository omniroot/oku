import { Typography } from "@components/ui/Typography/Typography.tsx";
import styles from "./home.page.module.css";

export const HomePage = () => {
	return (
		<div className={styles.page}>
			<h3>Home Page</h3>
			<div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
				<Typography size="xl">Delete 2 files?</Typography>
				<Typography size="base">Are you sure you want to delete this 2 files?</Typography>
				<Typography size="xs">0.75rem</Typography>
				<Typography size="sm">1rem</Typography>
				<Typography size="base">1.25rem</Typography>
				<Typography size="lg">1.5rem</Typography>
				<Typography size="xl">1.75rem</Typography>
				<Typography size="2xl">2rem</Typography>
				<Typography size="3xl">2.25rem</Typography>
				<Typography size="4xl">2.5rem</Typography>
				<Typography size="5xl">2.75rem</Typography>
				<Typography size="6xl">3rem</Typography>
			</div>

			<div
				style={{
					backgroundColor: "var(--color-background)",
					padding: "1rem",
					borderRadius: "32px",
				}}
			>
				background
				<div
					style={{
						backgroundColor: "var(--color-secondary)",
						padding: "1rem",
						borderRadius: "32px",
					}}
				>
					secondary
					<div
						style={{
							backgroundColor: "var(--color-primary)",
							padding: "1rem",
							borderRadius: "32px",
						}}
					>
						primary
					</div>
				</div>
			</div>

			{/* <Link to=""></Link> */}
		</div>
	);
};
