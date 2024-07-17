import {
    IsString,
    IsNotEmpty,
    IsOptional,
    IsInt,
    Max,
    ValidationArguments
} from 'class-validator';

export class CreateBookDto {
    @IsString({
        message: (args: ValidationArguments) =>
            `Title has to be a string, but was given ${args.value}.`
    })
    @IsNotEmpty({
        message: (args: ValidationArguments) =>
            `Title cannot be empty, but was given ${args.value}.`
    })
    title!: string;

    @IsOptional()
    @IsInt({
        message: (args: ValidationArguments) =>
            `Published year has to be an integer, but was given ${args.value}.`
    })
    @Max(new Date().getFullYear(), {
        message: (args: ValidationArguments) =>
            `Published year cannot surpass the current year (${new Date().getFullYear()}), but was given ${args.value}.`
    })
    published_year?: number;

    @IsOptional()
    @IsString({
        message: (args: ValidationArguments) =>
            `Bio has to be a string, but was given ${args.value}.`
    })
    bio?: string;
}
