import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequest: () => void; //função não tem parâmetros nem retorno
}

export function FeedbackContentStep(props: FeedbackContentStepProps) {
    const feedbackTypeInfo = feedbackTypes[props.feedbackType];

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

        <form>
            <textarea
            className="min-w-[304px] w-full h-[112px] my-4 bg-transparent rounded-md border-zinc-600 focus:border-brand-500 focus:outline-none focus:ring-brand-500 scrollbar scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-700"
            placeholder="Queremos te ouvir. O que você gostaria de nos dizer?"
            />
            <footer className="flex gap-2 mb-2">
                <ScreenshotButton />
                <button
                    type="submit"
                    className="p-2 flex flex-1 justify-center items-center rounded-md bg-brand-500 hover:bg-brand-300 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-darkSurfacePrimary-500 focus:ring-brand-500"
                >
                    Enviar feedback
                </button>
            </footer>
        </form>
        </>
    )
}