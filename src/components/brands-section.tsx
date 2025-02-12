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
    <div className="w-[90%] max-w-7xl mb-12 bg-white rounded-lg p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-12">Бренды и компании</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {brandCategories.map((category, index) => (
          <div 
            key={index as number}
            className={cn(
              "p-6 rounded-lg border border-gray-200",
              "hover:shadow-md transition-shadow duration-200"
            )}
          >
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h3 className="font-semibold text-lg">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.brands.slice(0, 6).map((brand, brandIndex) => (
                <span
                  key={brandIndex as number}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                >
                  {brand}
                </span>
              ))}
              {category.brands.length > 6 && (
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  и другие
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 