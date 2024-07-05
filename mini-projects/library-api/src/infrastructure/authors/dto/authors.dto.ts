import { IsString, IsNotEmpty, Validate } from 'class-validator';
import { AuthorBooksFormat } from './AuthorBooksFormat';

export class CreateAuthorDto {
    @IsNotEmpty({
        message: 'Name cannot be empty'
    })
    @IsString({
        message: 'Name has to be a string. Check your input ($value) again.'
    })
    @Validate(AuthorBooksFormat, {
        message:
            'For books more than one, use the delimiter ;; to separate them. Check your input ($value) again.'
    })
    nameInput: string;

    @IsNotEmpty({
        message: 'Book/s cannot be empty'
    })
    @IsString({
        message: 'Book/s has to be a string. Check your input ($value) again.'
    })
    booksInput: string;
}

export class UpdateAuthorDto {
    nameInput?: string;
    booksInput?: string;
}
