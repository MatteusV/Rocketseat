import { SpecificationRepository } from "../../repositories/implemetations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSPecificationUseCase } from "./CreateSpecificationUseCase";


const specificationRepository = new SpecificationRepository();

const createSpecificationUseCase = new CreateSPecificationUseCase( specificationRepository );

const createSpecificationController = new CreateSpecificationController( createSpecificationUseCase );

export { createSpecificationController }