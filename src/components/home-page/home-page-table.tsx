"use client";

import Image from "next/image";
import { customLoader } from "@/lib/customLoader";
import { useTranslation } from "react-i18next";
import { brandDataRU, brandDataEN, brandDataUZ } from "@/data/home-page-table-data";

function BrandList({ brands }: { brands: string[] | string[][] }) {
  return Array.isArray(brands[0]) ? (
    <div className="flex gap-2 justify-center h-full">
      {(brands as string[][]).map((brandsArray: string[], index: number) => (
        <ul className="space-y-1 bg-white p-2 rounded-lg flex-1 pl-4 h-full" key={index as number}>
          {brandsArray.map((brand: string, index: number) => (
            <li key={index as number} className="text-sm text-[#008996] flex items-center gap-1.5">
              <span className="text-[#008996] text-lg">•</span> {brand}
            </li>
          ))}
        </ul>
      ))}
    </div>
  ) : (
    <ul className="space-y-1 bg-white p-2 rounded-lg h-full">
      {brands.map((brand, index) => (
        <li key={index as number} className="text-sm text-[#008996] flex items-center gap-1.5 pl-4">
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

export function HomePageTable() {
  const { i18n } = useTranslation();
  const brandData = i18n.language === "ru" ? brandDataRU : i18n.language === "uz" ? brandDataUZ : brandDataEN;
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
            imageNumber={4}
          />
          <div className="grid grid-cols-2 gap-4">
            <BrandCategory
              title={brandData.grocery.title}
              subtitle={brandData.grocery.subtitle}
              brands={brandData.grocery.brands}
              imageNumber={3}
            />
            <BrandCategory
              title={brandData.entertainment.title}
              subtitle={brandData.entertainment.subtitle}
              brands={brandData.entertainment.brands}
              imageNumber={8}
            />
          </div>
        </div>

        {/* Home & Kids and Beauty Section */}
        <div className="flex flex-col gap-4">
          <BrandCategory
            title={brandData.homeAndKids.title}
            subtitle={brandData.homeAndKids.subtitle}
            brands={brandData.homeAndKids.brands}
            imageNumber={1}
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
          imageNumber={2}
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
