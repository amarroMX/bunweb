import '../App.css'
import Logo from '../assets/logo.svg'
export default function Header(){
    return (
        <header>
            <nav className="flex flex-row justify-between items-center py-2">
                <a href="/" className="flex-initial items-center">
                    <img src={Logo} alt="logo"/>
                </a>
                <a href="/" className="inline-flex items-center px-6 py-2 bg-[#00623B] rounded-md text-white">
                    Commander sur WhatsApp
                </a>
            </nav>
        </header>
    )
}