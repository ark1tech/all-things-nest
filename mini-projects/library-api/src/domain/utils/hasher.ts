import { v5 as uuidv5 } from 'uuid';

const NAMESPACE_OID = '6ba7b812-9dad-11d1-80b4-00c04fd430c8';
const hash = (name: string) => {
    return uuidv5(name, NAMESPACE_OID);
};

console.log("1");
console.log(hash("J.K. Rowling"));
console.log("2");
console.log(hash("J.R.R. Tolkien"));
console.log("3");
console.log(hash("George R.R. Martin"));
console.log("4");
console.log(hash("Neil Gaiman"));

console.log("================");

console.log("1");
console.log(hash("Harry Potter and the Philosopher's Stone"));
console.log("2");
console.log(hash("The Hobbit"));
console.log("3");
console.log(hash("A Game of Thrones"));
console.log("4");
console.log(hash("Harry Potter and the Chamber of Secrets"));
console.log("5");
console.log(hash("Good Omens"));
