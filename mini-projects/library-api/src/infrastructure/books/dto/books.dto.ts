export class CreateBookDto {
    name: string;
    published_year: number;
    // id: string;
}

export class UpdateBookDto {
    name?: string;
    published_year?: number;
    // id?: string;
}
