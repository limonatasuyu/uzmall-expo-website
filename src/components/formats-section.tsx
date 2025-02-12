"use client";

import { Edit3, Key, Mic2, Info } from "lucide-react";
import { ContactFormModal } from "./contact-form-modal";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

export function FormatsSection() {
	const { t } = useTranslation();

	const formatCards = [
		{
			icon: Edit3,
			translationKey: 'individualConstruction',
		},
		{
			icon: Key,
			translationKey: 'turnkeyStand',
		},
		{
			icon: Mic2,
			translationKey: 'speaker',
		},
		{
			icon: Info,
			translationKey: 'moreInfo',
			hasButton: true,
		},
	];

	return (
		<div className="w-[90%] max-w-7xl py-16">
			<h2 className="text-3xl font-bold text-center mb-12 text-[#095d66]">
				{t('FormatsSection.title')}
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{formatCards.map(({ icon: Icon, translationKey, hasButton }) => (
					<div 
						key={translationKey}
						className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
					>
						<div className="flex items-center gap-3 mb-4">
							<Icon className="w-6 h-6 text-[#15bacc]" />
							<h3 className="text-xl font-semibold text-[#095d66]">
								{t(`FormatsSection.${translationKey}.title`)}
							</h3>
						</div>
						<p className="text-gray-600">
							{t(`FormatsSection.${translationKey}.description`)}
						</p>
						{hasButton && (
							<ContactFormModal 
								trigger={
									<Button
										type="button"
										className="mt-4 px-8 py-4 bg-[#15bacc] text-white rounded-md hover:bg-[#095d66] transition-colors"
									>
										{t('FormatsSection.moreInfo.button')}
									</Button>
								}
							/>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
