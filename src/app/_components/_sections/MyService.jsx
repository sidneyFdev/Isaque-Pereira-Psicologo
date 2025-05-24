"use client";

import {
  Heart,
  Briefcase,
  Rainbow,
  CloudRain,
  Heartbeat,
} from "@phosphor-icons/react";
import { BlueBubble } from "../items/cards";

const AboutMyService = () => {
  const services = [
    {
      id: 0,
      description: "Ansiedade e Estresse",
      icon: Heartbeat,
    },
    {
      id: 1,
      description: "Conflitos de trabalho",
      icon: Briefcase,
    },
    {
      id: 2,
      description: "LGBTQ+",
      icon: Rainbow,
    },
    {
      id: 3,
      description: "Depressão",
      icon: CloudRain,
    },
    {
      id: 4,
      description: "Relacionamentos",
      icon: Heart,
    },
  ];

  return (
    <section className="bg-gray-300 py-15">
        <h2 className="font-bold text-4xl pb-10 text-center text-(--c30)">Abordagens</h2>
      <div className="flex-1 flex flex-wrap max-w-full justify-center">
        {services.map((val, index) => (
          <BlueBubble key={index} icon={val.icon} description={val.description} />
        ))}
      </div>
    </section>
  );
};

export default AboutMyService;
