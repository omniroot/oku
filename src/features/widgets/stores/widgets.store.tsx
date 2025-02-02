import { FriendsWidget } from "@features/widgets/components/FriendsWidget/FriendsWidget.tsx";
import { HelloWidget } from "@features/widgets/components/HelloWidget/HelloWidget.tsx";
import { TestWidget } from "@features/widgets/components/TestWidget/TestWidget.tsx";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useState, useEffect } from "react";

// TODO:
// Придумать как хранить инфу об виджетах, что бы там было состояние, можно ли его выключать и настройки для виджета
// Придумать как хранить версию, чтобы сбрасывать к дефолтному состоянию если версия в localStorage устарела

export type IWidgets = "hello" | "friends" | "test";

interface IWidget {
	name: IWidgets;
	state: boolean;
	necessary: boolean;
	customizable?: boolean;
	settings?: string[];
	component?: React.ReactNode;
}

type IWidgetsStore = Record<
	IWidgets,
	{
		state: boolean;
		settings: string[];
	}
>;

const widgets: Record<IWidgets, IWidget> = {
	hello: {
		name: "hello",
		state: true,
		necessary: true,
		component: <HelloWidget />,
	},
	friends: {
		name: "friends",
		state: true,
		necessary: false,
		component: <FriendsWidget />,
	},
	test: {
		name: "test",
		state: true,
		necessary: false,
		customizable: true,
		settings: [],
		component: <TestWidget />,
	},
};

const widgetsStore = atomWithStorage<IWidgetsStore>("widgets", {
	hello: {
		state: true,
		settings: [],
	},
	friends: {
		state: false,
		settings: [],
	},
	test: {
		state: true,
		settings: [],
	},
});

export const useWidgets = () => {
	const [store, setStore] = useAtom(widgetsStore);
	const [mounted, setMounted] = useState(false);

	const getWidget = (name: IWidgets) => {
		return store[name];
	};

	const toggleWidget = (name: IWidgets) => {
		setStore({ ...store, [name]: { ...store[name], state: !store[name].state } });
	};

	useEffect(() => {
		setMounted(true);
	}, []);

	return { widgets, mounted, getWidget, toggleWidget };
};
