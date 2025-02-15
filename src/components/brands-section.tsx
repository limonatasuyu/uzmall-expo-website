'use client'

import { Building2, Coffee, Home, ShoppingBag, Dumbbell } from 'lucide-react'
import { cn } from '@/lib/utils'

type BrandCategory = {
  title: string
  brands: string[]
  icon: React.ReactNode
}

const brandCategories: BrandCategory[] = [
  {
    title: 'Fashion и аксессуары: 200+ брендов',
    brands: ['Zara', 'H&M', 'Massimo Dutti', 'LC Waikiki', 'DeFacto', 'Terranova', 'New Yorker', 'Lacoste', 'Levi\'s', 'Gant', 'Tommy Hilfiger', 'Calvin Klein', 'Boss', 'Adidas', 'Nike', 'Li-ning', 'Skechers', 'Спортмастер'],
    icon: <ShoppingBag className="w-6 h-6" />
  },
  {
    title: 'Food & Beverage: 100+ брендов',
    brands: ['Starbucks', 'KFC', 'Gloria Jeans', 'Costa Coffee', 'Papa John\'s', 'Domino\'s Pizza', 'Dodo Pizza', 'Evos', 'Feed Up', 'Bon!', 'By Novikov', 'Osteria Mario', 'Daredzhani', 'White Rabbit', 'Big Chefs', 'Socials'],
    icon: <Coffee className="w-6 h-6" />
  },
  {
    title: 'Товары для дома и детей: 50+ брендов',
    brands: ['Next Kids', 'Panço', 'Ostin kids', 'детский мир', 'Media park', 'Technomart', 'English home', 'Madame Coco', 'Home market'],
    icon: <Home className="w-6 h-6" />
  },
  {
    title: 'Отели и гостевые дома: 20+ компаний',
    brands: ['Hilton', 'IHG Hotels & Resorts', 'Marriott International'],
    icon: <Building2 className="w-6 h-6" />
  },
  {
    title: 'Фитнес: 10+ операторов',
    brands: ['World Class', 'UFC GYM', 'XFIT', 'Push 30', 'BEFIT', 'Chekhov'],
    icon: <Dumbbell className="w-6 h-6" />
  }
]

export function BrandsSection() {
  return (
    <div className="w-full px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[64px] font-bold text-center mb-20 leading-tight tracking-tight text-[#095d66]">
        Бренды и компании
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {brandCategories.map((category, index) => (
            <div 
              key={index as number}
              className={cn(
                "bg-white p-10 rounded-[32px]",
                "hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300",
                "flex flex-col gap-5",
                "min-h-[240px]",
                index >= 3 ? "lg:col-span-1 lg:translate-x-1/2" : ""
              )}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-[#095d66]">
                {category.icon}
              </div>
              <h3 className="font-semibold text-xl leading-tight text-[#15bacc]">
                {category.title}
              </h3>
              <div className="text-sm text-gray-500 leading-relaxed">
                {category.brands.join(', ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 