import { IsString, IsNotEmpty, Validate, ArrayMinSize } from 'class-validator';
import { AuthorContactFormat } from './AuthorContactFormat';

export class CreateAuthorDto {
    @IsNotEmpty({
        message: 'Name cannot be empty.'
    })
    @IsString({
        message: 'Name has to be a string. Check your input ($value) again.'
    })
    nameInput: string;

    @IsNotEmpty({
        message: 'Name cannot be empty.'
    })
    @IsString({
        message: 'Name has to be a string. Check your input ($value) again.'
    })
    @Validate(AuthorContactFormat, {
        message:
            'Contact number of the author must start with a plus (+) sign followed by five numbers.'
    })
    contactInput: string;

    @ArrayMinSize(1, {
        message: 'Book cannot be empty.'
    })
    @IsString({
        each: true,
        message: 'Book/s has to be a string. Check your input ($value) again.'
    })
    @IsNotEmpty({
        each: true,
        message: 'Book/s has to be nonempty. Check your input ($value) again.'
    })
    booksInput: string[];
}

export class UpdateAuthorDto {}
