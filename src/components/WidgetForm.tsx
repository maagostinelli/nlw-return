import { CloseButton } from "./CloseButton";

import bugImageUrl from '../assets/bug.svg';
import ideaImageUrl from '../assets/idea.svg';
import thoughtImageUrl from '../assets/thought.svg';

const feedbackTypes = {
    BUG:{
        title:"Problema",
        image: {
            source:bugImageUrl,
            alt:'Imagem de um inseto'
        }
    },
    IDEA:{
        title:"Ideia",
        image: {
            source:ideaImageUrl,
            alt:'Imagem de uma lâmpada'
        }
    },
    OTHER:{
        title:"Outro",
        image: {
            source:thoughtImageUrl,
            alt:'Imagem de um balão de pensamento'
        }
    }
}

/**
 * Object.entries(objeto) => retorna [
 * [BUG, {}],
 * [IDEA, {}],
 * [THOUGHT, {}]
 * ] //[chave,valores]
 */

export function WidgetForm() {
    return (
        <div className="bg-darkSurfacePrimary-500 p-4 relative  rounded-2xl mb-2 flex flex-col items-center w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton/>
            </header>
            <div className="flex py-4 gap-2 w-full">
                { Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button 
                        className="bg-darkSurfaceSecundary-500 rounded-2xl py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                        type="button"
                        //onClick={}
                        >
                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    )
                }) }
            </div>
            <footer className="text-sm text-zinc-400">
                Feito com ♥ pela <a className="underline underline-offset-1" href="">Maris</a>
            </footer>
        </div>
    );
}