import {
    Controller,
    Get,
    Post,
    Param,
    Put,
    Delete,
    Query,
    Body
} from '@nestjs/common';
import { CreateNinja } from './dto/create-ninja.dto';
import { UpdateNinja } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';
import * as turtleNinjas from './data.json';

@Controller('ninjas')

// API Routes Go Here
export class NinjasController {
    // Dependency injection
    constructor(private ninja: NinjasService) {}

    // GET /ninjas --> Ninja[] using @Get() decorator
    @Get()
    getAllNinjas() {
        return this.ninja.getAllNinjas();
    }

    // @Query('type') decorator can be used here -> ?type=[param]
    @Get()
    getNinjasWithQuery(@Query('type') query: string) {
        return [query];
    }

    // GET /ninjas/:id --> Ninja with @Param() decorator
    // :id convention?
    // parsed as string probably so == instead of ===
    @Get(':id')
    getOneNinja(@Param('id') id: string) {
        return turtleNinjas.find((ninja) => ninja.id === id);
    }

    // POST /ninjas --> create Ninja
    // Use class valdiator library
    // We need to parse the request body
    @Post()
    createNinja(@Body() createNinjaDTO: CreateNinja) {
        turtleNinjas.push(createNinjaDTO);
        return turtleNinjas;
    }

    // PUT /ninjas/:id --> update Ninja
    @Put(':id')
    updateNinjas(@Param('id') id: string, @Body() updateNinjaDTO: UpdateNinja) {
        return {
            id,
            name: updateNinjaDTO.name
        };
    }

    // DELETE /ninjas/:id --> del Ninja
    @Delete(':id')
    deleteNinja(@Param('id') id: string) {
        return turtleNinjas.filter((ninja) => ninja.id !== id);
    }
}
