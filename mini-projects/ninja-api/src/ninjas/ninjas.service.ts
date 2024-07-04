import { Injectable } from '@nestjs/common';
import * as turtleNinjas from './data.json';
import { Ninja } from './ninjas.model';

@Injectable() // This provider is something that can be injected 
export class NinjasService {
    private turtleNinjasService:Ninja[] = turtleNinjas;

    getAllNinjas() {
        return this.turtleNinjasService;
    }

    getNinjasWithQuery(){
        
    }
    
    
}
