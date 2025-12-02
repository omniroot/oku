"use client";
import { Box, Button, Input } from "@chakra-ui/react";
import { useHeader } from "@features/storage/stores/header.storage.ts";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useMaterial } from "@/theme/components/MaterialProvider.tsx";

export const Route = createFileRoute("/")({ component: App });

function App() {
	const { setTitle } = useHeader();
	const { color, setColor } = useMaterial();
	const [value, setValue] = useState(color);

	useEffect(() => {
		setTitle("Home");
	}, [setTitle]);

	return (
		<>
			{/* <WidgetsList /> */}
			<Input
				type="text"
				defaultValue={color}
				// value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<Button onClick={() => setColor(value)} variant={"primary"}>
				Save
			</Button>

			<Box bg={"surface"}>
				surface
				<Box bg={"surface-container"}>
					container
					<Box bg={"surface-container-high"}>
						container high
						<Box bg={"surface-container-highest"}>container highest</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
}
