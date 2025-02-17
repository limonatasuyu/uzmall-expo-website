"use client";

import Image from "next/image";
import { customLoader } from "@/lib/customLoader";

export function HomePageTable() {
	return (
		<div className="w-full">
			<div className="relative sm:pt-[50%] lg:h-full pt-0">
				<Image
					src="/home-page-table-image.jpeg"
					alt="Brands Section"
					fill
					className="object-contain absolute top-0 left-0 h-full w-full px-4"
					loader={customLoader}
					priority
				/>
			</div>

			{/* Large screen version (>=1200px) with 2:1 aspect ratio */}
			<div className="hidden xl:block relative sm:pt-[50%] lg:h-full pt-0">
				<Image
					src="/home-page-table.png"
					alt="Brands Section"
					fill
					className="object-contain absolute top-0 left-0 h-full w-full px-4"
					loader={customLoader}
					priority
				/>
			</div>

			{/* Small screen version (<1200px) - two square images stacked */}
			<div className="xl:hidden -space-y-6 min-[360px]:mt-32">
				<div className="relative pt-[100%] -mt-[13vh] min-[900px]:-mt-[16vh]">
					<Image
						src="/home-page-table-top.png"
						alt="Brands Section Top"
						fill
						className="object-contain absolute top-0 left-0 w-full h-full px-4"
						loader={customLoader}
						priority
					/>
				</div>
				<div className="relative pt-[100%]">
					<Image
						src="/home-page-table-bottom.png"
						alt="Brands Section Bottom"
						fill
						className="object-contain absolute top-0 left-0 w-full h-full px-4"
						loader={customLoader}
					/>
				</div>
			</div>
		</div>
	);
}
