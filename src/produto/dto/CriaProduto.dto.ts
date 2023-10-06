import { ArrayMinSize, IsArray, IsDateString, IsNotEmpty, IsNumber, IsString, IsUUID, MaxLength, Min, ValidateNested, isArray } from 'class-validator';
import { CaracteristicaProdutoDTO } from './CaracteristicaProduto.dto';
import { ImagemProdutoDTO } from './ImagemProduto.dto';
import { Type } from 'class-transformer';

export class CriaProdutoDTO {

    @IsUUID(undefined, { message: 'ID de usuário inválido' })
    usuarioId: string;
    
    @IsString()
    @IsNotEmpty({ message: 'Nome do produto não pode ser vazio' })
    nome: string;

    @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
    @Min(1, { message: 'O valor precisa ser maior que zero' })
    valor: number;

    @IsNumber()
    @Min(0, {message: 'Quantidade mínima inválida'})
    quantidade: number;

    @IsString()
    @Min(0, {message: 'Descrição do produto não pode ser vazia'})
    @MaxLength(100, {message: 'Descrição não pode ter mais que 1000 caracteres'})
    descricao: string;

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(1)
    @Type(() => CaracteristicaProdutoDTO)
    caracteristicas: CaracteristicaProdutoDTO[];

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(3)
    @Type(() => ImagemProdutoDTO)
    imagens: ImagemProdutoDTO[];

    @IsString()
    @IsNotEmpty({ message: 'Categoria do produto não pode ser vazia' })
    categoria: string;

    @IsDateString()
    dataCriacao: Date;

    @IsDateString()
    dataAtualizacao: Date;
  }