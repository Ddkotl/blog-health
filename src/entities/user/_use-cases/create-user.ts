import { privateConfig } from "@/shared/config/private";
import { createId } from "@/shared/lib/id";
import { ROLES, UserEntity } from "../_domain/types";
import { userRepository } from "../_repositories/user.repository";

type CreateUser = {
  email: string;
  name?: string | null;
  image?: string | null;
  emailVerified: Date | null;
};

export class CreateUserUseCase {
  async exec(data: CreateUser) {
    const adminEmails = privateConfig.ADMIN_EMAILS?.split(",") ?? [];
    const role = adminEmails.includes(data.email) ? ROLES.ADMIN : ROLES.USER;

    const user: UserEntity = {
      id: createId(),
      role,
      ...data,
    };
    return await userRepository.createUser(user);
  }
}

export const createUserUseCase = new CreateUserUseCase();
