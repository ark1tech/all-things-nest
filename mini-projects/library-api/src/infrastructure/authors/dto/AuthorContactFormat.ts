import {
    ValidatorConstraint,
    ValidatorConstraintInterface
} from 'class-validator';

@ValidatorConstraint({ name: 'booksFormat', async: false })
export class AuthorContactFormat implements ValidatorConstraintInterface {
    validate(authorContact: string): boolean {
        if 
    }
    defaultMessage() {
        return 'Contact number of the author must start with a plus (+) sign followed by five numbers.';
    }
}
