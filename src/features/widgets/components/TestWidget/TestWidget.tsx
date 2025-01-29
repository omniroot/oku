import { Typography } from "@components/ui/Typography/Typography.tsx";
import styles from "./TestWidget.module.css";
export const TestWidget = () => {
	return (
		<div className={styles.test_widget}>
			<Typography>This is test widget</Typography>
		</div>
	);
};
