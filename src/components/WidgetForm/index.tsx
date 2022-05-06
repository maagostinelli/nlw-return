import { useState } from "react";

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
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

export type FeedbackType = keyof typeof feedbackTypes; //do typescript ->"cria" os valores q o FeedbackType pode receber (as keys)

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType|null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-darkSurfacePrimary-500 p-4 relative  rounded-2xl mb-2 flex flex-col items-center w-[calc(100vw-2rem)] md:w-auto">

            
            { feedbackSent ? (
                <FeedbackSuccessStep 
                onFeedbackRestartRequest={handleRestartFeedback}
                />
            ) : (
                <>
                {!feedbackType ? (
                <FeedbackTypeStep  
                onFeedbackTypeChanged={setFeedbackType}/>
            ) : (
                <FeedbackContentStep 
                feedbackType={feedbackType}
                onFeedbackRestartRequest={handleRestartFeedback}
                onFeedbackSent={() =>setFeedbackSent(true)}
                />
            )}
                </>
            )}

            <footer className="text-sm text-zinc-400">
                Feito com ♥ pela <a className="underline underline-offset-1" href="">Maris</a>
            </footer>
        </div>
    );
}