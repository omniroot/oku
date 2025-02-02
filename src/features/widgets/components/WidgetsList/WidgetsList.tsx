import { useWidgets, IWidgets } from "@features/widgets/stores/widgets.store.tsx";

export const WidgetsList = () => {
	const { widgets, getWidget, mounted } = useWidgets();
	if (mounted) {
		return Object.entries(widgets).map(([name, widget]) => {
			const { state } = getWidget(name as IWidgets);
			return state && widget.component;
		});
	}
};
