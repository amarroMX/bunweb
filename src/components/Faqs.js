import '../App.css'
import {useState} from "react";

const questionsAnwsers = [
    {
        question: "Quels types de café proposez-vous ?",
        answer: "On propose du cafe d'Afrique de divers regions. Notre specialite est le cafe Ethiopian  "
    },
    {
        question: "Quels types de café proposez-vous ?",
        answer: "On propose du cafe d'Afrique de divers regions. Notre specialite est le cafe Ethiopian  "
    },
    {
        question: "Quels types de café proposez-vous ?",
        answer: "On propose du cafe d'Afrique de divers regions. Notre specialite est le cafe Ethiopian  "
    },
    {
        question: "Quels types de café proposez-vous ?",
        answer: "On propose du cafe d'Afrique de divers regions. Notre specialite est le cafe Ethiopian  "
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
                <p className="font-medium capitalize text-2xl">{question}</p>
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
                <p className="mt-6 text-2xl">{answer}</p>
            )}
        </div>)

}