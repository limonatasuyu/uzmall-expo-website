"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { customLoader } from "@/lib/customLoader";
import Link from "next/link";
const speakers = [
  {
    name: "Мурат Азамов",
    role: "Организатор",
    image: "/avatar-icon.png",
    description: "Основатель и эксперт по систематизации бизнеса, Ассоциации Франчайзинга Узбекистана (UFA). Более 300 магазинов в 10 странах мира. Среди клиентов Collin's, Nautica"
  },
  {
    name: "Диана Курбанова",
    role: "Организатор",
    image: "/avatar-icon.png",
    description: "Зам. председателя Ассоциации Франчайзинга Узбекистана (UFA). Co-основатель франчайзинговой сети магазинов 7DaySocks и консалтингового агентства UzFranchise"
  },
  {
    name: "Виктор Ляшевский",
    role: "Организатор",
    image: "/avatar-icon.png",
    description: "Международный эксперт по франчайзингу, автор делового бестселлера «Франшиза на 360». 6 клиентов вошли в топ-100 по версии Forbes. Среди клиентов «33 пингвина», «СДЭК», «Юниор», «Газпром Трансгаз»."
  }
];

function SpeakerCard({ name, role, image, description }: {
  name: string;
  role: string;
  image: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-lg p-6 pt-12 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col items-center">
        <div className="relative w-[120px] h-[120px] mb-4">
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-full object-cover"
            loader={customLoader}
          />
        </div>
        <h3 className="text-xl font-semibold mb-1 text-[#095d66]">{name}</h3>
        <p className="text-gray-600 mb-4">{role}</p>
        <p className="text-gray-800 text-center text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export function HomePageSpeakers() {
  const { t } = useTranslation();

  return (
<>
      <Link href="/speakers" className="text-[2.5rem] font-bold text-center text-white">
        <h3 className="cursor-pointer"> {t("HomePage.programSection.subtitle")} </h3>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {speakers.map((speaker) => (
          <SpeakerCard
            key={speaker.name}
            name={speaker.name}
            role={speaker.role}
            image={speaker.image}
            description={speaker.description}
          />
        ))}
      </div>
    </>
  );
} 
