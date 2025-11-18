import { HomeIcon } from "@/shared/assets/icons/HomeIcon.tsx";
import { SearchIcon } from "@/shared/assets/icons/SearchIcon.tsx";
import { useAuth } from "@features/auth/hooks/useAuth.tsx";
import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import styles from "./ModernBottomNavigation.module.css";
import { UserIcon } from "@/shared/assets/icons/UserIcon.tsx";
import { LoginIcon } from "@/shared/assets/icons/LoginIcon.tsx";

export const ModernBottomNavigation = () => {
	const { userId, isAuthorized } = useAuth();
	const bottomNavigationRef = useRef<HTMLDivElement>(null);
	const activeIndicatorRef = useRef<HTMLDivElement>(null);
	const activeIndicatorStartRef = useRef<HTMLDivElement>(null);
	const activeIndicatorEndRef = useRef<HTMLDivElement>(null);
	const [prevActiveItem, setPrevActiveItem] = useState<HTMLLinkElement | null>(null);
	const currentUrl = useLocation().pathname;

	// pizdec eto rabotaet 6:00 am
	// ok it work on right direction but on left...
	// ok next day, left direction work to
	// why i use 2 animation elements, i think it will be work with one element
	// TODO: Delete one of animation element

	useEffect(() => {
		console.log(
			"num",
			activeIndicatorRef.current,
			activeIndicatorStartRef.current,
			activeIndicatorEndRef.current,
			bottomNavigationRef.current,
			activeIndicatorStartRef,
			activeIndicatorEndRef,
		);

		if (
			activeIndicatorRef.current &&
			activeIndicatorStartRef.current &&
			activeIndicatorEndRef.current &&
			bottomNavigationRef.current &&
			activeIndicatorStartRef &&
			activeIndicatorEndRef
		) {
			const activeItem = document.getElementById("active_bn") as HTMLLinkElement;
			if (!activeItem) {
				activeIndicatorRef.current.style.visibility = "hidden";
				activeIndicatorStartRef.current.style.visibility = "hidden";
				activeIndicatorEndRef.current.style.visibility = "hidden";
				return;
			}

			const bottomNavgationWidth = bottomNavigationRef.current.offsetWidth;

			const previousItemLeftOffset = prevActiveItem?.offsetLeft ?? 4;
			const previousItemRightOffset =
				bottomNavgationWidth - (prevActiveItem?.offsetLeft || 0) || 4;

			const activeItemLeftOffset = activeItem.offsetLeft;
			const activeItemRightOffset = bottomNavgationWidth - (activeItem.offsetLeft || 0);

			const padding = Number(bottomNavigationRef.current.style.padding);
			const toRight = 3;

			const toLeft = 6;

			console.log({
				activeItemLink: activeItem.href,
				previousItemLeftOffset,
				previousItemRightOffset,
				activeItemLeftOffset,
				activeItemRightOffset,
			});

			console.log(123);

			const direction =
				activeItem.offsetLeft > activeIndicatorRef.current.offsetLeft ? "right" : "left";

			// move active indicator (don`t touch it)
			activeIndicatorRef.current.style.visibility = "visible";
			activeIndicatorRef.current.style.left = activeItem.offsetLeft + "px";

			// initial
			activeIndicatorStartRef.current.style.left = "unset";
			activeIndicatorStartRef.current.style.right = "unset";
			activeIndicatorEndRef.current.style.left = "unset";
			activeIndicatorEndRef.current.style.right = "unset";

			activeIndicatorStartRef.current.style.visibility = "hidden";
			activeIndicatorStartRef.current.style.width = 50 + "px";
			activeIndicatorEndRef.current.style.visibility = "hidden";
			activeIndicatorEndRef.current.style.width = 50 + "px";
			activeIndicatorEndRef.current.style.transition = "none";

			if (direction === "right") {
				activeIndicatorStartRef.current.style.visibility = "visible";

				activeIndicatorStartRef.current.style.left =
					previousItemLeftOffset - toRight + "px";
				activeIndicatorStartRef.current.style.width =
					activeItemLeftOffset - previousItemLeftOffset - padding + 50 + "px";

				setTimeout(() => {
					if (!activeIndicatorStartRef.current || !activeIndicatorEndRef.current) return;

					console.log(activeItem.offsetLeft);
					activeIndicatorStartRef.current.style.visibility = "hidden";
					activeIndicatorEndRef.current.style.visibility = "visible";

					activeIndicatorEndRef.current.style.width =
						previousItemRightOffset - activeItemRightOffset + 50 + toRight + "px";
					activeIndicatorEndRef.current.style.right =
						activeItemRightOffset - 50 - toLeft + "px";

					setTimeout(() => {
						if (!activeIndicatorStartRef.current || !activeIndicatorEndRef.current)
							return;
						activeIndicatorEndRef.current.style.transition = "width 350ms ease";
						activeIndicatorEndRef.current.style.width = "50px";

						// 	setTimeout(() => {
						// 		activeIndicatorEndRef.current.style.visibility = "hidden";
						// 	}, 350);
						// }, 350);
					}, 350);
				}, 350);
			} else {
				activeIndicatorStartRef.current.style.visibility = "visible";

				activeIndicatorStartRef.current.style.right =
					previousItemRightOffset - 50 - toLeft + "px";
				activeIndicatorStartRef.current.style.width =
					activeItemRightOffset - previousItemRightOffset - padding + 50 + "px";
				setTimeout(() => {
					if (!activeIndicatorStartRef.current || !activeIndicatorEndRef.current) return;

					activeIndicatorStartRef.current.style.visibility = "hidden";
					activeIndicatorEndRef.current.style.visibility = "visible";

					activeIndicatorEndRef.current.style.width =
						previousItemLeftOffset - activeItemLeftOffset + 50 + "px";
					activeIndicatorEndRef.current.style.left = activeItemLeftOffset + "px";

					setTimeout(() => {
						if (!activeIndicatorStartRef.current || !activeIndicatorEndRef.current)
							return;

						activeIndicatorEndRef.current.style.transition = "width 350ms ease";
						activeIndicatorEndRef.current.style.width = "50px";
					}, 350);
				}, 350);
			}

			setPrevActiveItem(activeItem);
		}
	}, [currentUrl]);

	return (
		<div className={styles.bottom_navigation} ref={bottomNavigationRef}>
			<div className={styles.active_indicator} ref={activeIndicatorRef}></div>
			<div className={styles.active_indicator_start} ref={activeIndicatorStartRef}></div>
			<div className={styles.active_indicator_end} ref={activeIndicatorEndRef}></div>
			<Link
				to="/"
				className={styles.bottom_navigation_item}
				activeProps={{ className: styles.active, id: "active_bn" }}
			>
				<HomeIcon width={20} height={20} />
			</Link>
			<Link
				to="/discovery"
				className={styles.bottom_navigation_item}
				activeProps={{ className: styles.active, id: "active_bn" }}
			>
				{/* <DiscoveryIcon width={20} height={20} /> */}
				<SearchIcon width={20} />
			</Link>
			{isAuthorized ? (
				<Link
					to="/users/$userId"
					params={{ userId: String(userId) }}
					className={styles.bottom_navigation_item}
					activeProps={{ className: styles.active, id: "active_bn" }}
				>
					<UserIcon width={20} height={20} />
				</Link>
			) : (
				<Link
					to="/login"
					className={styles.bottom_navigation_item}
					activeProps={{ className: styles.active, id: "active_bn" }}
				>
					<LoginIcon width={20} height={20} />
				</Link>
			)}
			{/* <Link
				to="/settings"
				className={styles.bottom_navigation_item}
				activeProps={{ className: styles.active, id: "active_bn" }}
			>
				<SettingsIcon width={20} height={20} />
			</Link> */}
		</div>
	);
};
