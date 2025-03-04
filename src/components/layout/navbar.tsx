"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { customLoader } from "@/lib/customLoader";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { useTranslation } from "react-i18next";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function NavbarItem({
	content,
	link,
	onClick,
	type,
}: {
	content: string | React.ReactNode;
	link?: string;
	onClick?: (e: React.MouseEvent) => void;
	type?: "button" | "link";
}) {
	const { t } = useTranslation();

	return (
		<NavigationMenuItem className="max-[1230px]:hidden">
			{link ? <NavigationMenuLink
				href={link}
				className={cn(
					"font-bold text-[#095d66] hover:text-[#15bacc] text-lg",
					type === "button" && "bg-[#095d66] text-white p-2 rounded-full",
				)}
				onClick={onClick}
			>
				{typeof content === "string" ? t(content) : content}
			</NavigationMenuLink> : <>{content}</>}
		</NavigationMenuItem>
	);
}

function NavbarIcon() {
	return (
		<NavigationMenuItem>
			<NavigationMenuLink href="/">
				<Image
					src="/logo-uzmall.png"
					alt="logo"
					width={140}
					height={25}
					loader={customLoader}
				/>
			</NavigationMenuLink>
		</NavigationMenuItem>
	);
}

function Navbar({
	handlePurposeClick,
}: { handlePurposeClick?: (e: React.MouseEvent, purpose: string) => void }) {
	const { t } = useTranslation();

	const navbarItems = [
		{
			title: "Navbar.participants",
			href: "#contact-form-section",
			onClick: (e: React.MouseEvent) => handlePurposeClick?.(e, "represent"),
		},
		{
			title: "Navbar.visitors",
			href: "#contact-form-section",
			onClick: (e: React.MouseEvent) => handlePurposeClick?.(e, "visitor"),
		},
		{
			title: "Navbar.program",
			href: "/speakers",
		},
		{
			title: "Navbar.awards",
			href: "/cre-awards",
		},
		{
			title: "Navbar.contactus",
			href: "#contact-form-section",
			type: "button",
		},
	];

	return (
		<NavigationMenu className="w-screen flex justify-center h-[50px] bg-white/40 py-10">
			<NavigationMenuList className="w-screen flex justify-center items-center">
				<div className="w-[95vw] flex justify-between items-center overflow-hidden">
					<div className="flex justify-center items-center">
						<NavbarIcon />
					</div>
					{navbarItems.map((item) => (
						<NavbarItem
							content={item.title}
							key={item.title}
							link={item.href}
							onClick={item.onClick}
							type={item.type as "button" | "link"}
						/>
					))}
					<div className="flex justify-center items-center gap-4">
						<LanguageSwitcher />
						<NavbarItem
							content={
								
									<div className="flex gap-4 items-center">
										<a
											href="https://t.me/uzmallexpo"
											className="font-bold text-[#095d66] hover:text-[#15bacc] bg-white box-shadow-lg w-fit rounded-full"
										>
											<Image
												src="/telegram-icon.png"
												alt="Telegram"
												width={32}
												height={32}
												className="w-12 h-12"
												loader={customLoader}
											/>
										</a>
										<a
											href="https://wa.me/998773223366"
											className="font-bold text-[#095d66] hover:text-[#15bacc] bg-white box-shadow-lg w-fit p-2 rounded-full"
										>
											<Image
												src="/whatsapp-icon.png"
												alt="WhatsApp"
												width={32}
												height={32}
												className="w-8 h-8"
												loader={customLoader}
											/>
										</a>
									</div>
							}
						/>
						<Sheet>
							<SheetTrigger asChild>
								<Button className="max-[1230px]:flex hidden ml-4 bg-[#095d66] hover:bg-[#15bacc] transition-colors">
									<MenuIcon color="white" size={28} />
								</Button>
							</SheetTrigger>
							<SheetContent>
								<div className="flex flex-col gap-4 mt-10">
									{navbarItems.map((item) => (
										<a
											key={item.title}
											href={item.href}
											className="font-bold text-[#095d66] hover:text-[#15bacc] text-lg p-2 rounded-full"
											onClick={(e) => {
												if (item.onClick) {
													item.onClick(e);
												} else if (item.href.startsWith("#")) {
													e.preventDefault();
													const element = document.querySelector(item.href);
													element?.scrollIntoView({ behavior: "smooth" });
												}
											}}
										>
											{t(item.title)}
										</a>
									))}
									<div className="flex gap-4 items-center">
										<a
											href="https://t.me/uzmallexpo"
											className="font-bold text-[#095d66] hover:text-[#15bacc] bg-white box-shadow-lg w-fit p-2 rounded-full"
										>
											<Image
												src="/telegram-icon.png"
												alt="Telegram"
												width={32}
												height={32}
												className="w-16 h-16"
												loader={customLoader}
											/>
										</a>
										<a
											href="https://wa.me/998773223366"
											className="font-bold text-[#095d66] hover:text-[#15bacc] bg-white box-shadow-lg w-fit p-2 rounded-full"
										>
											<Image
												src="/whatsapp-icon.png"
												alt="WhatsApp"
												width={32}
												height={32}
												className="w-10 h-10"
												loader={customLoader}
											/>
										</a>
									</div>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className,
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";

export { Navbar };
