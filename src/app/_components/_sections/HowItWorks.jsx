const HowItWorks = () => {
  const imagePath = "/self-consciousness.jpg";

  return (
    <section
      id="how-it-works"
      className="flex relative
items-center justify-center py-4 px-4 lg:py-10 bg-[#A152A4]
text-gray-900 text-center"
    >
      <div className="container flex justify-center items-center py-10 text-lg">
        <div className="flex-1 z-20 lg:flex-2/5 space-y-5">
          <h2 className="text-2xl font-bold">
            Por que fazer Psicoterapia Online na Abordagem Junguiana?
          </h2>
          <p>
            Nos últimos anos, a psicoterapia online tem se consolidado como uma
            alternativa eficaz e acessível para aqueles que buscam
            autoconhecimento e equilíbrio emocional. No contexto da Psicologia
            Analítica, desenvolvida por Carl Gustav Jung, essa modalidade pode
            oferecer inúmeros benefícios, proporcionando um espaço de
            transformação profunda sem a necessidade de deslocamento.
            <span className="font-semibold">
              {" "}
              A psicoterapia online é uma opção viável e segura.
            </span>
          </p>
          <p>
            Além disso, a flexibilidade do atendimento online permite que mais
            pessoas tenham acesso a esse tipo de suporte, independentemente de
            sua localização geográfica.
          </p>
        </div>
        <div className="flex-1 opacity-10 h-full w-full absolute lg:relative lg:opacity-100 z-10 lg:flex-3/5">
          <img src={imagePath} alt="self-consciousness" className="object-cover h-full w-full" />
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
