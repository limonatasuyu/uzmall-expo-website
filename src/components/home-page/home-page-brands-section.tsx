"use client";

import Image from "next/image";
import { customLoader } from "@/lib/customLoader";

export function BrandsSection() {
	return (
		<div className="w-full">
			{/* Large screen version (>=1200px) with 2:1 aspect ratio */}
			<div className="hidden xl:block relative pt-[50%]">
				<Image
					src="/home-page-table.png"
					alt="Brands Section"
					fill
					className="object-contain absolute top-0 left-0 w-full h-full px-4"
					loader={customLoader}
					priority
				/>
			</div>

			{/* Small screen version (<1200px) - two square images stacked */}
			<div className="xl:hidden space-y-4">
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
