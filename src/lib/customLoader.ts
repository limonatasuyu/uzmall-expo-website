export const customLoader = ({ src }: { src: string }) => {
	// Remove locale prefix if present and ensure path starts with /
	const path = src.replace(/^\/(?:en|ru)\//, '/');
	return path.startsWith('/') ? path : `/${path}`;
};

