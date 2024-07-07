import { ILibrary } from './../../dist/domain/model/library.d';
import path from 'path';
import fs from 'fs';

const LIBRARY_FILEPATH = path.join(
    process.cwd(),
    'src',
    'database',
    'data',
    'data.json'
);

export const libraryData:ILibrary = JSON.parse(
    fs.readFileSync(LIBRARY_FILEPATH, 'utf-8')
);
