export default function Footer() {

    const LinkText = ({text, link}) => {
        return (
          <a href={link} className={`flex items-center gap-2 cursor-pointer text-white ${link != null ?  'hover:text-gray-300 hover:underline' : 'font-bold text-lg'} transition-colors duration-300`}>
            <i className="fa-solid fa-phone"/>
            {text}
          </a>
        )
    }

    const LinkTextContent = [
        {
            text: 'Contato',
            link: null
        },
        {
            text: '📧 melop.psi@gmail.com',
            link: 'mail:melop.psi@gmail.com',
        },
        {
            text: '📱 (11) 99131-3395',
            link: 'https://api.whatsapp.com/send?phone=5511991313395&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20triagem.',
        },
        {
            text: '🌐 Instagram',
            link: 'https://www.instagram.com/isaquemelo.psi/'
        },
        {
            text: 'Sobre mim',
            link: '#about'
        },
        {
            text: 'A Psicoterapia',
            link: '#how-it-works'
        },
        {
            text: 'Serviços',
            link: '#services'
        },
        // {
        //     text: 'Perguntas',
        //     link: null
        // }
    ]

  return (
    <footer id="footer" className="bg-gray-700 text-white flex flex-col justify-center items-center">
      <div className="flex container flex-wrap justify-between p-10 ">
        <div className="mb-10 md:pr-10 min-w-full md:min-w-2/6">
          <a className="text-2xl font-bold " href="#header">ISAQUE MELO</a>
        </div>

    <div className="flex-1 grid grid-flow-col grid-rows-4 gap-2 gap-y-3">
            {LinkTextContent.map((item, index) => (
                <LinkText key={index} text={item.text} link={item.link} />
            ))}
      </div>


            </div>
      <div className="bg-gray-800 w-full text-white flex justify-center">
        <div className="p-6 container text-center">
          © 2025 Todos os direitos reservados ao psicólogo Isaque Pereira de
          Melo | Criado por <a className="underline hover:opacity-80" target="_black" href="https://github.com/sidneyFDev">Sidney Figueiredo</a>
        </div>
      </div>
    </footer>
  );
}
