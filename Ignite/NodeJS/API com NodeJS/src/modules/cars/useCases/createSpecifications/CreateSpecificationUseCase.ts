import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSPecificationUseCase {
   
    constructor(private specificationRepository: ISpecificationRepository) {

    }
    
    execute({name, description}: IRequest): void {

        const specificationAlreadyExists = this.specificationRepository.findByName(name)

        if(specificationAlreadyExists) {
            throw new Error(`Specification ${name} already exists`)
        }

        this.specificationRepository.create({
            name,
            description,
        })
    }
}

export { CreateSPecificationUseCase }