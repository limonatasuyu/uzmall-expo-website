'use client'

import Image from "next/image";
import Link from "next/link";
import { customLoader } from "@/lib/customLoader";
import { useState } from 'react'
import { X } from 'lucide-react'
import { cn } from "@/lib/utils";

function Stickers() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={cn("fixed z-50", isOpen ? "bottom-8 right-8 min-[1200px]:right-16" : "bottom-8 -right-8 min-[1200px]:-right-4")}>
			{/* Social links */}
			<div className={`flex gap-4 items-center mb-4 transition-all duration-300 ${
				isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
			}`}>
				<Link
					href="#"
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
					href="https://t.me/uzfranchiseassociation"
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

			{/* Toggle button */}
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl"
				aria-label={isOpen ? 'Close social links' : 'Open social links'}
			>
				{isOpen ? (
					<X className="w-6 h-6 text-gray-600" />
				) : (
					<Image
						src="/telegram-icon.png"
						alt="Toggle social links"
						width={32}
						height={32}
						className="w-10 h-10"
						loader={customLoader}
					/>
				)}
			</button>
		</div>
	);
}

export { Stickers };
