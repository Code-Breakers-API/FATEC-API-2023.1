import { AppDataSource } from "../data-source";
import { Profile } from "../entities/ProfileUsers";

export const profileRepository = AppDataSource.getRepository(Profile)