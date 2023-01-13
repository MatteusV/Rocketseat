import { response, Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
// o "as" serve para sobrescrever o nome da função

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (req, res) => {
    const { name, description } = req.body;

    categoriesRepository.create(name, description)

    return res.status(201).send()
})
export { categoriesRoutes }

categoriesRoutes.get('/', (req, res) => {
   const all = categoriesRepository.list();

    return response.json(all)
})