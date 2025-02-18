"use client";

import { useTranslation } from "react-i18next";

export function MapSection() {
	const { t } = useTranslation();

	return (
		<div className="w-[80%] max-w-7xl">
			<h2 className="text-[2.5rem] font-bold text-[#15bacc] mb-8 text-center">
				{t("HomePage.locationSection.title")}
			</h2>
			<div className="w-full h-[450px] rounded-lg overflow-hidden mb-8">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.25298617416!2d69.2793667!3d41.28259745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2zVGHFn2tlbnQsIMOWemJla2lzdGFu!5e0!3m2!1str!2str!4v1739182576988!5m2!1str!2str"
					width="100%"
					height="100%"
					style={{ border: 0 }}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					title="Uzmall Expo Map"
					className="relative inset-0 z-40"
				/>
			</div>
			<div className="text-center">
				<p className="text-xl text-[#15bacc] mb-2">
					{t("HomePage.locationSection.address")}
				</p>
			</div>
		</div>
	);
}
