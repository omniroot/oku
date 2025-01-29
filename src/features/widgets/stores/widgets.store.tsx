import { HelloWidget } from "@features/widgets/components/HelloWidget/HelloWidget.tsx";
import { TestWidget } from "@features/widgets/components/TestWidget/TestWidget.tsx";
import { useAtom, useAtomValue } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type IWidgets = "hello" | "test";

export const WidgetComponents: Record<IWidgets, React.ReactNode> = {
	hello: <HelloWidget />,
	test: <TestWidget />,
};

interface IWidgetsStore {
	widgets: Record<IWidgets, boolean>;
	getWidget: (name: IWidgets) => boolean;
	toggleWidget: (name: IWidgets) => void;
}

const widgetsStore = atomWithStorage<IWidgetsStore["widgets"]>("widgets", {
	hello: true,
	test: true,
});

export const useWidgets = () => {
	const [widgets, setWidgets] = useAtom(widgetsStore);

	const getWidget = (name: IWidgets) => {
		return widgets[name];
	};

	const toggleWidget = (name: IWidgets) => {
		setWidgets({ ...widgets, [name]: !widgets[name] });
	};

	return { widgets, getWidget, toggleWidget };
};
