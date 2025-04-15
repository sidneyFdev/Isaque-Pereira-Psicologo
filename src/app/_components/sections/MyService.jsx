"use client"

import { Heart, Briefcase, Rainbow, CloudRain, Heartbeat } from "@phosphor-icons/react";

const AboutMyService = () => {

  const icons = {
    Heart,
    Briefcase,
    Rainbow,
    CloudRain,
    Heartbeat
  };

  const services = [
    {
      id: 0,
      description: "Ansiedade e Estresse",
      icon: "Heartbeat"
    },
    {
      id: 1,
      description: "Conflitos de trabalho",
      icon: "Briefcase"
    },
    {
      id: 2,
      description: "LGBTQ+",
      icon: "Rainbow"
    },
    {
      id: 3,
      description: "Depressão",
      icon: "CloudRain"
    },
    {
      id: 4,
      description: "Relacionamentos",
      icon: "Heart"
    }
  ]

  return (
    <section className="bg-gray-100 py-20">
      <div className="flex mx-auto px-4 justify-between max-w-7xl">
        {services.map((val,index)=>{
            const Icon = icons[val.icon];
            return (
            <div key={index} className="text-center flex flex-col justify-center items-center bg-blue-500 text-white rounded-full p-4 mb-4 h-40 w-40">
              <div className="flex justify-center items-center">
                <Icon className="text-4xl mb-2" />
              </div>
              <p className="text-lg">{val.description}</p>
            </div>
            )
        })}
      </div>
    </section>
  )
}
export default AboutMyService;