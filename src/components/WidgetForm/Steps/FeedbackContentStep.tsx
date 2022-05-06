import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequest: () => void; //função não tem parâmetros nem retorno
    onFeedbackSent: () => void;
}

export function FeedbackContentStep(props: FeedbackContentStepProps) {

    const [screenshot, setScreenshot] = useState< string | null >(null); //<recebe string ou nulo>
    const [comment, setComment] = useState('');
    const feedbackTypeInfo = feedbackTypes[props.feedbackType];

    function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault();
        console.log({
            screenshot,
            comment
        })
        props.onFeedbackSent()
    } //previne onSubmit dar refresh na pag por defaul

    return (
        <>
        <header>
            <button 
            type="button" 
            onClick={props.onFeedbackRestartRequest}
            className="w-4 h-4 absolute left-5 top-5 text-zinc-400 hover:text-zinc-100"
            >
                <ArrowLeft weight="bold"/>
            </button>
            <span className="text-xl leading-6 flex items-center gap-2">
                <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
                {feedbackTypeInfo.title}
                </span>
            <CloseButton/>
        </header>

        <form onSubmit={handleSubmitFeedback}>
            <textarea
            className="min-w-[304px] w-full h-[112px] my-4 bg-transparent rounded-md border-zinc-600 focus:border-brand-500 focus:outline-none focus:ring-brand-500 scrollbar scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-700"
            placeholder="Queremos te ouvir. O que você gostaria de nos dizer?"
            onChange={event => setComment(event.target.value)} //qnd conteudo do textarea mudar, o evento é disparado e guarda no setComment o valor da textarea
            />
            <footer className="flex gap-2 mb-2">
                <ScreenshotButton 
                    screenshot={screenshot}
                    onScreenshotTook={setScreenshot}
                />
                <button
                    type="submit"
                    disabled={comment.length === 0 && screenshot === null}
                    className="p-2 flex flex-1 justify-center items-center rounded-md bg-brand-500 hover:bg-brand-300 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-darkSurfacePrimary-500 focus:ring-brand-500 disabled:opacity-40 disabled:hover:bg-brand-500"
                >
                    Enviar feedback
                </button>
            </footer>
        </form>
        </>
    )
}