"use client";

import Image from "next/image";
import Link from "next/link";
import { customLoader } from "@/lib/customLoader";

function Stickers() {
	return (
		<div className="fixed flex flex-col gap-4 z-50 transition-all duration-300 bottom-8 right-8">
			<Link
				href="https://wa.me/qr/UX6IXITIUGR7A1"
				target="_blank"
				rel="noopener noreferrer"
				className="w-14 h-14  rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 z-50"
				aria-label="Contact us on WhatsApp"
			>
				<Image
					src="/whatsapp-icon.png"
					alt="WhatsApp"
					width={32}
					height={32}
					className="w-10 h-10"
					loader={customLoader}
				/>
			</Link>
			<Link
				href="https://t.me/uzmallexpo"
				target="_blank"
				rel="noopener noreferrer"
				className="w-14 h-14  rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 z-50"
				aria-label="Contact us on Telegram"
			>
				<Image
					src="/telegram-icon.png"
					alt="Telegram"
					width={32}
					height={32}
					className="w-16 h-16"
					loader={customLoader}
				/>
			</Link>
		</div>
	);
}

export { Stickers };
