import { useWidgets, IWidgets } from "@features/widgets/stores/widgets.store.tsx";

export const WidgetsList = () => {
	const { widgets, getWidget, mounted } = useWidgets();
	console.log({ widgets, mounted });

	if (mounted) {
		return Object.entries(widgets).map(([name, widget]) => {
			const currentWidget = getWidget(name as IWidgets);
			return currentWidget.state && widget.component;
		});
	}
};
