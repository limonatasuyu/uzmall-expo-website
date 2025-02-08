function TextCards({title, description}: {title: string, description: string}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg text-center bg-white p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="max-w-sm">
        <h2 className="text-[1.6rem] font-bold text-[#095d66] leading-tight mb-4">
          {title}
        </h2>
        <p className="text-[1rem] text-[#095d66]/80 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

function HomePageTextCards() {
  const contents = [
    {
      title: "Крупнейшая отраслевая выставка в Центральной Азии",
      description: "По коммерческой недвижимости и ритейлу, объединяющая 100+ участников, 500+ брендов и 9000+ посетителей"
    },
    {
      title: "Глобальный Networking",
      description: "Деловые встречи, новые знакомства, переговоры и общение главных и самых активных людей в отрасли"
    },
    {
      title: "Форум коммерческой недвижимости",
      description: "Здесь будут озвучены и заданы тренды на следующие 5 лет, рассказаны практические кейсы и истории успеха в отрасли"
    },
    {
      title: "CRE AWARDS - Премия коммерческой недвижимости",
      description: "Премия Uzmall Awards присуждается за значимый вклад и успешную деятельность на рынке коммерческой недвижимости и ритейла в Узбекистане."
    },
  ]

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contents.map((content, index) => (
          <TextCards key={index} title={content.title} description={content.description} />
        ))}
      </div>
    </div>
  );
}

export { HomePageTextCards };