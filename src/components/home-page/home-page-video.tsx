import Image from "next/image";
import { customLoader } from "@/lib/customLoader";

function HomePageVideo() {
	return (
		<div className="relative w-full aspect-video rounded-2xl">
			<div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-2xl overflow-hidden">
				<Image
					src="/video-fallback-image.png"
					alt="Loading"
					width={1920}
					height={1080}
					className="w-full h-full object-cover"
					loader={customLoader}
				/>
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="w-8 h-8 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin" />
				</div>
			</div>
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute inset-0 w-full h-full object-cover rounded-2xl"
				preload="none"
			>
				<source src="/video.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
}

export { HomePageVideo };
