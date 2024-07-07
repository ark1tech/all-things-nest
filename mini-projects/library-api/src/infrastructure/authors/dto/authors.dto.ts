import { IsString, IsNotEmpty, Validate, ArrayMinSize } from 'class-validator';
import { AuthorBooksFormat } from './AuthorContactFormat';

export class CreateAuthorDto {
    @IsNotEmpty({
        message: 'Name cannot be empty.'
    })
    @IsString({
        message: 'Name has to be a string. Check your input ($value) again.'
    })
    // @Validate(AuthorBooksFormat, {
    //     message:
    //         'For books more than one, use the delimiter ;; to separate them. Check your input ($value) again.'
    // })
    nameInput: string;

    @IsNotEmpty({
        message: 'Name cannot be empty.'
    })
    @IsString({
        message: 'Name has to be a string. Check your input ($value) again.'
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
