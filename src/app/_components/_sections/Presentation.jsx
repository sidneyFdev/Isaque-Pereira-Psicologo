import { SquaresBackground } from "../items/square";
import { WhatsApp } from "../items/whatsapp";

const Presentation = () => {

  return (
    <section id="about" className="flex flex-col items-center justify-center text-gray-600 text-center">
      <SquaresBackground>
      <div className="container mx-auto flex flex-col items-center p-10 space-x-0 md:space-x-10 md:flex-row md:py-20">
        <div className="flex-1 justify-center items-center md:flex-1/2 pb-10">
                   <img src="./logo.png" alt="Logo" className="h-full w-full object-cover"/>
        </div>
        <div className="flex-1/2 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold">Apresentação</h1>
          <p className="mt-4 text-lg">
            Olá, sou Isaque Melo, psicólogo e especialista em terapia cognitivo-comportamental.
            Estou aqui para ajudar você a superar desafios emocionais e alcançar seu bem-estar.
          </p>
          <p className="mt-4 text-lg">
            Com uma abordagem empática e personalizada, ofereço um espaço seguro para você explorar seus sentimentos e pensamentos.
            Vamos juntos trabalhar em direção a uma vida mais equilibrada e satisfatória.
          </p>
          <p className="mt-3">
          "Quem olha pra fora, sonha, mas quem olha pra dentro, DESPERTA" - 
          <span className="mt-4">Carl Gustav Jung</span>
        </p>

          <WhatsApp text="Agende uma consulta" />
        </div>
      </div>
      </SquaresBackground>
    </section>
  );
}
export default Presentation;