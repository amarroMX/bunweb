import '../App.css'
import CoffeBundle from '../assets/coffe-bundle.png'

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-between gap-24 py-16">
            <div className="inline-block  text-center space-y-1">
                <h1 className="text-[#00623B] text-8xl font-black capitalize">excellent café</h1>
                <h2 className="text-white text-6xl font-black capitalize">bonne humeur</h2>
            </div>
            <div className="relative max-w-[550px]">
                <img className="w-full h-auto mx-auto" src={CoffeBundle} alt="coffee bundles"/>
                <p className="absolute px-2 font-black py-6 rounded-full  bg-black text-white top-0 right-0 text-center">10 CHF <span className="block font-light">avec livraison</span> </p>
            </div>

        </div>
    )
}