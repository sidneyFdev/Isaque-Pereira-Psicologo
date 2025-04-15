export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-600 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start px-4 gap-8">
        <div className="flex-1">
          <p className="text-2xl font-bold">ISAQUE MELO</p>
        </div>

        <div className="flex-1 space-y-2">
          <p className="flex items-center gap-2">
            <i className="fa-solid fa-phone" />
            Contato
          </p>
          <p className="flex items-center gap-2">
            <i className="fa-solid fa-envelope" />
            E-mail
          </p>
          <p className="flex items-center gap-2">
            <i className="fa-solid fa-phone" />
            Telefone
          </p>
          <p className="flex items-center gap-2">
            <i className="fa-brands fa-instagram" />
            Instagram
          </p>
          <a href="#" className="inline-flex items-center gap-2 text-green-600 font-semibold hover:underline">
            <i className="fab fa-whatsapp" />
            Agendar Sessão
          </a>
        </div>

        <div className="flex-1 space-y-2">
          <a href="#about" className="text-gray-700 hover:underline">Sobre mim</a><br />
          <a href="#how-it-works" className="text-gray-700 hover:underline">A Psicoterapia</a><br />
          <a href="#services" className="text-gray-700 hover:underline">Benefícios</a><br />
          <a href="#footer" className="text-gray-700 hover:underline">Perguntas</a>
        </div>
      </div>
    </footer>
  );
}
