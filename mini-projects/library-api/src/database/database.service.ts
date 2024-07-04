import { ILibrary } from './interfaces/library.interface';
import { Injectable } from '@nestjs/common';

import * as libraryData from './data.json';

@Injectable()
export class DatabaseService {
    public library: ILibrary = libraryData;
}
