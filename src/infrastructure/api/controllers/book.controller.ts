import { Controller, Delete, Get, Post, Route, SuccessResponse } from "tsoa";

@Route(`books`)
export class BookController extends Controller {
    constructor(){
        super();
    }

    @Get
    @SuccessResponse(200)
    async list():Promise<unknown>{
        return [];
    }

    @Get(`{id}`)
    @SuccessResponse(200)
    async getById():Promise<unknown>{
        return;
    } 
    
    @Post
    @SuccessResponse(201)
    async create():Promise<unknown>{
        return;
    } 
    
    @Delete(`{id}`)
    @SuccessResponse(204)
    async delete():Promise<void>{
        return;
    }     
}