import express from 'express'
import cors from 'cors'
import { routes } from './routes';

const app = express(); 

app.use(cors());
//determina quais interfaces de front podem consumir nosso back
app.use(express.json()); 
//necessário pq express não entende json do corpo da requisição
app.use(routes);

app.listen(3333, () => {
    console.log("Http server running!");
})
//npx prisma studio -> interface nativa para ver banco de dade+os