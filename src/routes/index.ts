// 1.	Capitulo 2 > Iniciando a API > Continuação da aplicação > Refatorando as rotas
import { Router } from "express";

import { categoriesRoutes } from "./categories.routes"
import { specificationsRoutes } from "./specification.routes"
import { usersRoutes } from "./users.routes"
import { authenticateRoutes } from "./authenticate.routes"

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationsRoutes);
router.use('/users', usersRoutes);
router.use(authenticateRoutes);

export { router }