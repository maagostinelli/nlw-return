import { useState } from "react";

import { Camera } from "phosphor-react";
import html2canvas from 'html2canvas';
import { Loading } from "./Loading";

export function ScreenshotButton() {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

    async function handleTakeScreenshot() {
        setIsTakingScreenshot(true)

        const canvas = await html2canvas(document.querySelector('html')!);
        const base64img = canvas.toDataURL('image/png');
        //tira um print da tag html toda - ! serve para "declarar" certeza deq a tag vai ser encontrada
        //transforma a imagem do formato png para base64 (texto)

        //setIsTakingScreenshot(false)
    }

    return (
        <button
            type="button"
            onClick={handleTakeScreenshot}
            className="p-2 bg-zinc-700 rounded-md hover:bg-zinc-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-darkSurfacePrimary-500 focus:ring-brand-500"
        >
            { isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6"/> }
        </button>
    )
}