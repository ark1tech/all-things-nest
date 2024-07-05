import {
    ValidatorConstraint,
    ValidatorConstraintInterface
} from 'class-validator';

@ValidatorConstraint({ name: 'booksFormat', async: false })
export class AuthorBooksFormat implements ValidatorConstraintInterface {
    validate(authorBooks: string) {
        const bookArray = authorBooks.split(';;').map((book) => book.trim());
        if (bookArray.length === 1 && !authorBooks.includes(';;')) {
            return true;
        } else if (bookArray.length > 1 && authorBooks.includes(';;')) {
            return true;
        } else {
            return false;
        }
    }
    defaultMessage() {
        return 'For books more than one, use the delimiter ;; to separate them. Check your input ($value) again.';
    }
}
