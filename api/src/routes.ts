import { Router } from "express";
import buscarCurso from "./controllers/buscarCurso";
import buscarCursoNome from "./controllers/buscarCursoNome";
import cadastrarCurso from "./controllers/cadastrarCurso";
import cadastrarUsuario from "./controllers/cadastrarUsuario";
import desativarCurso from "./controllers/desativarCurso";
import editarCurso from "./controllers/editarCurso";

const router = Router();

router.post("/api/cadastrarUsuario", cadastrarUsuario);
router.post("/api/cadastrarCurso", cadastrarCurso);
router.get("/api/buscarCursos", buscarCurso);
router.get("/api/buscarCursoNome", buscarCursoNome);
router.put("/api/editarCurso", editarCurso);
router.put("/api/desativarCurso", desativarCurso);

export default router;