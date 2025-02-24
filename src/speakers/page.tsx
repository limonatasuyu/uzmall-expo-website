"use client";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HomePageSpeakers } from "@/components/home-page/home-page-speakers";

export default function CREAwardsPage() {
	return (
		<>
			<Navbar />
			<main className="min-h-fit pb-20 bg-[#eaeaea]">
				<section className="flex justify-center w-screen">
					<div className="w-[90%] max-w-5xl">
						<HomePageSpeakers />
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
