import express from "express";                       
import routes from "./routes/index.js";

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro);
})

conexao.once("open", () => {
    console.log("Conexão feita com sucesso!");
})

const app = express();
routes(app);

export default app;
