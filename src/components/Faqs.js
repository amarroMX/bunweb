import '../App.css'
import {useState} from "react";

const questionsAnwsers = [
    {
        question: "Quels types de café proposons-nous ?",
        answer: " Nous proposons deux types de café Sidamo, adaptés à différents types de machines et méthodes d'extraction :\n" +
            "⦁\tSidamo avec torréfaction colométrique entre 80-95 : Ce café est idéal pour les clients utilisant des machines à espresso, des capsules, ou des machines automatiques. Cette torréfaction plus légère permet de conserver les arômes délicats et les nuances florales, parfait pour l'extraction rapide.\n" +
            "⦁\tSidamo avec torréfaction colométrique entre 100-120 : Ce café, un peu plus claire, est destiné aux clients qui préfèrent des méthodes d'infusion plus longues, comme la cafetière moka, la French press, ou encore la cafetière turque. Cette torréfaction met en avant des notes plus profondes et intenses.\n" +
            "Ces deux options nous permettent de répondre aux préférences variées de nos clients en matière de goût et de préparation.\n" +
            "\n  "
    },
    {
        question: "Quelle est la durée de conservation de votre café ?",
        answer: " La durée de conservation de notre café dépend de la méthode de stockage, mais en général :\n" +
            "⦁\tCafé en grains : Il se conserve environ 6 à 9 mois après torréfaction s’il est stocké dans un endroit frais et sec, à l'abri de la lumière et de l'air. Après ouverture, il est préférable de le consommer dans les 4 à 6 semaines pour préserver au mieux ses arômes.\n" +
            "⦁\tCafé moulu : Le café moulu a une durée de conservation plus courte, environ 2 à 3 mois après torréfaction, car il perd ses arômes plus rapidement au contact de l’air. Il est recommandé de l'utiliser dans les 2 semaines après ouverture.\n" +
            "Pour prolonger la fraîcheur, il est conseillé de conserver le café dans un récipient hermétique et, si possible, d’acheter du café en grains à moudre juste avant utilisation"
    },
    {
        question: "Quels sont les délais de livraison ?",
        answer: "Actuellement, nous livrons uniquement en Suisse. Pour nos clients basés à Genève, les commandes passées avant 15h00 sont livrées le jour même. Pour le reste de la Suisse, les délais de livraison varient entre 1 à 3 jours ouvrables.  "
    },
    {
        question: "Comment puis-je choisir le meilleur café pour ma machine ?",
        answer: "\n" +
            "Pour choisir le meilleur café pour votre machine :\n" +
            "⦁\tEspresso ou automatique : Choisissez une torréfaction plus foncée (80-95), comme notre Sidamo, qui offre un goût équilibré.\n" +
            "⦁\tCapsules : Optez pour un café conçu pour machines à capsules, comme notre Sidamo avec une torréfaction adaptée.\n" +
            "⦁\tMoka, French Press, ou cafetière turque : Préférez une torréfaction légère à moyenne (100-120) pour un goût plus riche et corsé.\n" +
            "Vous n'êtes pas sûr ? Faites notre quiz pour trouver le café idéal selon vos goûts !\n  "
    }
]

export default function Faqs(){
    const [activeIndex, setActiveIndex] = useState(0)

    const faqsItems = questionsAnwsers
            .map((faqs,  index) => (
                <FaqsItem
                    question={faqs.question}
                    answer={faqs.answer}
                    id={index}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                ></FaqsItem>
            ))

    return (
        <div className="inline-block py-16 space-y-5 mt-10">
            {faqsItems}
        </div>
    )
}

function FaqsItem({question,answer, id, activeIndex , setActiveIndex}) {
        const [isActive, setIsActive] = useState(false)

        const isActiveIndex = id === activeIndex
        function HandleActiveState(){
                setActiveIndex( parseInt(id))
                setIsActive(!isActive)
        }

        return (<div onClick={() => HandleActiveState()} className="px-8 py-10 bg-white w-full bg-opacity-40 inline-block justify-between cursor-pointer rounded-md">
            <div className="flex flex-row items-center justify-between">
                <p className="font-medium capitalize text-base md:text-2xl">{question}</p>
                <div className="px-2 py-2 bg-white rounded-full  opacity-100 shadow-2xl">
                    {isActive ? <svg className="fill-white w-6"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5}
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"/>
                        </svg>: <svg className="fill-white w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" stroke-width="2"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>}

                </div>
            </div>
            {(isActive && isActiveIndex) && (
                <p className="mt-6 text-base md:text-xl font-light text-justify">{answer}</p>
            )}
        </div>)

}