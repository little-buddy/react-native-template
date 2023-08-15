interface Route {
	name: string;
	component: React.FC;
	path?: string;
	meta?: Record<string, any>;
	children?: Route[];
}

const createRoute = (
	path: string,
	name: string,
	component: React.ComponentType<any>,
	meta?: Record<string, any>,
	children?: Route[]
) => ({
	path,
	name,
	component,
	meta,
	children,
});

export default [
	/* Routers */
];
