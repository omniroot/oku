import * as React from "react";

export const PlayIcon = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
			<path
				fill="none"
				stroke="currentColor"
				strokeWidth={1.5}
				d="M20.409 9.353a2.998 2.998 0 0 1 0 5.294L7.597 21.614C5.534 22.737 3 21.277 3 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
			/>
		</svg>
	);
};
