const Header = () => {
  return (
    <header id="header" className="bg-[#4D879A] text-white p-2 h-max-[8vh]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="h-[60px] w-[300px] overflow-hidden " >
          <img src="./logo.png" alt="Logo" className="h-full w-full object-cover"/>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-gray-400">Sobre Mim</a></li>
            <li><a href="#how-it-works" className="hover:text-gray-400">A Psicoterapia</a></li>
            <li><a href="#services" className="hover:text-gray-400">Serviços e Benefícios</a></li>
            <li><a href="#footer" className="hover:text-gray-400">Contato</a></li>
          </ul>
        </nav>
      </div>  
    </header>
  );
}

export default Header;