import { Body, Controller, Delete, Get, Path, Post, Route, SuccessResponse } from "tsoa";
import { GetBookOutputDto, GetBooksOutputDto, PostBookInputDto, PostBookOutputDto } from "./dto";
import { createBookCodec, getBookCodec } from "./book.codec";

@Route(`books`)
export class BookController extends Controller {
    constructor(){
        super();
    }

    @Get()
    @SuccessResponse(200)
    async list(): Promise<GetBooksOutputDto>{
        return [];
    }

    @Get(`{id}`)
    @SuccessResponse(200)
    async getById(@Path() id: string): Promise<GetBookOutputDto>{

        const bookId = getBookCodec.decodeBookId(id);

        if(!bookId.success)
            throw 'Invalid book id format'

        return {
            id:'1234567',
            title:'',
            summary:'',
            author:'',
            totalPages:1
        };
    } 
    
    @Post()
    @SuccessResponse(201)
    async create(
        @Body() requestBody : PostBookInputDto
    ): Promise<PostBookOutputDto>{

        const decodingResult = createBookCodec.decode(requestBody)

        if(!decodingResult.success)
            throw decodingResult.error.message

        return {
            id:'1234567',
            title:'',
            summary:'',
            author:'',
            totalPages:1
        };
    } 
    
    @Delete(`{id}`)
    @SuccessResponse(204)
    async delete(@Path() id: string): Promise<void>{

        const bookId = getBookCodec.decodeBookId(id);

        if(!bookId.success)
            throw 'Invalid book id format'

        return;
    }     
}