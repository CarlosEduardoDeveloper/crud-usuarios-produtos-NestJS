import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico.validator";

export class CriaUsuarioDto{

    @IsNotEmpty({message: 'O nome não pode ser vazio ou nulo.'})
    nome: string;

    @IsEmail(undefined, { message: 'O e-mail informado é inválido'})
    @EmailEhUnico({ message: 'Já existe um usuário com esse email'})
    email: string;

    @MinLength(6, {message: 'A senha precisa ter pelo menos 6 caracteres.'}) 
    senha: string;
}