export const customLoader = ({ src }: { src: string }) => {
	//!! Ensure src starts with a slash for public folder images
	return `${src.startsWith("/") ? "" : "/"}${src}`;
};

