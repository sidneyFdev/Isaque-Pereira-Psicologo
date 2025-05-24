import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"

export const WhatsApp = ({text}) => {
    return (
        <div className="flex flex-col items-center justify-center mt-10">
        <a
            href="https://api.whatsapp.com/send?phone=5511991313395&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20triagem."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white font-bold py-3 px-6 border-2
            border-green-600
            rounded-full shadow-lg hover:bg-green-600
            transition duration-300 ease-in-out
            flex items-center justify-center text-xl active:scale-98"
        >
            <WhatsappLogo size={30}/>{ text }
        </a>
        </div>
    )
}