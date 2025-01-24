import { Link } from "@tanstack/react-router";
import styles from "./home.page.module.css";
import { useState } from "react";
import { useGetAnimes } from "@features/animes/api/getAnimes/getAnimes.api.ts";
import { Button } from "@components/ui/Button/Button.tsx";
import { VideoPlayerOld } from "@components/ui/VideoPlayerOld/VideoPlayerOld";
import { VideoPlayer } from "@components/ui/VideoPlayer/VideoPlayer.tsx";
import { Typography } from "@components/ui/Typography/Typography.tsx";
import { Divider } from "@components/ui/Divider/Divider.tsx";

export const HomePage = () => {
	const [query, setQuery] = useState("");

	const { data, refetch } = useGetAnimes({
		variables: { search: query, limit: 2 },
		enabled: false,
	});

	return (
		<div className={styles.page}>
			<h3>Home Page</h3>
			<div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}></div>

			<Link to="/users/$userId" params={{ userId: "1026254" }}>
				User
			</Link>

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

			<input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
			<Button onClick={() => refetch()}>search</Button>

			<div className={styles.animeCards}>
				{data &&
					data.map((item) => (
						<Link key={item.id} to={`/animes/$animeId`} params={{ animeId: String(item.id) }}>
							<div className={styles.animeCard}>
								<img src={item.poster.originalUrl} className={styles.animeImage} />
								<div className={styles.animeInfo}>
									<div className={styles.animeTitle}>{item.name}</div>
								</div>
							</div>
						</Link>
					))}
			</div>

			<Typography>New</Typography>
			<VideoPlayer src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" />
			<Divider spacing />
			<Typography>Old</Typography>
			<VideoPlayerOld src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" />

			{/* <Link to=""></Link> */}
		</div>
	);
};
