import {
    IsString,
    IsNotEmpty,
    Validate,
    ArrayMinSize,
    IsOptional,
    ValidationArguments
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { AuthorContactFormat } from './author-contact.validator';

export class CreateAuthorDto {
    @IsNotEmpty({
        message: 'Name cannot be empty.'
    })
    @IsString({
        message: (args: ValidationArguments) =>
            `Name has to be a string, but was given ${args.value}.`
    })
    readonly name: string;

    @IsOptional()
    @IsNotEmpty({
        message: 'Contact cannot be empty.'
    })
    @IsString({
        message: (args: ValidationArguments) =>
            `Contact has to be a string, but was given ${args.value}.`
    })
    @Validate(AuthorContactFormat, {
        message: (args: ValidationArguments) =>
            `Contact number of the author must start with a plus (+) sign followed by five numbers, but was given ${args.value}.`
    })
    readonly contact?: string;

    @ArrayMinSize(1, {
        message: 'Book cannot be an empty array.'
    })
    @IsString({
        each: true,
        message: (args: ValidationArguments) =>
            `Books have to be an array of string, but was given [${args.value}].`
    })
    @IsNotEmpty({
        each: true,
        message: (args: ValidationArguments) =>
            `Book has to be nonempty, but was given [${args.value}].`
    })
    readonly books: string[];
}

export class UpdateAuthorDto extends PartialType(CreateAuthorDto) {}
