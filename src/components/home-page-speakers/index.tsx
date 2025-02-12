"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { customLoader } from "@/lib/customLoader";
import Link from "next/link";

const speakers = [
	{
		name: "HomePageSpeakers.speaker1.name",
		role: "HomePageSpeakers.speaker1.role",
		image: "/speakers-1.png",
		description:
			"HomePageSpeakers.speaker1.description",
	},
	{
		name: "HomePageSpeakers.speaker2.name",
		role: "HomePageSpeakers.speaker2.role",
		image: "/speakers-2.png",
		description:
			"HomePageSpeakers.speaker2.description",
	},
	//{
	//	name: "Виктор Ляшевский",
	//	role: "Организатор",
	//	image: "/avatar-icon.png",
	//	description:
	//		"Международный эксперт по франчайзингу, автор делового бестселлера «Франшиза на 360». 6 клиентов вошли в топ-100 по версии Forbes. Среди клиентов «33 пингвина», «СДЭК», «Юниор», «Газпром Трансгаз».",
	//},
];

function SpeakerCard({
	name,
	role,
	image,
	description,
}: {
	name: string;
	role: string;
	image: string;
	description: string;
}) {
	const { t } = useTranslation();

	return (
		<div className="bg-white rounded-lg p-6 pt-12 shadow-lg hover:shadow-xl transition-all duration-300">
			<div className="flex flex-col items-center">
				<div className="relative w-[120px] h-[120px] mb-4">
					<Image
						src={image}
						alt={t(name)}
						fill
						className="rounded-full object-cover"
						loader={customLoader}
					/>
				</div>
				<h3 className="text-xl font-semibold mb-1 text-[#095d66]">{t(name)}</h3>
				<p className="text-gray-600 mb-4">{t(role)}</p>
				<p className="text-gray-800 text-center text-sm leading-relaxed">
					{t(description)}
				</p>
			</div>
		</div>
	);
}

export function HomePageSpeakers() {
	const { t } = useTranslation();

	return (
		<>
			<Link
				href="/speakers"
				className="text-[2.5rem] font-bold text-center text-white"
			>
				<h3 className="cursor-pointer mt-4 text-[#095d66]">
					{t("HomePage.programSection.subtitle")}
				</h3>
			</Link>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
				{speakers.map((speaker) => (
					<SpeakerCard
						key={speaker.name}
						name={speaker.name}
						role={speaker.role}
						image={speaker.image}
						description={speaker.description}
					/>
				))}
			</div>
		</>
	);
}
