// Capítulo 3 > Continuando a aplicação > Trabalhando com Banco de Dados > Usuário > Criando repositório de usuário
import { getRepository, Repository } from "typeorm";

import { User } from "../../entities/User";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create({ name, email, driver_license, password }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name, email, driver_license, password
        });

        await this.repository.save(user);
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ email });
        return user;
    }

    // Capítulo 3 > Continuando a aplicação > Trabalhando com Banco de Dados > Usuário > Autenticação nas rotas
    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne(id);
        return user;
    }
}

export { UsersRepository }