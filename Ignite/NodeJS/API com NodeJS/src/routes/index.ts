import { Router } from 'express'
import { categoriesRoutes } from './categorie.routes'
import { specificationsRoutes } from './specifications.routes'

const router = Router()

router.use("/categories",categoriesRoutes)
router.use("/specifications",specificationsRoutes)

export { router }
