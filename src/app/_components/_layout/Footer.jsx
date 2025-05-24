export default function Footer() {

    const LinkText = ({text, link}) => {
        return (
          <a href={link} className="flex items-center gap-2 cursor-pointer text-white hover:text-gray-300 transition-colors duration-300 hover:underline">
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
            text: 'E-mail',
            link: null,
        },
        {
            text: 'Telefone',
            link: null,
        },
        {
            text: 'Instagram',
            link: null
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
            text: 'Benefícios',
            link: '#services'
        },
        {
            text: 'Perguntas',
            link: '#footer'
        }
    ]

  return (
    <footer id="footer" className="bg-gray-700 text-white flex flex-col justify-center items-center">
      <div className="flex container  justify-between p-10 ">
        <div className="pr-10 min-w-2/6">
          <a className="text-2xl font-bold " href="#header">ISAQUE MELO</a>
        </div>

    <div className="flex-1 grid grid-flow-col grid-rows-4 gap-2">
            {LinkTextContent.map((item, index) => (
                <LinkText key={index} text={item.text} link={item.link} />
            ))}
      </div>


            </div>
      <div className="bg-gray-800 w-full text-white flex justify-center">
        <div className="py-6 container text-center">
          © 2025 Todos os direitos reservados ao psicólogo Isaque Pereira de
          Melo | Criado por Sidney Figueiredo
        </div>
      </div>
    </footer>
  );
}
