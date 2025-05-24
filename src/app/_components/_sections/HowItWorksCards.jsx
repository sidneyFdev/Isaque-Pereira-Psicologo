import { GreenCard } from "../items/cards";

const HowItWorksCards = () => {
  const benefits = [
    {
      title: "Autoconhecimento e Individuação",
      description:
        "A abordagem junguiana tem como um de seus principais objetivos o processo de individuação, ou seja, a busca pelo autoconhecimento e integração das diferentes partes da psique. A terapia online permite que esse processo aconteça no ambiente familiar do paciente, o que pode facilitar a introspecção e a conexão com seu mundo interno.",
    },
    {
      title: "Acessibilidade e Conforto",
      description:
        "Uma das grandes vantagens da psicoterapia online é a acessibilidade. Pessoas que moram em cidades pequenas, que possuem dificuldades de locomoção ou uma rotina intensa podem se beneficiar ao receber acompanhamento de um psicólogo especializado sem sair de casa. Além disso, estar em um ambiente confortável pode reduzir resistências iniciais ao processo terapêutico.",
    },
    {
      title: "A Profundidade da Psicoterapia Junguiana no Formato Online",
      description:
        "Muitos podem questionar se a profundidade da psicoterapia junguiana se mantém em um ambiente virtual. A resposta é sim. Técnicas como a interpretação de sonhos, a amplificação simbólica e o trabalho com arquétipos podem ser conduzidas de forma eficaz na terapia online. Além disso, o uso da escrita terapêutica e da arte, tão valorizados por Jung, pode ser incorporado digitalmente, ampliando o processo de autodescoberta.",
    },
    {
      title: "Flexibilidade e Continuidade do Processo Terapêutico",
      description:
        "Outro benefício da terapia online é a flexibilidade. Sessões podem ser adaptadas à rotina do paciente, evitando interrupções no processo terapêutico devido a viagens ou mudanças de residência. Isso garante uma continuidade essencial para o aprofundamento do trabalho psicológico.",
    },
    {
      title: "O Inconsciente e a Tecnologia",
      description:
        "Jung afirmava que a psique se comunica por meio de símbolos, e na era digital, os meios virtuais se tornaram um novo espaço de manifestação do inconsciente. Sonhos e imagens simbólicas podem surgir a partir das interações no ambiente online, e o terapeuta junguiano está preparado para trabalhar com esses conteúdos de forma significativa.",
    },
    {
      title: "Conclusão",
      description:
        "A psicoterapia online na abordagem junguiana é uma ferramenta poderosa para aqueles que desejam compreender sua psique e caminhar em direção à individuação. Com acessibilidade, flexibilidade e profundidade, essa modalidade permite um mergulho no mundo simbólico e inconsciente, promovendo transformação e crescimento pessoal.",
    },
  ];

  return (
    <section
      id="services"
      className="flex flex-col bg-white text-gray-950 items-center justify-center w-full h-full py-10"
    >
      <div className="container mx-auto flex flex-col text-center">
        <h2 className="text-3xl font-bold mb-6">Os benefícios da terapia</h2>
        <p className="text-gray-700 mb-4">
          Se você busca um processo terapêutico que vá além da escuta e conduza
          a uma jornada de autoconhecimento, a psicoterapia online junguiana
          pode ser a escolha ideal.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <GreenCard
              text2={benefit.title}
              text1={benefit.description}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default HowItWorksCards;
