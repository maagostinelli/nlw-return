import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps{
    onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep(props: FeedbackTypeStepProps) {
    return (
        <>
        <header>
            <span className="text-xl leading-6">Deixe seu feedback</span>
            <CloseButton/>
        </header>
        <div className="flex py-4 gap-2 w-full">
                { Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button 
                            key={key} //propriedade específica do react
                            className="bg-darkSurfaceSecundary-500 rounded-2xl py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            type="button"
                            onClick={() => props.onFeedbackTypeChanged(key as FeedbackType)} //onclick recebe uma função, não sua execussão
                        >
                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    )
                }) }
        </div>
        </>
    )
}