import {
    ValidatorConstraint,
    ValidatorConstraintInterface
} from 'class-validator';

@ValidatorConstraint({ name: 'booksFormat', async: false })
export class AuthorContactFormat implements ValidatorConstraintInterface {
    validate(authorContact: string): boolean {
        const contactRegex = /^\+\d{5}$/;
        return contactRegex.test(authorContact);
    }
    defaultMessage() {
        return 'Contact number of the author must start with a plus (+) sign followed by five numbers.';
    }
}