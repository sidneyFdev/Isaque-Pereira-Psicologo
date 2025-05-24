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
    <section className="bg-gray-100 py-20">
      <div className="flex mx-auto px-4 justify-between max-w-7xl">
        {services.map((val, index) => (
          <BlueBubble key={index} icon={val.icon} description={val.description} />
        ))}
      </div>
    </section>
  );
};

export default AboutMyService;
