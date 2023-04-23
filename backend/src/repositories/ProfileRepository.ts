import { AppDataSource } from "../data-source";
import { ProfileUsers } from "../entities/ProfileUsers";

export const profileRepository = AppDataSource.getRepository(ProfileUsers)