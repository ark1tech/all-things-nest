import { ILibrary } from './../database/interfaces/library.interface';
import * as path from 'node:path';
import * as fs from 'node:fs';

const LIBRARY_FILEPATH = path.join(
    process.cwd(),
    'src',
    'database',
    'data',
    'data.json'
);

export const libraryData: ILibrary = JSON.parse(
    fs.readFileSync(LIBRARY_FILEPATH, 'utf-8')
);
