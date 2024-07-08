import {
    IsString,
    IsNotEmpty,
    ArrayMinSize,
    ValidationArguments,
    IsOptional,
    IsInt,
    Length
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateBookDto {
    @IsNotEmpty({
        message: 'Title cannot be empty.'
    })
    @IsString({
        message: (args: ValidationArguments) =>
            `Title has to be a string, but was given ${args.value}.`
    })
    readonly title: string;

    @IsOptional()
    @IsNotEmpty({
        message: 'Published year cannot be empty.'
    })
    @IsInt({
        message: (args: ValidationArguments) =>
            `Published year has to be an integer, but was given ${args.value}.`
    })
    @Length(1, 4, {
        message: (args: ValidationArguments) =>
            `Published year has to have a length of 1 to 4, but was given ${args.value}.`
    })
    readonly published_year: number;

    @ArrayMinSize(1, {
        message: 'Author cannot be an empty array.'
    })
    @IsString({
        each: true,
        message: (args: ValidationArguments) =>
            `Authors have to be an array of string, but was given [${args.value}].`
    })
    @IsNotEmpty({
        each: true,
        message: (args: ValidationArguments) =>
            `Author has to be nonempty, but was given [${args.value}].`
    })
    readonly authors: string[];
}

export class UpdateBookDto extends PartialType(CreateBookDto) {}
