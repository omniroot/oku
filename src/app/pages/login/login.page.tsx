import { LoginIcon } from "@/shared/assets/icons/LoginIcon.tsx";
import { CONSTS } from "@/shared/consts/consts.ts";
import { Typography } from "@components/ui/Typography/Typography.tsx";
import { useAuth } from "@features/auth/hooks/useAuth.tsx";
import { useHeader } from "@features/storage/stores/header.storage.ts";
import { getRouteApi } from "@tanstack/react-router";
import { Button } from "@ui/Button/Button.tsx";
import { useEffect } from "react";
import styles from "./login.page.module.css";

export const LoginPage = () => {
	const { setTitle, setIcon } = useHeader();
	const { code } = getRouteApi("/login").useSearch();
	const { login } = useAuth();
	const onLoginButtonClick = () => {
		console.log("login");

		window.open(CONSTS.OAUTH_URL, "_self");
	};

	useEffect(() => {
		setTitle("Login");
		setIcon(<LoginIcon />);
	}, [setIcon, setTitle]);

	useEffect(() => {
		if (code && code?.length > 1) {
			login(code);
		}
	}, [code, login]);

	return (
		<div className={styles.login_page}>
			{/* <ImageView src="/login_cat.png" className={styles.cat_image} /> */}
			<div className={styles.login_card}>
				<div className={styles.login_header}>
					<Typography variant="title">Login</Typography>
					<Typography className={styles.login_about}>
						To use the application, you need an account on shikimori.one
					</Typography>
				</div>
				<div className={styles.login_actions}>
					<Button onClick={onLoginButtonClick} className={styles.shikimori_button}>
						Shikimori
					</Button>
				</div>
			</div>
		</div>
	);
};

// export const Route = createLazyRoute("/login")({
// 	component: LoginPage,
// });
