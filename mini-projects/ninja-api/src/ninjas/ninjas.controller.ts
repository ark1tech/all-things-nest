import { Controller, Get, Post, Param, Put, Delete, Query} from '@nestjs/common';
import * as turtleNinjas from './data.json';

@Controller('ninjas')

// API Routes Go Here
export class NinjasController {
    // GET /ninjas --> Ninja[] using @Get() decorator
    @Get()
    getNinjas() {
        return turtleNinjas;
    }

    // @Query('type') decorator can be used here -> ?type=[param]
    @Get()
    getNinjasWithQuery(@Query('type') query:string) {
        return [query];
    }

    // GET /ninjas/:id --> Ninja with @Param() decorator
    // :id convention?
    // parsed as string probably so == instead of ===
    @Get(':id')
    getOneNinja(@Param('id') id: number) {
        return turtleNinjas.find((ninja) => ninja.id == id);
    }

    // POST /ninjas
    @Post()
    createNinja() {
        return turtleNinjas;
    }

    // PUT /ninjas/:id --> update Ninja
    @Put(':id')
    updateNinjas(@Param('id') id: number) {
        return turtleNinjas.find((ninja) => ninja.id == id);
    }   

    // DELETE /ninjas/:id --> del Ninja
    @Delete(':id')
    deleteNinja(@Param('id') id: number) {
        return turtleNinjas.filter((ninja) => ninja.id != id);
    }
}
