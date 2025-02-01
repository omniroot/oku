import { ReactNode, FC, useEffect } from "react";
import styles from "./Portal.module.css";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";

interface IPortalProps {
	children?: ReactNode;
	isShow: boolean;
	onClose: () => void;
	zIndex?: number;
	layoutPosition?: "top" | "center" | "bottom";
}

export const Portal: FC<IPortalProps> = ({
	children,
	isShow,
	onClose,
	zIndex = 1000,
	layoutPosition = "bottom",
}) => {
	useEffect(() => {
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);

	const element = (
		<AnimatePresence>
			{isShow && (
				<motion.div
					initial={{ opacity: 0, zIndex }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
					onClick={onClose}
					className={styles.container}
					data-layout-position={layoutPosition}
				>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	);

	return <>{createPortal(element, document.body)}</>;
};
