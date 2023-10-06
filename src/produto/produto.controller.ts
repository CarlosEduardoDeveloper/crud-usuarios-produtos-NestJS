import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";

@Controller('/produtos')
export class ProdutoController{

    constructor (private readonly produtoRepository: ProdutoRepository){}

    @Post()
    async criarProduto(@Body() dadosDoProduto){
        this.produtoRepository.salvar(dadosDoProduto);
        return dadosDoProduto;
    }

    @Get()
    async listarProduto(){
        return this.produtoRepository.listar();
    }
    

}