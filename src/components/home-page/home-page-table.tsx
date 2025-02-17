"use client";

import Image from "next/image";
import { customLoader } from "@/lib/customLoader";

function BrandList({ brands }: { brands: string[] | string[][] }) {
	return Array.isArray(brands[0]) ? (
		<div className="flex gap-2 justify-center h-full">
			{(brands as string[][]).map((brandsArray: string[], index: number) => (
				<ul
					className="space-y-1 bg-white p-2 rounded-lg flex-1 pl-4 h-full"
					key={index as number}
				>
					{brandsArray.map((brand: string, index: number) => (
						<li
							key={index as number}
							className="text-sm text-[#008996] flex items-center gap-1.5"
						>
							<span className="text-[#008996] text-lg">•</span> {brand}
						</li>
					))}
				</ul>
			))}
		</div>
	) : (
		<ul className="space-y-1 bg-white p-2 rounded-lg h-full">
			{brands.map((brand, index) => (
				<li
					key={index as number}
					className="text-sm text-[#008996] flex items-center gap-1.5 pl-4"
				>
					<span className="text-[#008996] text-lg">•</span> {brand}
				</li>
			))}
		</ul>
	);
}

function BrandCategory({
	title,
	subtitle,
	brands,
	className = "",
	imageNumber,
}: {
	title: string;
	subtitle: string;
	brands: string[] | string[][];
	className?: string;
	imageNumber: number;
}) {
	return (
		<div className={`shadow-sm h-full flex flex-col ${className}`}>
			<div className="relative mb-2 bg-white rounded-lg">
				<div className="relative w-full h-48">
					<Image
						src={`/table-image-${imageNumber}.jpg`}
						alt={title}
						fill
						className="object-cover rounded-t-lg"
						loader={customLoader}
					/>
				</div>
				<div className="text-center p-4 pt-3">
					<h3 className="text-[#008996] text-lg font-bold leading-tight">{title}</h3>
					<p className="text-[#008996] text-lg font-bold leading-tight mt-1">{subtitle}</p>
				</div>
			</div>
			<div className="flex-1">
				<BrandList brands={brands} />
			</div>
		</div>
	);
}

const brandData = {
	fashion: {
		title: 'Fashion и аксессуары:',
		subtitle: '200+ брендов',
		brands: [
			[
				'Zara', 'H&M', 'UNIQLO', 'LC Waikiki', 'DeFacto', 'Terranova', 'New Yorker'
			],
			['Lacoste', "Levi's", 'Gant', 'Tommy Hilfiger', 'Calvin Klein'],
			['Adidas', 'Nike', 'Li-ning', 'Skechers', 'Спортмастер', 'и другие']
		]
	},
	grocery: {
		title: 'Продуктовый ритейл:',
		subtitle: '15+ брендов',
		brands: ['Korzinka', 'Makro (UZ)', 'Havas', 'Galmart', 'Magnum', 'Magnit', 'и другие']
	},
	entertainment: {
		title: 'Развлечения:',
		subtitle: '15+ операторов',
		brands: ['Cinematika', 'Sky Park', 'Hello Park', 'Luna Park', 'VR arena', 'Play Arena', 'и другие']
	},
	homeAndKids: {
		title: 'Товары для дома и детей:',
		subtitle: '50+брендов',
		brands: [
			'Next Kids', 'Panço', 'Oklin kids', 'детский мир', 'Media park',
			'Madame Coco', 'Home market', 'Teknomart', 'English home', 'и другие'
		]
	},
	beauty: {
		title: 'Красота и здоровье:',
		subtitle: '30+ брендов',
		brands: [
			"Л'этуаль", "L'Occitane", "M cosmetic", "Bloom", "Belstore",
			"Yves Rocher", "ShoxMed", "и другие"
		]
	},
	foodAndBeverage: {
		title: 'Food & Beverage:',
		subtitle: '100+ брендов',
		brands: [
			'Starbucks', 'KFC', 'Gloria Jeans', 'Costa Coffee', 'Papa Johns',
			"Domino's Pizza", 'Dodo Pizza', 'Evos', 'Feed Up', 'Bon!',
			'By Novikov', 'Osteria Mario', 'Darezzhani', 'White Rabbit',
			'Big Chefs', 'Socials'
		]
	},
	hotels: {
		title: 'Отели и гостевые дома:',
		subtitle: '20+ компаний',
		brands: ['Hilton', 'IHG Hotels & Resorts', 'Marriott International', 'и другие']
	},
	fitness: {
		title: 'Фитнес:',
		subtitle: '10+ операторов',
		brands: ['World Class', 'UFC GYM', 'XFIT', 'Push 30', 'BEFIT', 'Chekhov']
	}
}

export function HomePageTable() {
	return (
		<div className="w-full max-w-[90vw] mx-auto px-4 py-8">
			<h2 className="text-[#008996] text-2xl font-medium mb-8 text-center">
				СРЕДИ ОЖИДАЕМЫХ 500 БРЕНДОВ-ПОСЕТИТЕЛЕЙ
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				{/* Fashion Section - Takes up full width of first column */}
				<div className="flex flex-col gap-4">
					<BrandCategory
						title={brandData.fashion.title}
						subtitle={brandData.fashion.subtitle}
						brands={brandData.fashion.brands}
						imageNumber={1}
					/>
					<div className="grid grid-cols-2 gap-4">
						<BrandCategory
							title={brandData.grocery.title}
							subtitle={brandData.grocery.subtitle}
							brands={brandData.grocery.brands}
							imageNumber={2}
						/>
						<BrandCategory
							title={brandData.entertainment.title}
							subtitle={brandData.entertainment.subtitle}
							brands={brandData.entertainment.brands}
							imageNumber={3}
						/>
					</div>
				</div>

				{/* Home & Kids and Beauty Section */}
				<div className="flex flex-col gap-4">
					<BrandCategory
						title={brandData.homeAndKids.title}
						subtitle={brandData.homeAndKids.subtitle}
						brands={brandData.homeAndKids.brands}
						imageNumber={4}
					/>
					<BrandCategory
						title={brandData.beauty.title}
						subtitle={brandData.beauty.subtitle}
						brands={brandData.beauty.brands}
						imageNumber={5}
					/>
				</div>

				{/* Food & Beverage Section */}
				<BrandCategory
					title={brandData.foodAndBeverage.title}
					subtitle={brandData.foodAndBeverage.subtitle}
					brands={brandData.foodAndBeverage.brands}
					imageNumber={3}
				/>

				{/* Hotels and Fitness Section */}
				<div className="flex flex-col gap-4">
					<BrandCategory
						title={brandData.hotels.title}
						subtitle={brandData.hotels.subtitle}
						brands={brandData.hotels.brands}
						imageNumber={7}
					/>
					<BrandCategory
						title={brandData.fitness.title}
						subtitle={brandData.fitness.subtitle}
						brands={brandData.fitness.brands}
						imageNumber={6}
					/>
				</div>
			</div>
		</div>
	);
}
