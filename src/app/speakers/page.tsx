"use client";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HomePageSpeakers } from "@/components/home-page-speakers";

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
