function HomePageBottomTextSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-6 w-full bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
      <h2 className="text-xl text-center font-bold text-white border-b border-white/20 pb-4">
        {title}
      </h2>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li 
            key={index} 
            className="text-gray-200 hover:text-white transition-colors duration-200 flex items-center text-sm"
          >
            <span className="w-1 h-1 bg-white/60 rounded-full mr-3 text-center" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function HomePageBottomText() {
  const contents = [
    {
      title: "UzMall Девелопмент",
      items: [
        "Торговые центры и ТРК",
        "Аутлеты",
        "Бизнес-центры",
        "Гостиницы",
        "Складская недвижимость",
        "Жилая недвижимость",
      ],
    },
    {
      title: "UzMall Ритейл",
      items: [
        "Бренды одежды, обуви и аксессуаров",
        "Парфюмерно-косметические бренды",
        "Дрогери ритейлеры",
        "Магазины мебели и товаров для дома",
        "Продуктовые ритейлеры",
        "Магазины детских товаров, одежды и обуви",
        "Книжные/канцелярские магазины",
        "Магазины сувениров и подарков",
        "Магазины для хобби и творчества",
        "Магазины для хобби и творчества",
        "Ювелирные магазины",
      ],
    },
    {
      title: "UzMall Еда",
      items: ["Кафе", "Рестораны", "Кофейни", "Кофейни", "Кофейни", "Кофейни"],
    },
    {
      title: "UzMAll Развлечения и Wellness",
      items: [
        "Кинотеатры и кинооборудование",
        "Парки развлечений",
        "Детские развлекательные центры",
        "Фитнес-клубы",
        "Термальные комплексы",
        "Оборудование для индустрии развлечений",
      ],
    },
    {
      title: "UZMALL Бизнес",
      items: [
        "Управляющие компании",
        "Консалтинг и брокеридж",
        "Инжиниринг",
        "Инвестиции",
        "Страхование",
        "Банковские и финансовые услуги",
        "Архитектурные и дизайн-бюро",
      ],
    },
    {
      title: "UZMALL Технологии",
      items: [
        "Digital",
        "Технологии и оборудование для ритейла и торговых объектов",
        "IT решения",
        "Навигация внутри помещений",
      ],
    }
  ];
  return (
    <div className="w-full flex justify-center bg-gradient-to-b from-[#15bacc] to-[#095d66] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h4 className="text-center text-white text-4xl font-bold mb-16">
          Секторы выставки
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contents.map((content, index) => (
            <HomePageBottomTextSection 
              key={index} 
              title={content.title} 
              items={content.items} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export { HomePageBottomText };
