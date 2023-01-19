import { Request, Response } from "express"
import { CreateSPecificationUseCase } from "./CreateSpecificationUseCase"

class CreateSpecificationController {

    constructor(private createSpecificationUseCase: CreateSPecificationUseCase) {

    }

    handle(req: Request, res: Response): Response  {
        
        const { name, description } = req.body        
        
        this.createSpecificationUseCase.execute({name, description})
    
        return res.status(201).send()
    }
}

export { CreateSpecificationController }