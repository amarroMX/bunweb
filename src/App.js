import './App.css'
import Header from "./components/Header";
import Hero from "./components/Hero";
import Bannier from './components/Bannier'
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="bg-[radial-gradient(circle_at_center,_rgba(212,234,226,1)_62%,_rgba(255,255,255,1)_99%)] -z-20 font-sans text-sm">
            <div className="container mx-auto">
                <Header></Header>
                <Hero></Hero>
                <Bannier></Bannier>
                <Faqs></Faqs>
                <Footer></Footer>
            </div>
        </div>
    )
}