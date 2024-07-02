export class CreateUserDto {
    name: string;
    email: string;
    password: string;
    role: "INTERN" | "ADMIN" | "ENGINEER";
}