import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
    /**
     * it is a post function with get parameters and print them
     * 
     * @param request 
     * @returns string
     * @throws eceptin
     */
    @Post()
    findAll(@Req() request: Request): string {
        console.log("dsd");
        console.log(request.body);
        return `<h1>This action returns all catsss</h1> #${request.body.fname} `;
    }
}
