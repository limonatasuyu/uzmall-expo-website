import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	images: {
		dangerouslyAllowSVG: true,
	},
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'X-Robots-Tag',
						value: 'index, follow'
					}
				]
			}
		];
	}
};

export default nextConfig;
