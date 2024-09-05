import '../App.css'
import BgCoffeeCup from '../assets/b5.webp'

export  default function App(){
    const style = {
        right: '0',
        height: '220px',
        backgroundImage: `linear-gradient(to left, rgb(255,255,255,0.73) , rgb(212, 234, 226, 0.53)), url(${BgCoffeeCup})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
  };
    return (
        <div style={style}
            className="py-6 px-8 flex flex-row items-center justify-between">
            <div className="space-y-6 w-1/2 font">
                <p className="font-semibold text-xl">Faites notre test et trouvez votre saveur .</p>
                <p className="text-2xl font-black text-[#C08267]">Découvrez le café idéal pour votre machine à la maison en quelques clics ! </p>
            </div>
            <button className="capitalize self-center text-base font-medium rounded-md hover:opacity-80 px-6 py-2 bg-[#00623B] text-white">c'est parti !</button>
        </div>
    )
}