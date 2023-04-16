import User from "../entities/User";
import IUser from "../interfaces/IUsers";
import { AppDataSource } from "../../database/data-source";

const userRepository = AppDataSource.getRepository(User);

const getUsers = (): Promise<IUser[]> => {
    return userRepository.find();
}

export default { getUsers };