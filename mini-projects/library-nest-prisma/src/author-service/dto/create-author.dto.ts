import {
    IsString,
    IsNotEmpty,
    IsOptional,
    IsEnum,
    Validate,
    ValidationArguments,
    ValidatorConstraintInterface
} from 'class-validator';

enum Privacy {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}

export class AuthorContactFormat implements ValidatorConstraintInterface {
    validate(authorContact: string): boolean {
        const contactRegex = /^\+\d{5}$/;
        return contactRegex.test(authorContact);
    }
    defaultMessage() {
        return 'Contact number of the author must start with a plus (+) sign followed by five numbers.';
    }
}

export class CreateAuthorDto {
    @IsNotEmpty({
        message: 'Name cannot be empty.'
    })
    @IsString({
        message: (args: ValidationArguments) =>
            `Name has to be a string, but was given ${args.value}.`
    })
    name!: string;

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
    contact?: string;

    @IsOptional()
    @IsString({
        message: (args: ValidationArguments) =>
            `Bio has to be a string, but was given ${args.value}.`
    })
    bio?: string;
    
    @IsOptional()
    @IsEnum(Privacy, {
        message: (args: ValidationArguments) =>
            `Privacy has to be a valid privacy level either 'PUBLIC' or 'PRIVATE', but was given ${args.value}.`
    })
    privacy?: Privacy;
}
