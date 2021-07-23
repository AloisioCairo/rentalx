// 1. Capitulo 2 > Iniciando a API > S.O.L.I.D > Utilizando princípio de responsabilidade única (SRP)
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {

    }

    async execute({ name, description }: IRequest): Promise<void> {
        const categryAlreadyExists = await this.categoriesRepository.findByName(name);

        if (categryAlreadyExists) {
            throw new Error("Category already exists!")
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase }