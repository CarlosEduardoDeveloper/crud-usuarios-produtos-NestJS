import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class ImagemProdutoDTO{
    
    @IsUrl(undefined, {message: 'URL para imagem válida'})
    url: string;

    @IsString()
    @IsNotEmpty({message: 'Descrição da imagem não pode ser vazia'})
    descricao: string;
}