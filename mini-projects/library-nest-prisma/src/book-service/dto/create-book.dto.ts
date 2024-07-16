import {
    IsString,
    IsNotEmpty,
    IsOptional,
    IsInt,
    IsBoolean,
} from 'class-validator';

export class CreateBookDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsInt()
    @IsOptional()
    published_year?: number;

    @IsString()
    @IsOptional()
    bio?: string;

    @IsBoolean()
    @IsOptional()
    published?: boolean;
}
