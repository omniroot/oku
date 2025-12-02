import { createFileRoute } from "@tanstack/react-router";
import { MaterialPreview } from "@/theme/components/MaterialPreview.tsx";

export const Route = createFileRoute("/test")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<MaterialPreview />
			213
		</>
	);
}
