const HowItWorks = () => {
  const imagePath = "/self-consciousness.jpg";

  return (
    <section
      id="how-it-works"
      className="flex
items-center justify-center py-5 bg-[#A152A4]
text-gray-900 text-center"
    >
      <div className="container mx-auto flex items-center p-10">
        <div className="flex-3/5">
          <h2 className="text-2xl font-medium">
            Por que fazer Psicoterapia Online na Abordagem Junguiana?
          </h2>
          <p>
            Nos últimos anos, a psicoterapia online tem se consolidado como uma
            alternativa eficaz e acessível para aqueles que buscam
            autoconhecimento e equilíbrio emocional. No contexto da Psicologia
            Analítica, desenvolvida por Carl Gustav Jung, essa modalidade pode
            oferecer inúmeros benefícios, proporcionando um espaço de
            transformação profunda sem a necessidade de deslocamento.
            <span className="highlight">
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
        <div className="flex-2/5">
          <img src={imagePath} alt="self-consciousness" />
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
