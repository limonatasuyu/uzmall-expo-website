import Image from "next/image";
import { customLoader } from "@/lib/customLoader";
function HomePageVideo() {
	return (
		<div className="relative w-[320px] mx-auto rounded-2xl flex-shrink-0">
			<div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-2xl overflow-hidden">
				<Image src="/video-fallback-image.png" alt="Loading" width={100} height={100} className="w-full h-full object-cover" loader={customLoader} />
				<div className="absolute">
					<div className="w-8 h-8 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin" />
				</div>
			</div>
			<video
				autoPlay
				loop
				muted
				playsInline
				className="w-[320px] h-[700px] object-cover rounded-2xl"
				preload="none"
			>
				<source src="/video.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
}

export { HomePageVideo };
