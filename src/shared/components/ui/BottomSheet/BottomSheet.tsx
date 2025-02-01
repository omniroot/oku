import { Portal } from "@components/ui/Portal/Portal.tsx";
import { Typography } from "@components/ui/Typography/Typography.tsx";
import clsx from "clsx";
import { motion } from "motion/react";
import { FC, MouseEvent, ReactNode } from "react";
import styles from "./BottomSheet.module.css";

interface IBottomSheetProps {
	children?: ReactNode;
	isShow?: boolean;
	className?: string;
	title?: string;
	contentOrientation?: "vertical" | "horizontal";
	onOutsideClick?: () => void;
}

export const BottomSheet: FC<IBottomSheetProps> = ({
	children,
	className,
	isShow = false,
	title,
	contentOrientation = "vertical",
	onOutsideClick = () => {},
}) => {
	const onBottomSheetClick = (event: MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
	};

	const _class = clsx(styles.bottom_sheet, className);

	return (
		<Portal isShow={isShow} onClose={onOutsideClick}>
			<motion.div
				className={styles.container}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.2 }}
				onClick={onOutsideClick}
			>
				<motion.div
					initial={{ y: 50 }}
					animate={{ y: 0 }}
					exit={{ y: 50 }}
					transition={{ duration: 0.2 }}
					className={_class}
					onClick={onBottomSheetClick}
				>
					<motion.div
						className={styles.indicator}
						initial={{ y: 50 }}
						animate={{ y: 0 }}
						exit={{ y: 50 }}
						transition={{ duration: 0.2 }}
					></motion.div>
					{title && (
						<Typography size="title" weight="title" className={styles.title}>
							{title}
						</Typography>
					)}
					<div className={styles.content} data-orientation={contentOrientation}>
						{children}
					</div>
				</motion.div>
			</motion.div>
		</Portal>
	);
};
