import Link from "next/link";
import { Building2, Users, Presentation, Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";

function TextCards({
	title,
	description,
	link,
	icon: Icon,
	buttonText,
	buttonOnClick,
}: {
	title: string;
	description: string;
	link: string;
	icon: React.ElementType;
	buttonText: string;
	buttonOnClick?: (e: React.MouseEvent) => void;
}) {
	return (
		<Link
			href={link}
			className="block h-full transition-all duration-300 hover:-translate-y-1"
			onClick={(e: React.MouseEvent) => buttonOnClick?.(e)}
		>
			<div className="flex flex-col items-start rounded-lg bg-white p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 group">
				<div className="w-full flex flex-col h-full">
					<div className="flex justify-center mb-6">
						<div className="text-[#15bacc] group-hover:text-[#095d66] transition-colors duration-300">
							<Icon className="w-14 h-14 text-[#15bacc] group-hover:text-[#095d66] transition-colors duration-300" />
						</div>
					</div>
					<h2 className="text-[1.6rem] font-bold text-[#095d66] group-hover:text-[#15bacc] leading-tight mb-4 text-start transition-colors duration-300">
						{title}
					</h2>
					<p className="text-[1rem] text-[#095d66]/80 group-hover:text-[#095d66] leading-relaxed text-start transition-colors duration-300 mb-6">
						{description}
					</p>
					<div className="mt-auto flex justify-center">
						<span className="inline-block px-6 py-2 rounded-full bg-[#15bacc] text-white group-hover:bg-[#095d66] transition-colors duration-300">
							{buttonText}
						</span>
					</div>
				</div>
			</div>
		</Link>
	);
}

function HomePageButtonCards({
	handlePurposeClick,
}: { handlePurposeClick: (e: React.MouseEvent, purpose: string) => void }) {
	const { t } = useTranslation();

	const contents = [
		{
			title: t("HomePageButtonCards.exhibition.title"),
			description: t("HomePageButtonCards.exhibition.description"),
			link: "#contact-form-section",
			icon: Building2,
			buttonText: t("HomePageButtonCards.exhibition.buttonText"),
			contactFormSelectValue: "represent",
		},
		{
			title: t("HomePageButtonCards.networking.title"),
			description: t("HomePageButtonCards.networking.description"),
			link: "#contact-form-section",
			icon: Users,
			buttonText: t("HomePageButtonCards.networking.buttonText"),
			contactFormSelectValue: "visitor",
		},
		{
			title: t("HomePageButtonCards.forum.title"),
			description: t("HomePageButtonCards.forum.description"),
			link: "/speakers",
			icon: Presentation,
			buttonText: t("HomePageButtonCards.forum.buttonText"),
		},
		{
			title: t("HomePageButtonCards.awards.title"),
			description: t("HomePageButtonCards.awards.description"),
			link: "/cre-awards",
			icon: Trophy,
			buttonText: t("HomePageButtonCards.awards.buttonText"),
		},
	];

	return (
		<div className="w-full max-w-7xl mx-auto px-6 py-12">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{contents.map((content, index) => (
					<TextCards
						key={index as number}
						title={content.title}
						description={content.description}
						link={content.link}
						icon={content.icon}
						buttonText={content.buttonText}
						buttonOnClick={(e: React.MouseEvent) => {
							if (!content.contactFormSelectValue) return;
							handlePurposeClick(e, content.contactFormSelectValue);
						}}
					/>
				))}
			</div>
		</div>
	);
}

export { HomePageButtonCards };
