import { CheckListIcon } from "@/shared/assets/icons/CheckListIcon";
import { BottomSheet } from "@components/ui/BottomSheet/BottomSheet.tsx";
import { Button } from "@components/ui/Button/Button.tsx";
import { Typography } from "@components/ui/Typography/Typography.tsx";
import { useAuth } from "@features/auth/hooks/useAuth.tsx";
import { useGetUser } from "@features/users/api/getUser/getUser.api.ts";
import { useState } from "react";
import styles from "./HelloWidget.module.css";
import { Switch } from "@components/ui/Switch/Switch.tsx";
import { IWidgets, useWidgets } from "@features/widgets/stores/widgets.store.tsx";
import { SettingsIcon } from "@/shared/assets/icons/SettingsIcon.tsx";

export const HelloWidget = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { userId } = useAuth();
	const { data: user } = useGetUser({ variables: { userId: Number(userId) || 9999999999999 } });
	const { widgets, getWidget, toggleWidget } = useWidgets();

	return (
		<div className={styles.hello_widget}>
			<div className={styles.shape}>
				<Typography variant="title" weight="bold" color="tertiary">
					{user !== undefined ? user.nickname : "Not authorized"}!
				</Typography>
			</div>

			<Button variant="primary" circle onClick={() => setIsOpen(!isOpen)}>
				<CheckListIcon />
			</Button>
			<BottomSheet isShow={isOpen} onOutsideClick={() => setIsOpen(!isOpen)} title="Widgets list">
				{Object.entries(widgets).map(([name, widget]) => {
					const { state } = getWidget(name as IWidgets);
					return (
						<Switch
							title={name}
							state={state}
							disabled={widget.necessary}
							onChange={() => toggleWidget(name as IWidgets)}
							rightSlot={widget.customizable && <SettingsIcon />}
						/>
					);
				})}
			</BottomSheet>
		</div>
	);
};
